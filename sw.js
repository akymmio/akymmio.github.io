/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","b96bcbb044b5f46b49fcfd9cb3129976"],["/2023/06/05/c++基础/index.html","f94d2165eccd2a0e1c2e16cb44efdeec"],["/2023/06/09/sort/index.html","6875f7c87fca9d80491601009dddae21"],["/2023/06/14/epoll/index.html","86bc5daf17482d64d296d7223c82b0b3"],["/2023/07/07/服务器开发模式/index.html","c404a6f5105f29a4ada61aa501c52390"],["/2023/07/08/python学习/index.html","8f0c9f7665bec221f43241fd537fbbf1"],["/2023/07/11/网络编程/index.html","6e2f585ca9f8a5d3f9c21832b7215b72"],["/2023/07/20/前端/web知识点/index.html","c12d5cc82358a69604b22025751728f8"],["/2023/07/23/前端/前端/index.html","cfefcb55ecc083c91acdfd2e0a1028ea"],["/2023/07/24/javaweb/后端/index.html","e6c9eb37e952cdc36e1a2d8583a22b16"],["/2023/07/25/Golang学习笔记1/index.html","f999d5817817359edf7157989bb04b4d"],["/2023/07/29/数据库/数据库/index.html","693d6abd11b9b9533133229cd861b00a"],["/2023/08/07/阿里云oss/阿里云oss/index.html","d206ab97ccd59ad2ac8e3719a6b61c02"],["/2023/08/09/登录/登录/index.html","ea94e90b13b228a7ebd3c0bc71417a84"],["/2023/08/11/异常处理/异常处理/index.html","64f8c1667b3143a29b6f6c1d0e670b9a"],["/2023/08/12/spring事务/spring事务/index.html","8a4f030367d0ef2b49e4c6aef4c65101"],["/2023/08/16/Docker/Docker/index.html","108f4b4eec815c5d35d5855a2fe76019"],["/2023/08/16/bean/bean管理/index.html","6693acdc8b3702e09287df41ff488d9c"],["/2023/08/16/springboot/sprngboot原理/index.html","e272c50951681dd5c2c39e6f940ec666"],["/2023/08/17/maven高级/maven/index.html","4bb6949e5cfc1e65a698029e4d086f8b"],["/2023/08/19/java/java/index.html","c2f25313aefd0c439f8a424468c69b87"],["/2023/09/02/Redis/redis/index.html","342bb6b2728105783baffb7c19ce95e1"],["/2023/09/16/git/git/index.html","00cbdf5a18051859300127e7e9d6c945"],["/2023/10/11/waimai/外卖项目/index.html","9a11b3053ab58660b90ae175f182f6c0"],["/2023/10/24/Redis/存储数据处理/index.html","32e01d9280c389e2e2907603cebb2972"],["/2023/11/06/设计模式/设计模式/index.html","6c06b53c695d480cb5e3f9a21c26ccf9"],["/2023/11/09/spring-AOP/AOP/index.html","dab39efc84af0a534b4be5629838c4a0"],["/2023/11/12/springcloud/SpringCloud/index.html","1758c198459013ada2c42c90c03c9169"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","4562a0d18433e7be1bf110dddf76307f"],["/2023/11/15/常用注解/常用注解/index.html","eea8603dd92bd37f3ac03d5067a55395"],["/2023/12/06/概念/概念/index.html","0930a1f9292ed2e32a49f212de5a11d9"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","5523d70ff0b6c5f16fb90556be851bbf"],["/2023/12/13/数据库/mysql/index.html","fdf21fb2e1960cee4688820bd4f2aa33"],["/2023/12/21/前端/前端2/index.html","fad0aefe00aecac8f545716c16b2723f"],["/2023/12/24/前端/vue2项目开发/index.html","d32371484d8facbbcd50d3bb188e586a"],["/2023/12/29/前端2/vue3/index.html","16b0a3f676e0d23a6a9b6a029c2aa312"],["/2024/01/05/前端/请求参数/index.html","1574b87272c6292fa9c9c2ab41f95955"],["/2024/01/17/java/java集合/index.html","bf30e1e581e15017a1ee397b0797f465"],["/archives/2023/06/index.html","51ce900df1972a115934e80a6f6ecf81"],["/archives/2023/07/index.html","e0a9e6a3b2e503330fea00f847642544"],["/archives/2023/08/index.html","49d51d665854986797752d1903ed1679"],["/archives/2023/09/index.html","76b9ce346ea15705413819b96977598e"],["/archives/2023/10/index.html","f6de3209eacd4812bd6f2a7fafd64475"],["/archives/2023/11/index.html","21845b8e27375442be61948ec1f9c5e2"],["/archives/2023/12/index.html","8659e44a25d828e331d9bf4d2fc766f5"],["/archives/2023/index.html","1654db36bd33aba9efd2ad0b3798ff65"],["/archives/2023/page/2/index.html","2c208c50d2c519b7570d27a66e20f493"],["/archives/2023/page/3/index.html","396dfb06c0e4a540dc849cb495cb1bc9"],["/archives/2023/page/4/index.html","a14717a976ab9939456e9cdd177f25aa"],["/archives/2024/01/index.html","e70784e01bdac67813eb6c73d2dbfe61"],["/archives/2024/index.html","5b0e1f3bc4c35b4a15af19972c4388a2"],["/archives/index.html","2bd7cfbbd6f697c50523dbc6290571c6"],["/archives/page/2/index.html","3de49503e6e4f1826152bd3d05464a3a"],["/archives/page/3/index.html","42888f17ab380a90a10c0049d6819997"],["/archives/page/4/index.html","c3c24e09ed2eff3815f56438460a99d2"],["/categories/c/index.html","fc53e27464a3274c63d8a4c6e3c9d258"],["/categories/index2.html","a3292bbe9cdb493b3d5c88c56dbc4863"],["/categories/python/index.html","429ea2d6262894869e66d3cca44bb3ee"],["/categories/前端/index.html","4e11c4f250a1840d44b393169b2b2ce6"],["/categories/数据库/index.html","a23267c829aa110c169f926c9d260f89"],["/categories/设计模式/index.html","1394456f33a8fbc9f347cc27e7cbe6fe"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f048598a4e4d175eeb4a9df1fe798181"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","678f935f7c7830d19905afee29c1c892"],["/page/3/index.html","ee382b716f8a6c48d1e39e3eca86c8c1"],["/page/4/index.html","909747db3e261c690ed691bdbe85ca71"],["/sw-register.js","d88d442c90686480ea17969988106dfd"],["/tags/Golang/index.html","6141a28e17f4db3243d14f6665ea8fa5"],["/tags/c-服务器/index.html","f8baa9ffbea560b28b7f3b2897f77c71"],["/tags/c/index.html","f51bfdd3cd813287f0d9fa6af2505bc0"],["/tags/index.html","aeaba39ae6a2e87f12fb08fd634369f6"],["/tags/java/index.html","40848b380b3c3b823dd7f40d9f9a4bbe"],["/tags/javaweb/index.html","98ff4d0e8434b54eb66dccb13aeaf147"],["/tags/springBoot/index.html","16c376f911b0436a3629bb5ced3f083f"],["/tags/web/index.html","b2d03b162f3cada873ead70f4394a560"],["/tags/前端/index.html","0aa086c65a1792e9ddb95b7f5fa54c36"],["/tags/设计模式/index.html","b915412c045ce67622e29d42040e640f"]];
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
