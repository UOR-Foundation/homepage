// This file helps avoid the "process is not defined" error in the browser
// It's injected into the HTML via a script tag
(function() {
  // Auto-detect the base path for GitHub Pages PR previews
  const pathname = window.location.pathname;
  let basePath = '';
  
  // Check for PR preview pattern in the URL path
  // Example: /homepage/pr-preview/123/
  if (pathname.includes('/pr-preview/')) {
    const pathParts = pathname.split('/');
    const previewIndex = pathParts.findIndex(part => part === 'pr-preview');
    
    if (previewIndex >= 0) {
      // Include repository name, pr-preview directory, and PR number
      basePath = pathParts.slice(0, previewIndex + 2).join('/');
    }
  }
  
  // Set the environment variables
  window.__ENV__ = {
    NEXT_PUBLIC_BASE_PATH: basePath
  };
  
  // Debug log
  console.log('Auto-detected base path:', basePath);
})();