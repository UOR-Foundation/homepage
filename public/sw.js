// Service Worker for UOR Foundation Website
const CACHE_NAME = "uor-foundation-cache-v1"

// Get the base path from the service worker's scope
// This handles GitHub Pages deployments with paths like /staging-123/
const scope = self.registration ? self.registration.scope : '';
const BASE_PATH = scope.endsWith('/') ? scope.slice(0, -1) : scope;

// Use the base path for all assets
const ASSETS_TO_CACHE = [
  BASE_PATH + "/",
  BASE_PATH + "/about",
  BASE_PATH + "/product",
  BASE_PATH + "/insights",
  BASE_PATH + "/uor-hero-enclosed.png",
  BASE_PATH + "/uor_god.svg",
  BASE_PATH + "/uor-foundation-logo.svg",
  BASE_PATH + "/uor-geometric-white.svg",
  BASE_PATH + "/fonts/inter-var.woff2",
]

// Install event - cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE)
      })
      .then(() => self.skipWaiting()),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => self.clients.claim()),
  )
})

// Fetch event - serve from cache, fallback to network with improved strategy
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests and browser extensions
  if (
    event.request.method !== "GET" ||
    event.request.url.startsWith("chrome-extension") ||
    event.request.url.includes("extension") ||
    !event.request.url.startsWith("http")
  ) {
    return
  }

  // Improved caching strategy with network-first for HTML and cache-first for assets
  const url = new URL(event.request.url)

  // Network-first strategy for HTML pages
  if (event.request.headers.get("Accept")?.includes("text/html")) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response to store in cache
          const responseToCache = response.clone()

          // Only cache successful responses
          if (response.ok) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache)
            })
          }

          return response
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse
            }

            // If not in cache, try to serve the offline page
            return caches.match("/")
          })
        }),
    )
    return
  }

  // Cache-first strategy for static assets
  if (
    url.pathname.endsWith(".png") ||
    url.pathname.endsWith(".jpg") ||
    url.pathname.endsWith(".svg") ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".woff2") ||
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          // Update cache in background
          fetch(event.request)
            .then((response) => {
              if (response.ok) {
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(event.request, response)
                })
              }
            })
            .catch(() => {
              /* Ignore network errors */
            })

          return cachedResponse
        }

        // If not in cache, fetch from network and cache
        return fetch(event.request).then((response) => {
          // Only cache successful responses
          if (!response.ok) {
            return response
          }

          // Clone the response to store in cache
          const responseToCache = response.clone()

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
      }),
    )
    return
  }

  // Network-first strategy for everything else
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache successful responses that aren't API calls
        if (response.ok && !url.pathname.includes("/api/")) {
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
        }

        return response
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request)
      }),
  )
})

// Add offline page support
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
