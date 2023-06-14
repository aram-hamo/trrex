const staticContent = 'static-assets-v2';
const assets = ['/','/icon.png',
'/index.html','/calc.js',
'/languages.json', '/manifest.json','/CascadiaCode.ttf'
];
// installation: caching static assets
self.addEventListener('install', evt=> {
  console.log("install");
  evt.waitUntil(
  caches.open(staticContent).then(cache=>{
    cache.addAll(assets);
  }))
});

// deleting old cache
self.addEventListener('activate', evt=> {
  console.log("activate");
async () => {
  const cacheKeepList = staticContent;
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

});
