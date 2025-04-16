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
    // For GitHub Pages, we only need to detect if we're in a staging environment
    const pathname = window.location.pathname;
    let basePath = '';
    
    // Check if we're in a staging environment
    const stagingMatch = pathname.match(/\/staging-(\d+)/);
    if (stagingMatch) {
      basePath = stagingMatch[0]; // e.g., "/staging-123"
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