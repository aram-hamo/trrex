const staticContent = 'static-assets-v4';
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
  async () => {
    const cacheKeepList = staticContent;
    const keyList = await caches.keys();
    const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
    await Promise.all(cachesToDelete.map(deleteCache));
  };
});
