// CroTeak Planner MOBILE BUILD032 PWA service worker
const CACHE_NAME = 'croteak-mobile-build032-v1';
const APP_SHELL = [
  './',
  './index.html',
  './CroTeak_Planner_MOBILE_BUILD032.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.hostname.includes('supabase.co')) return;
  if (req.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  const acceptsHtml = (req.headers.get('accept') || '').includes('text/html');
  if (req.mode === 'navigate' || acceptsHtml) {
    event.respondWith(
      fetch(req, {cache:'no-store'}).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(req, copy.clone()).catch(()=>{});
          cache.put('./index.html', copy).catch(()=>{});
        });
        return resp;
      }).catch(() => caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});
