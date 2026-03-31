const cacheName = 'v1-game-cache';
const assets = [
  '/',
  'index.html',
  'style.css', // Промени името, ако твоето е различно
  'script.js', // Промени името, ако твоето е различно
  'icon.png'
];

// Инсталиране и кеширане на файловете
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Служене на файловете офлайн
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});