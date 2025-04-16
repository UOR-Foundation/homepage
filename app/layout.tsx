import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingStatusBar from "@/components/floating-status-bar"
import PerformanceMonitor from "@/components/performance-monitor"
import "./font-face.css"
import { UORConceptOverlay } from "@/components/uor-concept-overlay"
import { ENV } from "@/lib/env"

// Optimize font loading with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "UOR Foundation",
  description:
    "UOR Foundation - Building the infrastructure for an internet where data is sovereign, semantic, and empowering.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        {/* Inline environment loader script to avoid 404 errors */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Auto-detect the base path for previews
          (function() {
            const pathname = window.location.pathname;
            let basePath = '';
            
            // Check for PR preview pattern in the URL path
            // Example: /homepage/pr-preview/123/
            if (pathname.includes('/pr-preview/')) {
              const pathParts = pathname.split('/');
              const previewIndex = pathParts.findIndex(part => part === 'pr-preview');
              
              if (previewIndex >= 0) {
                // Combine all parts up to and including the PR number
                basePath = pathParts.slice(0, previewIndex + 2).join('/');
              }
            }
            
            // Set the environment variables
            window.__ENV__ = {
              NEXT_PUBLIC_BASE_PATH: basePath
            };
            
            console.log('Auto-detected base path:', basePath);
          })();
        `}} />
        <link rel="icon" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/favicon.ico`} />
        <link rel="preload" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/fonts/inter-var.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical assets */}
        <link rel="preload" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/uor-hero-enclosed.png`} as="image" type="image/png" />
        <link rel="preload" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/uor-foundation-logo.svg`} as="image" type="image/svg+xml" />
        <link rel="preload" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/uor-geometric-white.svg`} as="image" type="image/svg+xml" />
        <link rel="preload" href={`${ENV.NEXT_PUBLIC_BASE_PATH}/uor_god.svg`} as="image" type="image/svg+xml" />

        {/* Font loading optimization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      // Font loading optimization
      if ("fonts" in document) {
        document.documentElement.classList.add('font-loading');
        
        Promise.all([
          document.fonts.load('1em "Inter var"')
        ]).then(() => {
          document.documentElement.classList.remove('font-loading');
          document.documentElement.classList.add('font-loaded');
        });
      }
    `,
          }}
        />

        {/* Wallet error handling script */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
    // Comprehensive error handling for wallet/provider issues
    (function() {
      // Create a more robust mock ethereum provider
      if (typeof window !== 'undefined') {
        // Intercept and block all sender_getProviderState requests
        const originalPostMessage = window.postMessage;
        window.postMessage = function(...args) {
          if (args[0] && typeof args[0] === 'object' && 
              (args[0].method === 'sender_getProviderState' || 
               (typeof args[0] === 'string' && args[0].includes('sender_getProviderState')))) {
            console.log('Blocked sender_getProviderState postMessage');
            return;
          }
          return originalPostMessage.apply(this, args);
        };
        
        // Block any message event listeners that might process wallet messages
        const originalAddEventListener = window.addEventListener;
        window.addEventListener = function(type, listener, options) {
          if (type === 'message') {
            const wrappedListener = function(event) {
              if (event && event.data && 
                  ((typeof event.data === 'object' && event.data.method === 'sender_getProviderState') ||
                   (typeof event.data === 'string' && event.data.includes('sender_getProviderState')))) {
                console.log('Blocked sender_getProviderState message event');
                return;
              }
              return listener.apply(this, arguments);
            };
            return originalAddEventListener.call(this, type, wrappedListener, options);
          }
          return originalAddEventListener.apply(this, arguments);
        };
        
        // Mock ethereum provider to prevent errors
        window.ethereum = {
          isMetaMask: false,
          request: function(args) {
            console.log('Mocked ethereum request:', args?.method);
            return Promise.resolve([]);
          },
          on: function() {},
          removeListener: function() {},
          // Add additional methods that might be called
          enable: function() { return Promise.resolve([]); },
          sendAsync: function(_, callback) { 
            if (callback) callback(null, { result: [] }); 
          },
          send: function(_, callback) { 
            if (callback) callback(null, { result: [] }); 
            return { result: [] }; 
          },
          selectedAddress: null,
          networkVersion: '1',
          chainId: '0x1'
        };
        
        // Intercept and prevent any sender_getProviderState calls via fetch
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
          const url = args[0]?.url || args[0];
          const body = args[1]?.body;
          
          if (body && typeof body === 'string' && body.includes('sender_getProviderState')) {
            console.log('Intercepted sender_getProviderState fetch call');
            return Promise.resolve({
              ok: true,
              json: () => Promise.resolve({ result: { accounts: [] } }),
              text: () => Promise.resolve('{"result":{"accounts":[]}}')
            });
          }
          
          return originalFetch.apply(this, args);
        };
        
        // Prevent any direct calls to window.ethereum methods
        Object.defineProperty(window, 'ethereum', {
          get: function() {
            return {
              isMetaMask: false,
              request: function(args) {
                if (args && args.method === 'sender_getProviderState') {
                  console.log('Blocked direct sender_getProviderState call');
                  return Promise.resolve({ accounts: [] });
                }
                return Promise.resolve([]);
              },
              on: function() {},
              removeListener: function() {},
              enable: function() { return Promise.resolve([]); },
              sendAsync: function(payload, callback) {
                if (payload && payload.method === 'sender_getProviderState') {
                  console.log('Blocked sendAsync sender_getProviderState call');
                  if (callback) callback(null, { result: { accounts: [] } });
                  return;
                }
                if (callback) callback(null, { result: [] });
              },
              send: function(payload, callback) {
                if (payload && payload.method === 'sender_getProviderState') {
                  console.log('Blocked send sender_getProviderState call');
                  if (callback) callback(null, { result: { accounts: [] } });
                  return { result: { accounts: [] } };
                }
                if (callback) callback(null, { result: [] });
                return { result: [] };
              },
              selectedAddress: null,
              networkVersion: '1',
              chainId: '0x1'
            };
          },
          set: function() {},
          configurable: true
        });
      }
      
      // Prevent wallet connection errors
      window.addEventListener('error', function(event) {
        if (event.message && (
          event.message.includes('wallet') || 
          event.message.includes('provider') || 
          event.message.includes('account') ||
          event.message.includes('ethereum') ||
          event.message.includes('No account exist') ||
          event.message.includes('sender_getProviderState')
        )) {
          console.warn('Suppressed wallet connection error:', event.message);
          event.preventDefault();
          return true;
        }
      });

      // Handle unhandled promise rejections related to wallets
      window.addEventListener('unhandledrejection', function(event) {
        if (event.reason && 
            (typeof event.reason === 'object' || typeof event.reason === 'string') &&
            (String(event.reason).includes('wallet') || 
             String(event.reason).includes('provider') || 
             String(event.reason).includes('account') ||
             String(event.reason).includes('ethereum') ||
             String(event.reason).includes('No account exist') ||
             String(event.reason).includes('sender_getProviderState'))) {
          console.warn('Suppressed unhandled wallet promise rejection:', event.reason);
          event.preventDefault();
        }
      });
      
      // Create a global variable to indicate wallet connections should be blocked
      window.__BLOCK_WALLET_CONNECTIONS__ = true;
    })();
  `,
          }}
        />

        {/* Service worker registration - moved to end of body for better performance */}
      </head>
      <body className={`${inter.className} overflow-x-hidden pb-10`}>
        <ThemeProvider defaultTheme="system">
          {children}
          <UORConceptOverlay />
        </ThemeProvider>
        <FloatingStatusBar />
        <PerformanceMonitor />

        {/* Move service worker registration to end of body - with better error handling */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      // Register service worker for production, with better GitHub Pages compatibility
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          setTimeout(function() {
            try {
              // Use the environment variable from the injected script
              const basePath = window.__ENV__?.NEXT_PUBLIC_BASE_PATH || '';
              const swPath = basePath + '/sw.js';
              
              // Only register if we detect the service worker exists
              fetch(swPath, { method: 'HEAD' })
                .then(response => {
                  if (response.ok) {
                    return navigator.serviceWorker.register(swPath);
                  } else {
                    console.log('ServiceWorker file not found at: ' + swPath);
                    return Promise.reject('ServiceWorker not found');
                  }
                })
                .then(registration => {
                  console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                  console.log('ServiceWorker registration skipped: ', err);
                });
            } catch (e) {
              console.log('Error in service worker registration:', e);
            }
          }, 1000); // Delay service worker registration
        });
      }
    `,
          }}
        />
      </body>
    </html>
  )
}


import './globals.css'