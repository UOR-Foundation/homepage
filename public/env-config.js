// This file helps avoid the "process is not defined" error in the browser
// It's injected into the HTML via a script tag
(function() {
  // Detect the base path from the URL
  const pathname = window.location.pathname;
  let basePath = '';
  
  // The URL path will be like: /repo-name or /repo-name/staging-123
  const pathParts = pathname.split('/').filter(Boolean);
  
  if (pathParts.length > 0) {
    // First part is always the repo name
    basePath = '/' + pathParts[0];
    
    // If there's a staging prefix, add it
    if (pathParts.length > 1 && pathParts[1].startsWith('staging-')) {
      basePath += '/' + pathParts[1];
    }
  }
  
  // Set the environment variables
  window.__ENV__ = {
    NEXT_PUBLIC_BASE_PATH: basePath
  };
  
  // Debug log
  if (window.location.hostname === 'localhost') {
    console.log('Auto-detected base path:', basePath);
  }
})();