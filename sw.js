const cacheName = 'shrek-game-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './box.png',
  './coin.png',
  './protivnic1.png',
  './shrek.png',
  './truba.png',
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
