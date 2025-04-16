// This file helps avoid the "process is not defined" error in the browser
// It's injected into the HTML via a script tag
(function() {
  // For GitHub Pages deployment, we don't need any base path
  // as the site is deployed at the root level of the domain
  window.__ENV__ = {
    NEXT_PUBLIC_BASE_PATH: ''
  };
})();