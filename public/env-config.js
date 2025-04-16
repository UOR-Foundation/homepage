// This file helps avoid the "process is not defined" error in the browser
// It's injected into the HTML via a script tag
window.__ENV__ = {
  NEXT_PUBLIC_BASE_PATH: window.location.pathname.startsWith('/staging-') 
    ? window.location.pathname.split('/').slice(0, 2).join('/')
    : ''
};