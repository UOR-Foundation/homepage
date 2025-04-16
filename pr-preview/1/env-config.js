// This file helps avoid the "process is not defined" error in the browser
// It's injected into the HTML via a script tag
(function() {
  // Detect if we're in a staging environment
  const pathname = window.location.pathname;
  let basePath = '';
  
  // Check for staging environment pattern
  const stagingMatch = pathname.match(/\/staging-(\d+)/);
  if (stagingMatch) {
    basePath = stagingMatch[0]; // e.g., "/staging-123"
  }
  
  // Set the environment variables
  window.__ENV__ = {
    NEXT_PUBLIC_BASE_PATH: basePath
  };
  
  // Debug log
  console.log('Auto-detected base path:', basePath);
})();