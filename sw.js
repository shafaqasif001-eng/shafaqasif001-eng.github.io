// Service Worker for Sogin Website
// Provides offline support and caching for better performance

const CACHE_NAME = 'sogin-v1.0.0';
const RUNTIME_CACHE = 'sogin-runtime';

// Assets to cache immediately (local files only to avoid CORS)
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/images/sogin-logo.png',
  '/images/sogin-product.png',
  '/images/sgp-logo.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    // But cache CDN resources
    if (event.request.url.includes('cdn.tailwindcss.com') || 
        event.request.url.includes('unpkg.com') ||
        event.request.url.includes('fonts.googleapis.com') ||
        event.request.url.includes('fonts.gstatic.com')) {
      event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request).then((response) => {
            return caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          });
        })
      );
    }
    return;
  }

  // Cache-first strategy for images
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((response) => {
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        }).catch(() => {
          // Return fallback image if offline
          return new Response('<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="400" fill="#0077b3"/><text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20">Image Offline</text></svg>', {
            headers: { 'Content-Type': 'image/svg+xml' }
          });
        });
      })
    );
    return;
  }

  // Network-first strategy for HTML
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Stale-while-revalidate for everything else
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          // Clone before doing anything else
          const responseToCache = networkResponse.clone();
          
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          }).catch((error) => {
            console.warn('[ServiceWorker] Cache put failed:', error);
          });
          
          return networkResponse;
        })
        .catch((error) => {
          console.warn('[ServiceWorker] Fetch failed:', error);
          return cachedResponse;
        });
      
      return cachedResponse || fetchPromise;
    })
  );
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-newsletter') {
    event.waitUntil(syncNewsletter());
  }
});

async function syncNewsletter() {
  // Handle offline newsletter submissions
  console.log('[ServiceWorker] Syncing newsletter submissions');
}

// Push notifications (optional)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Sogin',
    icon: '/images/sogin-logo.png',
    badge: '/images/sogin-logo.png',
    vibrate: [200, 100, 200]
  };

  event.waitUntil(
    self.registration.showNotification('Sogin Pain Relief', options)
  );
});
