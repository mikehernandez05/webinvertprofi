/**
 * AUTH.js — InvertProfit Session Guard
 * Checks if user is authenticated before loading protected pages.
 * Redirects to Login.html if not authenticated.
 */
(function () {
  var SESSION_KEY = 'ip_authenticated';
  var ACTIVITY_KEY = 'ip_last_activity';
  var SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

  function isAuthenticated() {
    var auth = localStorage.getItem(SESSION_KEY);
    if (auth !== '1') return false;

    // Check timeout
    var lastActivity = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0', 10);
    if (Date.now() - lastActivity > SESSION_TIMEOUT) {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ACTIVITY_KEY);
      return false;
    }
    return true;
  }

  function refreshActivity() {
    localStorage.setItem(ACTIVITY_KEY, Date.now().toString());
  }

  // Guard: redirect if not authenticated
  // Skip guard on Login.html itself
  var currentPage = window.location.pathname.split('/').pop().toLowerCase();
  var publicPages = ['login.html', 'index.html', ''];

  if (publicPages.indexOf(currentPage) === -1 && !isAuthenticated()) {
    window.location.replace('Login.html');
  } else if (isAuthenticated()) {
    refreshActivity();
  }

  // Expose for other scripts
  window.AUTH = {
    isAuthenticated: isAuthenticated,
    logout: function () {
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(ACTIVITY_KEY);
      window.location.href = 'Login.html';
    },
    refreshActivity: refreshActivity
  };
})();
