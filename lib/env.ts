// Environment variables that are safe to use in client-side code
// This resolves the "process is not defined" error in browser

type EnvType = {
  NEXT_PUBLIC_BASE_PATH: string;
};

// For browser environments, use the injected window.__ENV__ if available
const getBrowserEnv = (): EnvType => {
  if (typeof window !== 'undefined') {
    // Use the injected environment from env-config.js
    return (window as any).__ENV__ || { NEXT_PUBLIC_BASE_PATH: '' };
  }
  return { NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || '' };
};

export const ENV: EnvType = getBrowserEnv();