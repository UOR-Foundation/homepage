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
    // This is reliable for GitHub Pages deployments
    const pathname = window.location.pathname;
    
    // Extract the repo name and possibly staging prefix from the URL
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