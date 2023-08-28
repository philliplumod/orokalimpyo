'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f1faff785e2c524b58044c2307850f1c",
".git/config": "a9edffe11287ce53097707028519b81d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6708f70997ed2ac111b835da14da725e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8231fdca907e3e4f2a8f8bd4679e4139",
".git/logs/refs/heads/main": "06d1c1ae6870a7627965bbffcdca760c",
".git/logs/refs/remotes/origin/main": "2630c16e97e325f2733e2ae33051f2be",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/8af81d6a1fc9a7dcaefb262263e260f5576827": "13ac1d460e7d1256277a73b1d2f47548",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2f/a7d16ca583629c3a17aea8ef73042886884cdf": "1ed12f3c12c47fb34a5e9d66a42fbcfb",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3c/85ff29be6f070bbe7e961e329f898b0f1383b3": "be443891b027d7c2d9b19dbd12b69224",
".git/objects/41/00228ecf3c090e9a6cfb8f87e0b0d54e01bb8b": "d0598e826439de7c082c41fb75383370",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/49/c72ff9982e87d431637b658a3ad2b06ecae01d": "a4878e0a390ee157ab95e5e423965826",
".git/objects/49/ef2e8f68cca1036f184b56fad4da4dec97a2a3": "f85cd4b5370ecb6634016c9be19882e0",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/65/c07c75786f307f487b84b3e646e3f1c1361e0d": "44e47fe657d1110ce1d8c2a7a8e59f99",
".git/objects/6a/aed82b594b7f1f4ac66a55b9f023bdf21d9c81": "a8ac990e4f7a4b63e4bc533643e2d6ce",
".git/objects/6b/cf74f5998bd14269ec294de60dd2f29347d7c4": "09c809b10e790ab59bea67a1774e60ef",
".git/objects/6f/5f232bc2e9eb02b08d2f51620e48f2d00377f0": "b0e69573b683826bc9c50cc230e5823f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/e736b08923a963383a20acfde8543a8b94b50d": "788bc3c04670b16484d703e9a25c382e",
".git/objects/7a/244d0814a9bdd83904efe87b27f20e91785ea2": "cacd7a8716333046ec13efd6611c9264",
".git/objects/8a/d9bfe92cb41e67d7347f99e35e92131ffd8d99": "c8966e3500e1f4128ddbafae12143e44",
".git/objects/8b/ffbc718a6feb91e56de9419e949681130512f8": "c3fcafa80fb90617b68b40312ee0134f",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/766381b99009639d3c20e859a038aacf1036bb": "29229f0fe89a8e14df5d39ef031753f5",
".git/objects/a2/2f97fe457878e638311da8f4dcf93e71f5cf14": "780ec0f505ec98b5b5e8a23ef3f3413b",
".git/objects/a3/334f86274937e89b177532c278cf211dad4e11": "5c6e9e1f8756c3a9e009b43aa65be8dd",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/6f02924f219d1aa64319906fe6cd4184f6357b": "5e9691c340e22f03258c865d950ae39f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/ca/423600b0616eeb1eb1df8e03f572d303661b7b": "35adb635cec59af84e46c9b761593995",
".git/objects/d1/d1d0b7802c5354925da9098da1f0c9bac74ab4": "d4d4638dcc121adc009cf895cd0aba3d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e3/e467c95a0ff6b2151eb1c952a35fb9eea86762": "45d9c4db9b957c061d67d54553414b0e",
".git/refs/heads/main": "a7bc1f69f02ce019882a5c1d8ab7b85f",
".git/refs/remotes/origin/main": "a7bc1f69f02ce019882a5c1d8ab7b85f",
"assets/AssetManifest.bin": "fbf7f82dd9fa8a31d8ace4af62e2f914",
"assets/AssetManifest.json": "9e7493c2e96f7be8ef7c18c101549614",
"assets/assets/logo_banner.png": "d4c2ae972f113e3bdc2203797af06bb6",
"assets/assets/logo_portrait.png": "cd96b596ab69edf3e19451ac10d3f3da",
"assets/assets/placeholder_view_vector.png": "87fe6fa858e5fde8f59a5d7de367e2fc",
"assets/assets/under_construction.png": "8e9403d62f01ce23b0e5ba1df0b7e479",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "2e611e8b85d96c9276d5ada334c816c1",
"assets/NOTICES": "06cde22f544c983bd2b8d083055cdfc9",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "a40c720e31205b45843b997eb5b3ef99",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "4e1c49bd1458ee86c7a96821fcf2d96c",
"icons/Icon-512.png": "a9ecfe83522fd427ca7427492b9dedc2",
"icons/Icon-maskable-192.png": "4e1c49bd1458ee86c7a96821fcf2d96c",
"icons/Icon-maskable-512.png": "a9ecfe83522fd427ca7427492b9dedc2",
"index.html": "bffd1d4751b835dd4062c7f7b420a25a",
"/": "bffd1d4751b835dd4062c7f7b420a25a",
"main.dart.js": "376c9fdcd1ab8e8e1664e045c3bd694b",
"manifest.json": "896852e5472fd95a875334e36fec2ebd",
"version.json": "452e981477343d1d5648f9a1557deb51"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
