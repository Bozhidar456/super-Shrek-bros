const cacheName = 'shrek-game-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './кутия.png',
  './монета.png',
  './protivnic1.png',
  './Шрек.png',
  './тръба.png',
  './sw.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
