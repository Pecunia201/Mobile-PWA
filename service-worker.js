self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache').then((cache) => {
      return cache.addAll([
        'manifest.json',
        'service-worker.js',
        'index.html',
        'styles.css',
        'app.js',
        'scripts.js',
        'images/icon-192x192.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method === 'GET') {
    event.respondWith(
      fetch(event.request)
        .then(async (response) => {
          const cache = await caches.open('cache');
          cache.put(event.request, response.clone());
          return response;
        })
        .catch(async () => {
          const response = await caches.match(event.request);
          return response;
        })
    );
  }
});