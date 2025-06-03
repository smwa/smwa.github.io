/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = "precache-20250603133701+0000";
const RUNTIME = "runtime-20250603133701+0000";

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [
  
  
    './assets/css/index.css',
  
    './assets/icons/GitHub-Mark-Light-32px.png',
  
    './assets/icons/apple-mask-icon.svg',
  
    './assets/icons/apple-touch-icon.png',
  
    './assets/icons/bitcoin.png',
  
    './assets/icons/discord.png',
  
    './assets/icons/facebook_32.png',
  
    './assets/icons/favicon.png',
  
    './assets/icons/linkedin.png',
  
    './assets/icons/mastodon.png',
  
    './assets/icons/nintendo.png',
  
    './assets/icons/snapchat.png',
  
    './assets/icons/spotify.png',
  
    './assets/icons/steam.png',
  
    './assets/icons/themed-mask-icon.png',
  
    './assets/icons/twitter.png',
  
    './assets/icons/venmo.png',
  
    './assets/js/gyro.js',
  
    './assets/mechstack/Michael.jpg',
  
    './assets/mechstack/custom.css',
  
    './assets/mechstack/feather.min.js',
  
    './assets/mechstack/skeleton/skeleton.css',
  
    './assets/icons/GitHub-Mark-Light-32px.webp',
  
    './assets/icons/apple-touch-icon.webp',
  
    './assets/icons/bitcoin.webp',
  
    './assets/icons/discord.webp',
  
    './assets/icons/facebook_32.webp',
  
    './assets/icons/favicon.webp',
  
    './assets/icons/linkedin.webp',
  
    './assets/icons/mastodon.webp',
  
    './assets/icons/nintendo.webp',
  
    './assets/icons/snapchat.webp',
  
    './assets/icons/spotify.webp',
  
    './assets/icons/steam.webp',
  
    './assets/icons/themed-mask-icon.webp',
  
    './assets/icons/twitter.webp',
  
    './assets/icons/venmo.webp',
  
    './assets/mechstack/Michael.webp',
  
  
    './404.html',
  
    './Michael/contact_me.html',
  
    './Michael/',
  
    './',
  
    './privacy-policy',
  
  
  './feed.xml',
  './sitemap.xml',
  './index.html'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});
