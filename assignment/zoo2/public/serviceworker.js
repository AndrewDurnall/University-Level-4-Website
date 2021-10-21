// You can change the number on the end of the site to refresh the cache
const CACHE_NAME = 'my-site-v1';

// add all your files in the CACHE_URLS
const CACHE_URLS = ['/', 
  'index.html',
  'kids.html',
  'holding.html',
  'bookings.html',
  'animals.html',
  'about.html',

  'manifest.json',

  'stylesBase.css',
  'kidstyle.css',

  '404.html',
  
  'images/android-chrome-192x192.png',
  'images/android-chrome-512x512.png',
  'images/anteater.jpg',
  'images/anteater.webp',
  'images/apple-touch-icon.png',
  'images/birdfeeder.jpg',
  'images/birdfeeder.webp',
  'images/birdfeeding.webp',
  'images/birdfeeding.jpg',
  'images/browserconfig.xml',
  'images/chamelion.jpg',
  'images/chamelion.webp',
  'images/chamelion2.jpg',
  'images/chamelion2.webp',
  'images/event.jpg',
  'images/event.webp',
  'images/favicon-16x16.png',
  'images/favicon-32x32.png',
  'images/favicon.ico',
  'images/flamingo.jpg',
  'images/flamingo.webp',
  'images/frog.jpg',
  'images/frog.webp',
  'images/frog2.jpg',
  'images/frog2.webp',
  'images/gate.jpg',
  'images/gate.webp',
  'images/giraffe.jpg',
  'images/giraffe.webp',
  'images/hedgehog.jpg',
  'images/hedgehog.webp',
  'images/hedgehouse.jpg',
  'images/hedgehouse.webp',
  'images/lemur.jpg',
  'images/lemur.webp',
  'images/lorikeet.jpg',
  'images/lorikeet.webp',
  'images/map.jpg',
  'images/map.webp',
  'images/mstile-150x150.png',
  'images/newt.jpg',
  'images/newt.webp',
  'images/peacock.jpg',
  'images/peacock.webp',
  'images/penguins.jpg',
  'images/penguins.webp',
  'images/pond.jpg',
  'images/pond.webp',
  'images/Schoolbell-Regular.eot',
  'images/Schoolbell-Regular.woff',
  'images/Schoolbell-Regular.woff2',
  'images/sealion.jpg',
  'images/sealion.webp',
  'images/sign.jpg',
  'images/sign.webp',
  'images/tecton.jpg',
  'images/tecton.webp',
  'images/tiger.jpg',
  'images/tiger.webp',
  'images/toad.jpg',
  'images/toad.webp',
  'images/trust.jpg',
  'images/trust.webp',
  'images/frogzoom.jpg',
  'images/frogzoom.webp',
  'images/svg.svg',
  'images/tigerbanner.jpg',
  'images/tigerbanner.webp',
  'images/pengbanner.jpg',
  'images/pengbanner.webp',

// add all your files in here, in the correct folders. No need to add this file
];
//DO NOT change any of the code below

self.addEventListener("install", function (event) {
  console.log("Service worker installed");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log("Cache opened");
        return cache.addAll(CACHE_URLS);
      })
  );
});


self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName.startsWith('my-site-') && CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        console.log(`Return ${event.request.url} from cache`);
        return response;
      }
      console.log(`Fetch ${event.request.url} from network`);
      return fetch(event.request);
    })
  );
});
