const CACHE_NAME = 'website-cache-v1';
const urlsToCache = [
  'assets/models/Young_Victoria_Low_Clean.glb',
  'assets/models/Victorian_Dress.glb',
  'assets/models/Christening_Gown_Low_Clean.glb',
  'assets/models/Doll_Dress_Low.glb',
  'assets/models/Fencibles_Uniform_Low.glb',
  'assets/models/Grant_Wedding_Dress_Low_Clean.glb',
  'assets/models/Kids_Kilt_Low.glb',
  'assets/models/Paddington_Low.glb',
  'assets/models/Blue_Dress.glb',
  'assets/models/Tizzie_low.glb'
];

self.addEventListener('install', function(event) {
    console.log('Service Worker installed');
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Cache opened');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    console.log('Service Worker fetching:', event.request.url);
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            console.log('Cached response found for:', event.request.url);
            return response;
          }
          console.log('No cached response found for:', event.request.url);
          return fetch(event.request).then(function(response) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, response.clone());
            });
            return response;
          });
        })
    );
  });