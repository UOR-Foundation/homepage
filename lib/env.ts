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
    
    // GitHub Pages always deploys to the same URL for production
    // We don't need to do any special path detection
    return { NEXT_PUBLIC_BASE_PATH: '' };
  }
  
  // Server-side rendering
  return { 
    NEXT_PUBLIC_BASE_PATH: typeof process !== 'undefined' 
      ? process.env.NEXT_PUBLIC_BASE_PATH || '' 
      : ''
  };
};

export const ENV: EnvType = getBrowserEnv();