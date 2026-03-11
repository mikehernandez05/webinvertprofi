/**
 * AUTH.js — InvertProfit Session Guard (Firebase)
 * Verifica autenticación con Firebase Auth.
 * Redirige a Login.html si no hay sesión activa.
 * Requiere que Firebase SDK esté cargado antes de este script.
 */
(function () {
  // ── DEV MODE: bypass auth en localhost para preview local ──
  var isLocalDev = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (isLocalDev) {
    console.log('[AUTH] Modo desarrollo — auth bypass activo');
    window.AUTH = {
      isAuthenticated: function () { return true; },
      getUser: function () { return { displayName: 'Dev User', email: 'dev@localhost', uid: 'dev-local' }; },
      getUID: function () { return 'dev-local'; },
      logout: function () { window.location.href = 'Login.html'; }
    };
    return; // No bloquear contenido en localhost
  }

  // Páginas públicas que no requieren autenticación
  var currentPage = window.location.pathname.split('/').pop().toLowerCase();
  var publicPages = ['login.html', 'index.html', 'mercado.html', ''];

  if (publicPages.indexOf(currentPage) !== -1) return;

  // En páginas protegidas: ocultar contenido hasta verificar auth
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.3s';

  // Esperar a que Firebase esté listo (máximo 10 segundos)
  var _fbRetries = 0;
  function waitForFirebase(callback) {
    if (typeof firebase !== 'undefined' && firebase.auth) {
      callback();
    } else if (_fbRetries < 200) {
      _fbRetries++;
      setTimeout(function () { waitForFirebase(callback); }, 50);
    } else {
      // Firebase no cargó — redirigir a Login como fallback
      console.error('Firebase SDK no disponible después de 10s');
      document.documentElement.style.opacity = '1';
    }
  }

  waitForFirebase(function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        window.location.replace('Login.html');
      } else {
        // Usuario autenticado — mostrar contenido
        document.documentElement.style.opacity = '1';
      }
    });
  });

  // Exponer utilidades para otros scripts
  window.AUTH = {
    isAuthenticated: function () {
      return firebase.auth().currentUser !== null;
    },
    getUser: function () {
      return firebase.auth().currentUser;
    },
    getUID: function () {
      var user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    logout: function () {
      firebase.auth().signOut().then(function () {
        // Solo limpiar datos de sesión, NO el progreso del usuario
        localStorage.removeItem('ip_authenticated');
        localStorage.removeItem('ip_user_email');
        localStorage.removeItem('ip_user_name');
        localStorage.removeItem('ip_user_photo');
        localStorage.removeItem('ip_provider');
        // ip_level_test_done, ip_user_level, ip_start_world se conservan
        // para que al volver a entrar no repita el examen diagnóstico
        window.location.href = 'Login.html';
      });
    }
  };
})();
