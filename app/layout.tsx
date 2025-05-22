import type React from "react"
import "@/app/globals.css"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata = {
  title: "The UOR Foundation",
  description:
    "$1T+ in AI application value depends on data that lacks unified semantic context and verifiable trust. We solve this with programmable semantic addressing and deterministic vector embeddings.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={manrope.variable}>
      <head>
        <meta name="wallet-provider" content="none" />
        <meta name="web3" content="false" />
        <meta name="crypto" content="false" />
        <meta name="ethereum" content="false" />
        <meta name="blockchain" content="false" />
        <meta name="sender" content="false" />
        <meta name="solana" content="false" />
        <meta name="phantom" content="false" />
        <meta name="wallet" content="false" />
      </head>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="disable-wallet-provider" strategy="beforeInteractive">
          {`
    // More comprehensive wallet provider blocking
    window.addEventListener('load', function() {
      // Block ethereum provider
      if (window.ethereum) {
        console.log('Ethereum provider detected, disabling...');
        const originalRequest = window.ethereum.request;
        window.ethereum.request = function(args) {
          if (args && args.method) {
            console.log('Blocked ethereum request:', args.method);
            return Promise.reject(new Error('Ethereum methods disabled on this site'));
          }
          return originalRequest.apply(window.ethereum, arguments);
        };
      }
      
      // Specifically handle Sender wallet provider
      Object.defineProperty(window, 'sender', {
        configurable: true,
        get: function() {
          console.log('Blocked access to sender wallet provider');
          return {
            // Return mock implementation that rejects all requests
            getProviderState: function() {
              return Promise.reject(new Error('Sender wallet disabled on this site'));
            },
            request: function() {
              return Promise.reject(new Error('Sender wallet disabled on this site'));
            },
            on: function() { return; },
            removeAllListeners: function() { return; },
            isConnected: function() { return false; },
            connect: function() { 
              return Promise.reject(new Error('Sender wallet disabled on this site'));
            }
          };
        },
        set: function() {
          console.log('Blocked setting sender wallet provider');
        }
      });
      
      // Create a proxy to intercept any attempts to access wallet providers
      const walletProviders = ['ethereum', 'solana', 'phantom', 'solflare', 'xdefi'];
      walletProviders.forEach(provider => {
        if (provider !== 'sender') { // We already handled sender specifically above
          Object.defineProperty(window, provider, {
            get: function() {
              console.log(\`Blocked access to \${provider} provider\`);
              return null;
            },
            set: function() {
              console.log(\`Blocked setting \${provider} provider\`);
            },
            configurable: false
          });
        }
      });
      
      // Block any wallet connection attempts via postMessage
      const originalPostMessage = window.postMessage;
      window.postMessage = function(message, targetOrigin, transfer) {
        if (message && typeof message === 'object' && 
            (message.type && (message.type.includes('wallet') || message.type.includes('sender')) || 
             message.method && (message.method.includes('wallet') || message.method.includes('sender')))) {
          console.log('Blocked wallet-related postMessage:', message.type || message.method);
          return;
        }
        return originalPostMessage.call(window, message, targetOrigin, transfer);
      };
      
      // Block specific sender wallet messages
      const originalAddEventListener = window.addEventListener;
      window.addEventListener = function(type, listener, options) {
        if (type === 'message') {
          const wrappedListener = function(event) {
            if (event && event.data && typeof event.data === 'object' && 
                (event.data.type && event.data.type.includes('sender') || 
                 event.data.method && event.data.method.includes('sender'))) {
              console.log('Blocked sender wallet message event');
              return;
            }
            return listener(event);
          };
          return originalAddEventListener.call(window, type, wrappedListener, options);
        }
        return originalAddEventListener.call(window, type, listener, options);
      };
    });
  `}
        </Script>
      </body>
    </html>
  )
}
