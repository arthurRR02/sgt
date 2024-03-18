'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "486c6bec440bc6bef28661f25eee1720",
".git/config": "7ade2a5fabf2feba93766b48d64b31b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "e04185ca23db3b7ae235ce9d72eb7a32",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dedf54327219ef440037dd85155218c",
".git/logs/refs/heads/main": "6d1abbccccf8580a8941e12a0cdcaefb",
".git/logs/refs/remotes/origin/main": "f07414083dccf2b303807c1b4f8c135b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/12/4f4f1c0ba21766338ca7195656a67f3d2b6971": "93cfaf62ba52b5d410bd5a3371187b54",
".git/objects/14/36c71a16f927e77f8ae30a44fea124eec8ded7": "19debc91ef93e8738b47a5a23ba522d3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/7b2c6cc5dc40f88a8480452e09d8169d77483e": "82d04aaa9eed50c8f8006038712c0c5d",
".git/objects/18/dbcbc20ecba397f367094657a611a2095ebc2b": "ae219d3e6d9bf899efc55b71f113cee4",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2e/6f8d50637890057ffbd06cdc9f7fe8e6634c99": "084334b7f80efa7b292797d40cf20faf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/7b790103e5367a213431cda77abab4513631af": "a29653b9eb7d259c016f75bb5b67118c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/ec11717adc9a8c9f228d64870066ec23312345": "f7136798ab690d47cf25a0b54c7f3a33",
".git/objects/4f/e56da5c8923967e26bd883451f1701b06cedf2": "719e6e5a559f19ccb9521194cdb47e81",
".git/objects/51/0a3e889beb51a0c76900f2143f1434d33790ef": "bc420b88e39cc34a10c79e8e8b0b3c62",
".git/objects/51/580b6e39f9c5ac72d904a57452dcdfae9c4656": "76fdfdc7da81734a3a412fd05098e06d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/0275f5d7dd45742805550b6dfeaa6f5ff15bdb": "30d5e7b509e2ba9f470ebcdcfa576d7f",
".git/objects/55/b7624d31358d42ca0ff106610ec47b8f9776f8": "e5907d776de50de03503dc23ed6b67a5",
".git/objects/59/3607487ac02f02dd9a97df829a273631ebbdf8": "2f8a91b51266f308b91649cc2537c9e1",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/61/3c9b180b62de2abfb7a74914dbde85e75d1a43": "caada3e39b301df3c6e83c8096d63a36",
".git/objects/61/c04ef8f1ec1e409251c017a79f2176fae64ed4": "72511a26d37da38f44859f5c0f6ef6eb",
".git/objects/62/161e7b440cb1e8bc9ab6b1800a07d36b2c3514": "6f3072a1cc756f6c4d1a8f2c5f8888c6",
".git/objects/62/7869ea670d61829c03faf72b9ac26b654c8213": "fd8e3187ef24355bd8fb2d7495e2e719",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7b/0796fb76b895bcdf74d4f511d63d1470970f92": "072276d4279c09fa70b1b722c802fb49",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1572ace5c459ec7b3b924a89357428938fa223": "c4cd537e783603383d02ebda722990d2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/89792a9f93a31080f8b79be7d363728a6956ce": "dffa0248f8403f2c8a47133865c87403",
".git/objects/99/dd8db753e32e2d9e87515c12fc186325d037c6": "04e4ca8718976a2dc6279ac02d432ec0",
".git/objects/9e/cbf5a4fb93dc0202e9971607349886c147d47b": "619e92cc6ef5fed8b05c82b4b97a1a44",
".git/objects/a3/626d4be144f6513ced45b9d38ebcab209b18bd": "d813f576b6fdf5bc62df67031edc15ad",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/fb75b2704479904231f64716a5eb6300041f09": "b08919895cccf1ee189e37aa563c6c52",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/3d8dc5d9e13d589fb80e78d7e0a19f78c695db": "f35efc5cd748a992a72d5435515b8a3b",
".git/objects/c0/415c6a34c9aa987ece7f32b3212c097ee35365": "de7661b1a06acc265f83fcba709c260b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/d1cc8d5c29465bee021018dfae7f627f550365": "81c09ea0d6fc0a4aad8dc7e09bee5aa0",
".git/objects/d1/5c4864b30803d3f026813922b2b65a290a548c": "e91c3c24c9a6425f72657ebaeff3beec",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/78706f26d8a36f78bd65cdc7dfb60dbcd073ed": "b089a1c82ad9250f6a32b901f3387476",
".git/objects/dc/b7c4df58e83f24ca65ee411d223fef216cfb1b": "4058a057ecd4302dc96ae060570a86b2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/048c1ddf6277ddf929fa85965aacba4bdf6b04": "bc619c0a31e35f2fff6996c12c9ad472",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1c77539a79756c0f8765d7cc1cac1069bb4296": "4399bfc0006f6c319f4a5be9aa4a43a4",
".git/objects/f7/bf01998288550c9ff6ec5bf2e6eb6dfa28e6a3": "702a00290ef6cd25fcd550bc264a6c80",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/fd/c54aa3fb89db6fef15f98876b029140afe70a1": "1bd66f80ee7929dd54a7e6b2e3c4d85c",
".git/refs/heads/main": "7da9ae225044f24a165ee8598a087bdf",
".git/refs/remotes/origin/main": "7da9ae225044f24a165ee8598a087bdf",
"assets/AssetManifest.bin": "83ebb1de1cd59a082d812636fce565bd",
"assets/AssetManifest.bin.json": "a6bc0074f39d5bbb7ad9eda91016ffeb",
"assets/AssetManifest.json": "d1577f384cd2b9f2c5c356c1815fe9ef",
"assets/assets/sgt.gif": "cb2e36d7c587769d4c838e3ccc4da2b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3cf4ef8910aefd0aab590503999ed4c7",
"assets/NOTICES": "77b91042653e3a63b7b5c6c30f4c98cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "63d21083aea39609a74242b58e43dfe0",
"/": "63d21083aea39609a74242b58e43dfe0",
"main.dart.js": "deed09b030428d954c65d22f146eacb4",
"manifest.json": "eabef7877e852cf2e76ee0d6c9316263",
"version.json": "f9bb1f151bf87f9a47a68973fbc1087b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
