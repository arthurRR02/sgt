'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "776edf7c97ff16c5749541268a04367a",
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
".git/index": "405e912e353b8091935e452035c6906f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d1e5937a9f3dcbe8967ed7fca9a4639",
".git/logs/refs/heads/main": "073a3347c17865c4c8bece2c007bf8d4",
".git/logs/refs/remotes/origin/main": "2c880b563d123bc1f5ad9042830074e8",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/1041052c5d8112656c8b318de302ddb5658e22": "a5546be76e7a385aeb0022eb8eacef4c",
".git/objects/0e/68ca589810c51311bfe6d43a173f7bedecf342": "0cf41cccfdc2aff298bbdaa379ad83e7",
".git/objects/12/4f4f1c0ba21766338ca7195656a67f3d2b6971": "93cfaf62ba52b5d410bd5a3371187b54",
".git/objects/12/81b706d0849ccf1fa7c1d7b0291c08b5f6b890": "8426dbe01086024f8945f9c9655a22ef",
".git/objects/14/36c71a16f927e77f8ae30a44fea124eec8ded7": "19debc91ef93e8738b47a5a23ba522d3",
".git/objects/15/ceb8c4adfed5f0e80db3098726ce228c9e29b1": "b39319ac99d827ac75519ff3b379560e",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/18/7b2c6cc5dc40f88a8480452e09d8169d77483e": "82d04aaa9eed50c8f8006038712c0c5d",
".git/objects/18/dbcbc20ecba397f367094657a611a2095ebc2b": "ae219d3e6d9bf899efc55b71f113cee4",
".git/objects/1a/2335344996975a8738cb82ac13b9949fc7f499": "dba16fe483155ecf5e5747899bc81adb",
".git/objects/1e/783ddd8ed6811c5f7458415d5be9f84d9a3509": "023b24eb6c1b48c79df349cd2510d586",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/26/935eaab71f17b9d836f866f841a55612208b28": "bf1e6361028cc745fb0ccd5435e9f2b6",
".git/objects/2a/7392da53fd393f564927e9c6ca748ef56c1be5": "0aafa318f5923914820206946a25a9ea",
".git/objects/2e/6f8d50637890057ffbd06cdc9f7fe8e6634c99": "084334b7f80efa7b292797d40cf20faf",
".git/objects/2e/74a7285523688cf329a8ed1545563efc7ccfcf": "0ccf681b4f5118311690610ff01eb639",
".git/objects/2e/a4185082e445c011f945c046692bd8044b3b6a": "a69fd350236b898d97adc0d76517a87a",
".git/objects/2f/d3b7609b1a90e3ff9fe3b0cc21e1eb9e9553c3": "3d8933c888a7a9d1bdc51a07d0816c07",
".git/objects/3b/3922c11e7fdd80e18db46b7a2d3e4549924a69": "b72b823a5b75de31f88aa75efeb6cf7a",
".git/objects/3f/bd000db71cb87bde88ee91d5242119d30049cb": "32c45980c113c8a1ce2745d44e1107d0",
".git/objects/3f/fc8c3da79358fa7ed1b1d518da2001bc3c442b": "87a6c8e236d6fe6dd5cf421bd393ea91",
".git/objects/45/90366f2bf9212e87ea0bb8b4734963332ac31b": "056ccb853f733ffea107f020f475e518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/7b790103e5367a213431cda77abab4513631af": "a29653b9eb7d259c016f75bb5b67118c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/ec11717adc9a8c9f228d64870066ec23312345": "f7136798ab690d47cf25a0b54c7f3a33",
".git/objects/4c/0030d46364bf6c9ea1a1acd6589ddc6cdffea4": "45952ae96bf69f9242ebe352ec56b3ab",
".git/objects/4d/6cd7fb2a31f07386f9f19acb14093a13f1694e": "242028246bb40a31ac04b1d10c4d844e",
".git/objects/4f/e56da5c8923967e26bd883451f1701b06cedf2": "719e6e5a559f19ccb9521194cdb47e81",
".git/objects/51/0a3e889beb51a0c76900f2143f1434d33790ef": "bc420b88e39cc34a10c79e8e8b0b3c62",
".git/objects/51/580b6e39f9c5ac72d904a57452dcdfae9c4656": "76fdfdc7da81734a3a412fd05098e06d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/0275f5d7dd45742805550b6dfeaa6f5ff15bdb": "30d5e7b509e2ba9f470ebcdcfa576d7f",
".git/objects/55/b7624d31358d42ca0ff106610ec47b8f9776f8": "e5907d776de50de03503dc23ed6b67a5",
".git/objects/59/3607487ac02f02dd9a97df829a273631ebbdf8": "2f8a91b51266f308b91649cc2537c9e1",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/1fffe7dbdbb4ca06971729436af3d142d77b6a": "0082cc82b41976cb51a57ca1bdd0d292",
".git/objects/5e/10b873e3af62b0e0bba54d5d71d7f568664ce3": "15cf7f95f7b54888b5c91c9965b7eb35",
".git/objects/61/3c9b180b62de2abfb7a74914dbde85e75d1a43": "caada3e39b301df3c6e83c8096d63a36",
".git/objects/61/c04ef8f1ec1e409251c017a79f2176fae64ed4": "72511a26d37da38f44859f5c0f6ef6eb",
".git/objects/62/161e7b440cb1e8bc9ab6b1800a07d36b2c3514": "6f3072a1cc756f6c4d1a8f2c5f8888c6",
".git/objects/62/7869ea670d61829c03faf72b9ac26b654c8213": "fd8e3187ef24355bd8fb2d7495e2e719",
".git/objects/64/5024bcd52f30a8869d1762374071f6f423154e": "c436ff1ad7265f872524753cc130521e",
".git/objects/6a/bf98487c5b43abf82560b97f040f3219806713": "cedebdc4dca66a912914b121c57c42cd",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/6f/a809d9f200b521805a05abfc37c8bd34f7a198": "3682120c2247244afd48aa4649521a63",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/8ec2e444e9bf44c4c73d5ed411c9bedf3ed39f": "5414560f7f313a9214b66c8bd6ededa9",
".git/objects/72/039c2c8cccdd1abe9fbfdfa3ec7262a2c33caa": "2c0c4b25e65adf910014a4c964855776",
".git/objects/73/12727f2263839fc20dfdf398577283b99cd639": "35c0f6f757842079c307720ef75394f6",
".git/objects/7b/0796fb76b895bcdf74d4f511d63d1470970f92": "072276d4279c09fa70b1b722c802fb49",
".git/objects/7c/b28702e3a7228bba869df458fdee624d893388": "665b3df12645d16dc25598ba5d81c676",
".git/objects/81/1764e0495d9c19e2f4f48f4cd5664d1ce30c8b": "c1bdeb11175759a5c1e817b1831f386d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1572ace5c459ec7b3b924a89357428938fa223": "c4cd537e783603383d02ebda722990d2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/57f62c0616314415f33ba300ec5a28ca40a1ab": "d9fc6faf048547d6bb532cce2d76c30c",
".git/objects/90/0549f015439da4dfbe8e0fb2a1fe5a78b71a9f": "cc804c3ba540e7a2bc29f5a228015db6",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/e2427424bab429c2012d4a7239c808313bdff5": "890d8c93d25ef640f54dc0e3e6eb279f",
".git/objects/98/56417ab887adcba0875e1bf26188fa1bfa8765": "9639f82a714a484450f1572b012d4998",
".git/objects/98/89792a9f93a31080f8b79be7d363728a6956ce": "dffa0248f8403f2c8a47133865c87403",
".git/objects/99/dd8db753e32e2d9e87515c12fc186325d037c6": "04e4ca8718976a2dc6279ac02d432ec0",
".git/objects/9e/cbf5a4fb93dc0202e9971607349886c147d47b": "619e92cc6ef5fed8b05c82b4b97a1a44",
".git/objects/a3/626d4be144f6513ced45b9d38ebcab209b18bd": "d813f576b6fdf5bc62df67031edc15ad",
".git/objects/a5/073b51a9cef001ce16064cb6314db645215ee6": "2f96ea2c763ced6ba1836e74665783e6",
".git/objects/ae/dfa82b6be13c59df91c260d57ea53be84b5fcb": "29479cddd306ad68a10cb3f39deb36dd",
".git/objects/ae/edfd2047bda5446f72408aefd8a3d1cade4cc4": "ece7c77894d42a709661738520d1e8ec",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/fb75b2704479904231f64716a5eb6300041f09": "b08919895cccf1ee189e37aa563c6c52",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/3d8dc5d9e13d589fb80e78d7e0a19f78c695db": "f35efc5cd748a992a72d5435515b8a3b",
".git/objects/c0/113e82107b0d3f9bd30c5900992df95fd43c99": "eaefd45ab8f133793df51b3507d6b1ca",
".git/objects/c0/415c6a34c9aa987ece7f32b3212c097ee35365": "de7661b1a06acc265f83fcba709c260b",
".git/objects/c3/1e37f6dc10a8e9bc124928a85ca4caccbf0a11": "490110c2ea4ecff9089a3b1768b35873",
".git/objects/c3/429cac4be685e526cd38e1915d2e472f15b3e8": "accc6c999264a147ee3153db907ff14e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/d1cc8d5c29465bee021018dfae7f627f550365": "81c09ea0d6fc0a4aad8dc7e09bee5aa0",
".git/objects/ce/577a0c681c1ec98a18daf081e46787af4fc6c4": "73c0987eb07e9c1adc651aad5a5ae668",
".git/objects/ce/f18917d0be87dad6a40b90a8cdbd6a73616076": "60ae7ae1e46c7fd0a15ac6a2072f957b",
".git/objects/d1/5c4864b30803d3f026813922b2b65a290a548c": "e91c3c24c9a6425f72657ebaeff3beec",
".git/objects/d3/2510942b7afc77999b326dfc444324ea08edbf": "d3ed5168366aa9785cbc90344977ed50",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/404cded94846ed5b84ab8464c17270f63f3fb7": "e03799ac209cc125b9dd05a90b346f4d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/78706f26d8a36f78bd65cdc7dfb60dbcd073ed": "b089a1c82ad9250f6a32b901f3387476",
".git/objects/d9/88348be5eb1e5d8e966fd88d33b96b09dbee22": "8c596ce3f35d5b1ed3d6a62435926253",
".git/objects/d9/b9c4f342bef6196e6880a5c9d90aba1ece32b4": "de155291f7adbb712de5b4875da4a4c4",
".git/objects/dc/b7c4df58e83f24ca65ee411d223fef216cfb1b": "4058a057ecd4302dc96ae060570a86b2",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/a7cd3e1c6162dac2106120c70bda60ec61fe07": "cbf5fb07505136b38c557f38da5cfc73",
".git/objects/df/b9dc9b25732d9a81b9dba75f2721e297e02d96": "9faf0f5632dc87b5a6771fc82dace83d",
".git/objects/e0/4005dba40aee7493bab17544c561f80a3e5d29": "b6be4a9ab5572295a7438e5e097d9394",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/2d6cdb5ed9c39f8b480708247187d27a2b40de": "b77c7713c2ced5163653039589232326",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/048c1ddf6277ddf929fa85965aacba4bdf6b04": "bc619c0a31e35f2fff6996c12c9ad472",
".git/objects/f1/b295fd5a96f4ad4601a795cd199379421d14fc": "b8fce0e3a67f641023e5bbb52f5da209",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1c77539a79756c0f8765d7cc1cac1069bb4296": "4399bfc0006f6c319f4a5be9aa4a43a4",
".git/objects/f4/feb59c4b6a2dbb44da1e37ec1c390478b56ea4": "b3847561f363baef87db3a8c1fe063d1",
".git/objects/f6/996e1d01a64687401f094b45cb1503c7ab4e88": "2e57b616bd0a00417f5478e745f27cbd",
".git/objects/f7/bf01998288550c9ff6ec5bf2e6eb6dfa28e6a3": "702a00290ef6cd25fcd550bc264a6c80",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "0518e6b3464c0adf41dea502cbe93583",
".git/objects/f9/3f0b40c50c003473cffc6ca715d82dc5969f98": "00c55d6f4d186c9c7ed0eee156ace945",
".git/objects/f9/c17749c39129eeb1ebaf81e8b9227c7e97bccd": "3bbb28b0b5496913b954c9a7eb57e3d7",
".git/objects/fa/3456adeb900475c8da34e5f58e44e0c9a4760a": "9feadcbc5253525fd43101611fdac41a",
".git/objects/fd/c54aa3fb89db6fef15f98876b029140afe70a1": "1bd66f80ee7929dd54a7e6b2e3c4d85c",
".git/refs/heads/main": "9efa5b4f9219e1809a51317b56664652",
".git/refs/remotes/origin/main": "9efa5b4f9219e1809a51317b56664652",
"assets/AssetManifest.bin": "bf77fff0bcaee7199aa85a7aeeef66dd",
"assets/AssetManifest.bin.json": "f0cf83428afc65425dff54b2386969a2",
"assets/AssetManifest.json": "80558adcb6d0682d3d82957a28e908d4",
"assets/assets/manserv.jpg": "b3c1e1d5ab25912adf12eb80634d0188",
"assets/assets/sgt.gif": "f559c1a31d742eeda0a2c7c96ab682fd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a0353edff810c023daa31f0a324272fc",
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
"index.html": "c0f4ab1cbb6e8ee57e435a8bcd92f002",
"/": "c0f4ab1cbb6e8ee57e435a8bcd92f002",
"main.dart.js": "77e656a0e698a0bfa4f65d5a000a6cea",
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
