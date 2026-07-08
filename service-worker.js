const CACHE_NAME = "bluesense-pwa-v3";
const RUNTIME_CACHE = "bluesense-runtime-v3";
const BASE_URL = self.registration.scope;

const urlsToCache = [
  `${BASE_URL}`,
  `${BASE_URL}index.html`,
  `${BASE_URL}offline.html`,
  `${BASE_URL}style.css`,
  `${BASE_URL}app.js`,
  `${BASE_URL}manifest.json`,
  `${BASE_URL}icons/icon-192x192.png`,
  `${BASE_URL}icons/icon-512x512.png`,
];

// Install Event
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate Event
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME && key !== RUNTIME_CACHE)
            .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Cache First for static, Network First for API/HTML)
self.addEventListener("fetch", event => {
  const req = event.request;
  const url = new URL(req.url);

  if (req.method !== "GET" || url.protocol.startsWith("chrome-extension")) return;

  // Static Assets (Cache First, Network Fallback)
  if (req.destination === "image" || req.destination === "style" || req.destination === "script") {
    event.respondWith(
      caches.match(req).then(cachedRes => {
        return cachedRes || fetch(req).then(netRes => {
          return caches.open(RUNTIME_CACHE).then(cache => {
            cache.put(req, netRes.clone());
            return netRes;
          });
        });
      })
    );
  } else {
    // Navigation & API (Network First, Cache Fallback)
    event.respondWith(
      fetch(req).then(netRes => {
        return caches.open(RUNTIME_CACHE).then(cache => {
          cache.put(req, netRes.clone());
          return netRes;
        });
      }).catch(() => {
        return caches.match(req).then(cachedRes => {
          if (cachedRes) return cachedRes;
          if (req.mode === "navigate") return caches.match(`${BASE_URL}offline.html`);
        });
      })
    );
  }
});

// Background Sync Event
self.addEventListener("sync", event => {
  if (event.tag === "sync-sensor-data") {
    console.log("[Service Worker] Background Sync triggered: sync-sensor-data");
    // Placeholder logic for syncing offline data when connection is restored
    event.waitUntil(Promise.resolve());
  }
});

// Periodic Sync Event
self.addEventListener("periodicsync", event => {
  if (event.tag === "update-dashboard") {
    console.log("[Service Worker] Periodic Sync triggered: update-dashboard");
    // Placeholder logic for periodic data refresh
    event.waitUntil(Promise.resolve());
  }
});

// Push Notification Event
self.addEventListener("push", event => {
  if (!event.data) return;
  
  const data = event.data.json() || { title: "Notifikasi Blue Sense AI", body: "Peringatan Kualitas Air" };
  const options = {
    body: data.body,
    icon: `${BASE_URL}icons/icon-192x192.png`,
    badge: `${BASE_URL}icons/icon-192x192.png`,
    vibrate: [200, 100, 200],
    data: data.url || BASE_URL
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification Click Event
self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(windowClients => {
      if (windowClients.length > 0) {
        windowClients[0].focus();
        if (event.notification.data) windowClients[0].navigate(event.notification.data);
      } else {
        clients.openWindow(event.notification.data || BASE_URL);
      }
    })
  );
});
