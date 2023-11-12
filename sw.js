/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","89165b50e2408aaa0858291525e81fc6"],["/about/index.html","701e9d2f10e41ab533ad3089692fae8c"],["/archives/2023/03/index.html","5a3e1cae2344a7af36b7ee8c29d96282"],["/archives/2023/04/index.html","021f3a292b4319a5406ef2449c107e18"],["/archives/2023/07/index.html","3b3b3702f8196618f7574d77fe9de64d"],["/archives/2023/index.html","e5e88a7681019661a312be611b8ef0e0"],["/archives/index.html","704baed79f7bb47d72b8c895aeee04b6"],["/atom.xml","79e95ccd8909949c4c20af0a1221c431"],["/baidusitemap.xml","dda2520cc05af4eb97b981d772d3dc45"],["/categories/index.html","44081525a9acc8e26dd52c6dc1c4f295"],["/categories/学习/AIC/index.html","2d8bcb62a1d82ee296d776d0058f567a"],["/categories/学习/index.html","57495a1b897f3df875a7e55f19cf9f2c"],["/categories/网站/index.html","d303b27efd95865121065490c116c69c"],["/charts/index.html","4a228c3dc4de36f7317b94faf20edbdd"],["/comments/index.html","8583ac3d79a972951fae4c3d264386ef"],["/css/custom.css","59b0d972a3e143a20eac66e5c8c57eb8"],["/css/equipment.css","5c84c90b9d04db40041d126d9cb40c67"],["/css/essay_page.css","9dea25de4360b7d83c09f57bba410b5f"],["/css/index.css","05226b39f9f9b4c40c8439646fa3dd5f"],["/css/progress_bar.css","08beddab8a62411ac757947550792307"],["/css/project.css","aee12d876573066962afc9068966041f"],["/css/twikoo.css","0d4d9f56035ff463d0726e64bfa598c9"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","4d99e1d7a6d383eb07540fa3197e8c6c"],["/gallery/index.html","d661d76fe7db65f173b4b94da3435237"],["/gallery/test/index.html","c66455782555c5a4eeb7103430c979d9"],["/img/1.png","6d9cef99dfb290e33ce731252ea0546f"],["/img/2.jpg","53980ce4df5b57bc2ecfc31ffc11d943"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Blog.png","46f1b743e8aa1000efe04c677b8ce736"],["/img/a.jpg","855d42ffd2437b46fcfdf1477d8e889f"],["/img/about.gif","064d61fb1c9fff0ce541d587f4430e94"],["/img/about0.jpg","e4448ae2ba2d571d488cf02db7b496cd"],["/img/about1.jpg","1784f3b0aef7af7a144f00b27d9993c7"],["/img/about2.jpg","17997cdf3c0e7bfa5159c8ffb2197fe6"],["/img/about3.jpg","a63b7d364c79823ed0c690251a3e5daf"],["/img/about4.jpg","274b5022f231bf31821d50ff9b5e002a"],["/img/about5.jpg","961ddffda8b283249c3dddc6bb0e919c"],["/img/about6.jpg","b86ab49284b6eab3013e74d6339273ac"],["/img/about7.jpg","86cf07a69fb748270f14075d074a4c8a"],["/img/about8.jpg","e7e4ffcdebca8d83710bd08cc76d4d22"],["/img/about9.jpg","125430396eeccd84bde5e8d54a0f0db1"],["/img/archivebanner.jpg","f4714c78c326dbb8b078adc0e444ffe3"],["/img/categoriesbanner.jpg","50a51c27f2f01055422a193406458f1e"],["/img/chartsbanner.jpg","52405e248d03c2bc900b5f2d4c3fbacf"],["/img/commentsbanner.jpg","2929a61984053e6e00f743d0540ca263"],["/img/cr1.png","cf23526f451784ff137f161b8fe18d5a"],["/img/cr10.png","246e9c9fc22108c9fef13ece809a3b1e"],["/img/cr11.png","469a303a1c5bef0923722b346a5160d2"],["/img/cr12.png","c29da8c2afae760bb16ae5beddf2dccc"],["/img/cr2.png","11fff3497f5c38112cca16137467d5c3"],["/img/cr3.png","2b3a86585b71a7a3f08ca26f5f274746"],["/img/cr4.png","7f1f5889d14c2a4e59c98e9317d24b7c"],["/img/cr5.png","20b9b8e87a18799855d23695c1f44fa3"],["/img/cr6.png","ce4ac77f788a2fa7fbcbe1cdd7fd3bac"],["/img/cr7.png","21dff1c163052cc2e6fc941093dfc425"],["/img/cr8.png","e888bb505de1b0810c770c00beae58f6"],["/img/cr9.png","b6944c569210fbe406e0b6e5952d1715"],["/img/enfjMBTI.svg","ab9eb4dbe1201ce33bc74688f35e348b"],["/img/essaycover.jpg","1a77660b9d9a5bf275056e3147f89f09"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/gallerybanner.jpg","973a45ff93e00fa252d583a87de8b30e"],["/img/kun.gif","8ab6904ad5b86162ca4deecf74ef298e"],["/img/map.jpg","892cc1d3346f2bbc2a34567abe75ad13"],["/img/monumentbanner.jpg","79326d9b9227fbea49b882afad092d03"],["/img/projectbanner.jpg","8aa20916b640f95b296096f7d4be4542"],["/img/psc.jpg","19f2ef368d99e628c42d8d14371106b9"],["/img/pwa/README.html","8bf4854b23decf2974308081c0684d88"],["/img/pwa/android-chrome-144x144.png","bbf908c02066bd6ce89cee6fc0dbfb01"],["/img/pwa/android-chrome-192x192.png","8b19c5536382a22dff30058ceafedc0e"],["/img/pwa/android-chrome-256x256.png","8ec64a7afaf4d683a1f5b0d4b0dede3b"],["/img/pwa/android-chrome-36x36.png","3488af6dba272170a56cc2d0f8be03aa"],["/img/pwa/android-chrome-384x384.png","a0c9151567453d34a22a71cf26e10160"],["/img/pwa/android-chrome-48x48.png","097dbce4908a01a88557723df843dd64"],["/img/pwa/android-chrome-512x512.png","b610e8d9565bf690a2d2ad92bd70af97"],["/img/pwa/android-chrome-72x72.png","59ac8faa603d392b13c7b068d8faec69"],["/img/pwa/android-chrome-96x96.png","9b8a9676a011f2cb688dc7e2f3882080"],["/img/pwa/apple-touch-icon-120x120.png","85fa7813bb0ed556cada799ed6c9b611"],["/img/pwa/apple-touch-icon-152x152.png","788efe1018a038a834e496daa7d6e72f"],["/img/pwa/apple-touch-icon-180x180.png","8b7ada743f9fb3f4b44fd5f5a963db38"],["/img/pwa/apple-touch-icon-60x60.png","c58b73b6fa4dac5c71369fb5ec001ecd"],["/img/pwa/apple-touch-icon-76x76.png","9fd4c80080bf08b711464d120bf156e4"],["/img/pwa/apple-touch-icon.png","8b7ada743f9fb3f4b44fd5f5a963db38"],["/img/pwa/browserconfig.xml","02d58c62e3265d655595c932abd6f138"],["/img/pwa/favicon-16x16.png","d82a52bddfbf7e4eebb65d4b3218aeb4"],["/img/pwa/favicon-32x32.png","ace8dcd711c09e6e6c05d2bd2347b468"],["/img/pwa/mstile-150x150.png","53b9b6607048ac5a8bf7e6b501bead78"],["/img/pwa/safari-pinned-tab.svg","7b60bf40efd9c07d31adee32a73ec93c"],["/img/tagsbanner.jpg","dcf116f1426b77492de9e04a58188544"],["/img/ypy.png","e9e2fb940b6cb3c295d235d183688c0a"],["/img/ypy.svg","2698685745a340122393f60ca388d655"],["/index.html","e69964eba9f13ac51025ddddd785b2b2"],["/js/chartscolor.js","7547174b78e5f41864ec3d0ff8e0577c"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/custom.js","6fee577b162f790835db2f971f514aea"],["/js/diytitle.js","69f41c1fae82b3918c58fbcc73edfdc6"],["/js/grayscale.js","c0d284ca993a7d6a2ecfea49f945f5d3"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/project.js","4a60e94747a2e2e7460c9da596d0baa1"],["/js/pwa.js","08ac73a973855be130adaf469df1de8c"],["/js/random.js","79c4e878bd4b3683245bdf85c5d10dae"],["/js/reward.js","ae83396dcfb2426aa3cb283297fa80bc"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/sun_moon.js","58405a684e894d9d3ba3da862e7b699c"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/js/waterfall.js","5b6c6c5404c1916c0950c5e609dc2726"],["/monument/index.html","630b945cebb960984db88f719a9c62c0"],["/posts/16107/index.html","09d2c6461ccb339dfd4cbf83c5368b3a"],["/posts/2/index.html","a942ecdadf164d29b0b1000470df3da1"],["/posts/23919/index.html","e53676db87831d3ae593828aec1ad801"],["/posts/3331/index.html","6ce485e23dff8988ae5cd60386dc2009"],["/project/index.html","8b468f227ee3c254cfd9e87375378a1c"],["/search.xml","d69b508ce70a480b32f8c4deda4a3ba3"],["/sitemap.xml","a929e81a78b7e1cd1f2201c007724a3a"],["/sw-register.js","f077faddccad2b23a6c51f6464d6dad6"],["/tags/index.html","c5c596395d387ab4a902cb3e13b09676"],["/tags/本科/index.html","f38baa850adab7435f4d0136fa482dc4"],["/tags/杂记/index.html","a49974e99f5f8df2e6431bc01554cd18"],["/tags/生活/index.html","d91006357f2570cfd5b806591a366f3f"],["/tags/笔记/index.html","707de2bbea8e024d077f5a3ec0b9f24f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
