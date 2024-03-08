/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","a73e0f130d8124638370e50a97f3aca9"],["/2023/06/05/c++基础/index.html","fe6e65e87422b7478f190b69516ca4f1"],["/2023/06/09/sort/index.html","dff65a108aab3caffe8f50fd36593291"],["/2023/06/14/epoll/index.html","27da8a5247ee73beb3238a8311e5ebd5"],["/2023/07/07/服务器开发模式/index.html","782b2ee5a8cb9896adced9bada68da36"],["/2023/07/08/python学习/index.html","354f6fb335cc12cc2df9323e5c1e83d8"],["/2023/07/11/网络编程/index.html","e173aac6f9e55d08835ab789859bd00c"],["/2023/07/20/前端/web知识点/index.html","fc0a4a01551c1e873f82b8905d69cb9e"],["/2023/07/23/前端/前端/index.html","ecb7b041e8858bd1da8aa5db5333cbb6"],["/2023/07/24/javaweb/后端/index.html","18a8a96c101bb7bd2da804a833ec59fa"],["/2023/07/25/Golang学习笔记1/index.html","521de531487b761c721aaecd3ddfa71f"],["/2023/07/29/数据库/数据库/index.html","945a04b004b3e04499d87a8ae8c74a8c"],["/2023/08/07/阿里云oss/阿里云oss/index.html","8001b29ce6909400f9180edb2c426569"],["/2023/08/09/登录/登录/index.html","d76f3994748eced4c9e78f963f54e534"],["/2023/08/11/异常处理/异常处理/index.html","0c6924d967f27765b30b9fc114886016"],["/2023/08/12/spring事务/spring事务/index.html","c94eb1b38fa32cbb4e8cfeaaac6b2d68"],["/2023/08/16/Docker/Docker/index.html","f0d3959113a72696ff7a67eb96ca93b6"],["/2023/08/16/bean/bean管理/index.html","f81f3d2c3abe4f6ebe11238e3065c4ca"],["/2023/08/16/springboot/sprngboot原理/index.html","d83cdb916947999631121b84f98237d5"],["/2023/08/17/maven高级/maven/index.html","e6d522d328155e1e2365b00c2f1d881f"],["/2023/08/19/java/java基础/index.html","e345d1b0448f70e9ece2e3581ec2cffc"],["/2023/09/02/Redis/redis/index.html","0d08339a5e0f63adf1b6857a2562a5ca"],["/2023/09/16/git/git/index.html","8584db219c4e8fda7853c9aa6c0b4fc8"],["/2023/10/11/waimai/外卖项目/index.html","c8020d261a1421b5d81f1c0ed7e76c3f"],["/2023/10/24/Redis/存储数据处理/index.html","29208983870644831290e8a9cd3b9a7f"],["/2023/11/06/设计模式/设计模式/index.html","9b632260d68665085b4922be1bcbc061"],["/2023/11/09/spring-AOP/AOP/index.html","3cac9533662bc42ce565af17793580f9"],["/2023/11/12/springcloud/SpringCloud/index.html","46dc2eb20d8ce21e4606ca2877afb774"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","7bf8c5fbc96ef79f3e5b0b9ce9e8b802"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","d31bb787a88c5dd6bad5d406ed664b99"],["/2023/12/13/数据库/mysql/index.html","417e300905079ff72c8d5a0322bb6375"],["/2023/12/21/前端/前端2/index.html","740a54cac2a9f273dc475d51c56537af"],["/2023/12/24/前端/vue2项目开发/index.html","c764a9a4b2c36a5cf1a01b2a7b3de0f3"],["/2023/12/29/前端2/vue3/index.html","b8e08b14ecfde3eaf497d65d79e2b787"],["/2024/01/05/前端/请求参数/index.html","d36391092ace3fc147e1a04db3ca880d"],["/2024/01/17/java/java集合/index.html","94896adfc2cf5818561230d33bb8f8d6"],["/2024/02/18/java/java基础知识/index.html","536a08548d46c9d2b5a861bd12ee51cb"],["/2024/03/06/redis原理/redis原理/index.html","05efdcd69051f0beb91de1e9ba59f026"],["/archives/2023/06/index.html","30b5141ba10b4d593e5ec688c95765ee"],["/archives/2023/07/index.html","6147b6083c05cebceef223fe9b8a6e2a"],["/archives/2023/08/index.html","c194a2cbe090161fabe048573e7e465e"],["/archives/2023/09/index.html","b8720d7a4b2a5816c60464200bac28f4"],["/archives/2023/10/index.html","ec1120f5d170b6cb1d6feaa1e3f4d109"],["/archives/2023/11/index.html","b43ddbd37d1550fbb95936e32c4da131"],["/archives/2023/12/index.html","c2f909bb4f2d0e413bd917d88fd24283"],["/archives/2023/index.html","af46246d553a5bc8798986a41451fc31"],["/archives/2023/page/2/index.html","1ed06d2dc6a030046fca7f804d4a8eab"],["/archives/2023/page/3/index.html","bd1f3c914f65fc1eb48a62ab7a3cf0d0"],["/archives/2023/page/4/index.html","1257e09d88c68117211c1b724417337f"],["/archives/2024/01/index.html","14d8453e85848b287f6621f460a6e398"],["/archives/2024/02/index.html","f930f488a8e41d19fd2e72710139991c"],["/archives/2024/03/index.html","57b5fc3b1379064c49bb7e4824049bd0"],["/archives/2024/index.html","b78edc3ea92d2f764585558af2d2cfb6"],["/archives/index.html","4c5102fa823ab89dadf689ecf1a89552"],["/archives/page/2/index.html","682b0f2cfe751b75332dd3eac83d5846"],["/archives/page/3/index.html","73a079f9d51eb5c9b55296547dc6d26e"],["/archives/page/4/index.html","9bc3f0742723391542a3e0344328368f"],["/categories/c/index.html","f028a6c5f09a9183ece7aa953fb4b6c8"],["/categories/index2.html","207aa036ea5da310de5f43a6d4804050"],["/categories/python/index.html","23160a894d31dcdb7b13bca1ceab5856"],["/categories/前端/index.html","3390cf5632ba5c1f1883ccb3a06c5ac0"],["/categories/数据库/index.html","57714a3decb93d3d8a15d4ffe8b9dbce"],["/categories/设计模式/index.html","363fbe0fc868a53be023cbf6fa32201a"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9e52dde68faae6919947a16a1632e3e8"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","a847328934e799c18b1421f0a568f588"],["/page/3/index.html","7c018797fdd299f3c610211a29c120d9"],["/page/4/index.html","c8aca1c1274360a5a132fc2571f6bca7"],["/sw-register.js","9302ce5c73f1a8859b5903dc8f807bfa"],["/tags/Golang/index.html","2e8a8e79ccefcc28aed2ba0795a275ac"],["/tags/c-服务器/index.html","571c5945c84239a17fc3f57baba7ecb7"],["/tags/c/index.html","b56189176bd36c60dc0628461b2b1fd8"],["/tags/index.html","0d3e61348aed005b3439bb4459a93203"],["/tags/java/index.html","2a8ca38719b3179d30db0ab478666422"],["/tags/javaweb/index.html","038aea9e03ab81525e5377687234345b"],["/tags/springBoot/index.html","969ae1f33fb162f06645243a63bae7ee"],["/tags/web/index.html","99712d4e4fe8bf2d4dc114503af8a6bf"],["/tags/前端/index.html","cb2c374fa11f522c8ebde323a0ac979e"],["/tags/数据库/index.html","2704bb59d8c54d614358c78041e4cd3a"],["/tags/设计模式/index.html","ee4b534684344fac6ab1dbcef1ef7a99"]];
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
