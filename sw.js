const cacheName = 'shrek-game-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './sw.js',
  './box.png',
  './coin.png',
  './protivnic1.png',
  './shrek.png',
  './truba.png'
];

// Записване на файловете в кеша
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Активиране и изчистване на стар кеш
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Работа офлайн
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
