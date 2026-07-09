// CroTeak Planner MOBILE BUILD074 PWA service worker
const CACHE_NAME = 'croteak-mobile-build074-v1';
const APP_SHELL = [
  './',
  './index.html',
  './CroTeak_Planner_MOBILE_BUILD074.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './samples/nc-01-palette.jpg',
  './samples/nc-01-sample.jpg',
  './samples/nc-02-palette.jpg',
  './samples/nc-02-sample.jpg',
  './samples/nc-03-palette.jpg',
  './samples/nc-03-sample.jpg',
  './samples/nc-04-palette.jpg',
  './samples/nc-04-sample.jpg',
  './samples/nc-05-palette.jpg',
  './samples/nc-05-sample.jpg',
  './samples/nc-06-palette.jpg',
  './samples/nc-06-sample.jpg',
  './samples/nc-07-palette.jpg',
  './samples/nc-07-sample.jpg',
  './samples/nc-08-palette.jpg',
  './samples/nc-08-sample.jpg',
  './samples/nc-09-palette.jpg',
  './samples/nc-09-sample.jpg',
  './samples/nc-10-palette.jpg',
  './samples/nc-10-sample.jpg',
  './samples/nc-11-palette.jpg',
  './samples/nc-11-sample.jpg',
  './samples/nc-12-palette.jpg',
  './samples/nc-12-sample.jpg',
  './samples/nc-13-palette.jpg',
  './samples/nc-13-sample.jpg',
  './samples/nc-14-palette.jpg',
  './samples/nc-14-sample.jpg',
  './samples/nc-15-palette.jpg',
  './samples/nc-15-sample.jpg',
  './samples/nc-16-palette.jpg',
  './samples/nc-16-sample.jpg',
  './samples/nc-17-palette.jpg',
  './samples/nc-17-sample.jpg',
  './samples/nc-18-palette.jpg',
  './samples/nc-18-sample.jpg',
  './samples/nc-19-palette.jpg',
  './samples/nc-19-sample.jpg',
  './samples/nc-20-palette.jpg',
  './samples/nc-20-sample.jpg',
  './samples/nc-21-palette.jpg',
  './samples/nc-21-sample.jpg',
  './samples/nc-22-palette.jpg',
  './samples/nc-22-sample.jpg',
  './samples/nc-23-palette.jpg',
  './samples/nc-23-sample.jpg',
  './samples/nc-24-palette.jpg',
  './samples/nc-24-sample.jpg'
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
