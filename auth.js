/**
 * InvertProfit — Auth Guard
 * Protege páginas de academia: requiere sesión activa.
 * Timeout de inactividad: 2 minutos.
 */
(function () {
    var TWO_MINUTES = 2 * 60 * 1000;

    function getSession() {
        return {
            auth: localStorage.getItem('ip_authenticated'),
            lastActivity: parseInt(localStorage.getItem('ip_last_activity') || '0')
        };
    }

    function clearSession() {
        localStorage.removeItem('ip_authenticated');
        localStorage.removeItem('ip_last_activity');
    }

    function redirectToLogin() {
        window.location.replace('Login.html');
    }

    function checkAuth() {
        var s = getSession();
        var now = Date.now();
        if (!s.auth || (now - s.lastActivity) > TWO_MINUTES) {
            clearSession();
            redirectToLogin();
            return false;
        }
        return true;
    }

    function updateActivity() {
        if (localStorage.getItem('ip_authenticated')) {
            localStorage.setItem('ip_last_activity', Date.now().toString());
        }
    }

    // Verificar al cargar
    if (!checkAuth()) return;

    // Actualizar actividad con eventos del usuario
    ['mousemove', 'click', 'keypress', 'scroll', 'touchstart'].forEach(function (evt) {
        document.addEventListener(evt, updateActivity, { passive: true });
    });

    // Verificar periódicamente cada 15 segundos
    setInterval(checkAuth, 15000);
})();
