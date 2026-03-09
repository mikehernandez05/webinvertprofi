/**
 * AUTH.js — InvertProfit Session Guard (Firebase)
 * Verifica autenticación con Firebase Auth.
 * Redirige a Login.html si no hay sesión activa.
 * Requiere que Firebase SDK esté cargado antes de este script.
 */
(function () {
  // Páginas públicas que no requieren autenticación
  var currentPage = window.location.pathname.split('/').pop().toLowerCase();
  var publicPages = ['login.html', 'index.html', 'mercado.html', ''];

  if (publicPages.indexOf(currentPage) !== -1) return;

  // En páginas protegidas: ocultar contenido hasta verificar auth
  document.documentElement.style.opacity = '0';
  document.documentElement.style.transition = 'opacity 0.3s';

  // Esperar a que Firebase esté listo
  function waitForFirebase(callback) {
    if (typeof firebase !== 'undefined' && firebase.auth) {
      callback();
    } else {
      setTimeout(function () { waitForFirebase(callback); }, 50);
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
        localStorage.removeItem('ip_authenticated');
        localStorage.removeItem('ip_user_email');
        localStorage.removeItem('ip_user_name');
        localStorage.removeItem('ip_user_photo');
        localStorage.removeItem('ip_provider');
        localStorage.removeItem('ip_level_test_done');
        localStorage.removeItem('ip_user_level');
        localStorage.removeItem('ip_start_world');
        window.location.href = 'Login.html';
      });
    }
  };
})();
