// Environment variables that are safe to use in client-side code
// This resolves the "process is not defined" error in browser

type EnvType = {
  NEXT_PUBLIC_BASE_PATH: string;
};

// For browser environments, use a combination of detection methods
const getBrowserEnv = (): EnvType => {
  if (typeof window !== 'undefined') {
    // 1. Try the injected environment from env-config.js
    if ((window as any).__ENV__ && (window as any).__ENV__.NEXT_PUBLIC_BASE_PATH) {
      return (window as any).__ENV__;
    }
    
    // 2. Auto-detect the base path from the current URL pathname
    // For GitHub Pages PR previews: /[repo-name]/pr-preview/[pr-number]/
    const pathname = window.location.pathname;
    let basePath = '';
    
    // Check for PR preview pattern in the URL path
    if (pathname.includes('/pr-preview/')) {
      const pathParts = pathname.split('/');
      const previewIndex = pathParts.findIndex(part => part === 'pr-preview');
      
      if (previewIndex >= 0) {
        // Include repository name, pr-preview directory, and PR number
        basePath = pathParts.slice(0, previewIndex + 2).join('/');
      }
    }
    
    return { NEXT_PUBLIC_BASE_PATH: basePath };
  }
  
  // Server-side rendering
  return { 
    NEXT_PUBLIC_BASE_PATH: typeof process !== 'undefined' 
      ? process.env.NEXT_PUBLIC_BASE_PATH || '' 
      : ''
  };
};

export const ENV: EnvType = getBrowserEnv();