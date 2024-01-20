/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","2d8465b055febf5c452a0ca799f658a5"],["/2023/06/05/c++基础/index.html","c6849c1b2f9ff6b98d5e798df0829efc"],["/2023/06/09/sort/index.html","0aac05820383d43e0c7bdec1c1c57b17"],["/2023/06/14/epoll/index.html","28e6a6661f8d53b9a0a2976becc8083a"],["/2023/07/07/服务器开发模式/index.html","121bb9aa9bafd7bcde90cea8456213dd"],["/2023/07/08/python学习/index.html","7c556b275f08abdc38b08cb80435b817"],["/2023/07/11/网络编程/index.html","e4f99ec4b2db1e1113e7bae384964ea3"],["/2023/07/20/前端/web知识点/index.html","33f07672ae322f6e8bc85f94e11dfca8"],["/2023/07/23/前端/前端/index.html","13bc2ef22a47dadc29fdff7adf769e42"],["/2023/07/24/javaweb/后端/index.html","0f7a4409626beeee734e2231b63b493c"],["/2023/07/25/Golang学习笔记1/index.html","babb39ad62c4aeda0e5ecf633b6dc09c"],["/2023/07/29/数据库/数据库/index.html","486f6e2aea59b76c01f3f39038802217"],["/2023/08/07/阿里云oss/阿里云oss/index.html","feae5ebac657eb7dda4d423bef6c9db4"],["/2023/08/09/登录/登录/index.html","4057ae028b44bd2e22fb5ac424bed5f6"],["/2023/08/11/异常处理/异常处理/index.html","48ea491e2034de91041778f54d544e4f"],["/2023/08/12/spring事务/spring事务/index.html","8c4dc7eb942d1814e287f75f1752c4dd"],["/2023/08/16/Docker/Docker/index.html","caccbc48561b64bfbd52ea0973a825d2"],["/2023/08/16/bean/bean管理/index.html","e6c15e17a96682fe5f83c04c674a8013"],["/2023/08/16/springboot/sprngboot原理/index.html","b6616ca975b61055155e69e11d48dfc6"],["/2023/08/17/maven高级/maven/index.html","4081733bfd89061aee4a6c364c4a2f94"],["/2023/08/19/java/java/index.html","3ee4682ae0fc4e61f2768d8ff37dc004"],["/2023/09/02/Redis/redis/index.html","dc34afbd1650d8edace589d344bff2d1"],["/2023/09/16/git/git/index.html","ec5bde85bf0e59423d4885e19536cc57"],["/2023/10/11/waimai/外卖项目/index.html","60cd147d947a43e4fc751abfe0f52fdd"],["/2023/10/24/Redis/存储数据处理/index.html","aef6016e7d2459f2a4a0c19ea2c127d1"],["/2023/11/06/设计模式/设计模式/index.html","78d2640d031501a3132fd02e060a397d"],["/2023/11/09/spring-AOP/AOP/index.html","17e11f484e80b4823e3e13efafd3bf8d"],["/2023/11/12/springcloud/SpringCloud/index.html","c8a20b05884bd723f4de24640877a823"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","1e8aaf7155355582beb944707910feea"],["/2023/11/15/常用注解/常用注解/index.html","0bb542db4ddc904107835339f0213b08"],["/2023/12/06/概念/概念/index.html","fbccb138da3f99ef2d893e5d50a9e6eb"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","43d8016b23fac4c375bd5db9007335b8"],["/2023/12/13/数据库/mysql/index.html","578388ba9cc054f4f53fa9badaed893f"],["/2023/12/21/前端/前端2/index.html","e2b7714a472babf2767f25ba6279ac6b"],["/2023/12/24/前端/vue2项目开发/index.html","491cd2a31754d569ef17c038faa17b20"],["/2023/12/29/前端2/vue3/index.html","62749ceef234cdc959cf6950d9776a8a"],["/2024/01/05/前端/请求参数/index.html","645710e08923a80fec987163a85c130d"],["/2024/01/05/项目部署上线/项目部署/index.html","0c4c37c914fd2a1c9ff27dd46d25b9aa"],["/2024/01/17/java/java集合/index.html","bb72048014b6b0103fa11ed2fc70adec"],["/archives/2023/06/index.html","240cfa2d36ac5fa19fe8a505c79de5b3"],["/archives/2023/07/index.html","45a53c5f66fb9ce1c39eb9478b9e25c6"],["/archives/2023/08/index.html","67c419347f74309a3f9d63ee16fdb2b8"],["/archives/2023/09/index.html","677630c252417409e62b055309c1eba5"],["/archives/2023/10/index.html","84d2347c58738f0ff78166814b1d20a2"],["/archives/2023/11/index.html","d1c67d5110b4ecf28a7ae0b153ab6f4c"],["/archives/2023/12/index.html","b542e846e8667752e274743b63ea407e"],["/archives/2023/index.html","19c05a647c28ebb24757944205f5b2f6"],["/archives/2023/page/2/index.html","f96945f53974bee0101f5b946e9e36d1"],["/archives/2023/page/3/index.html","d501f5eeec653d58f24811fecf9a2bbc"],["/archives/2023/page/4/index.html","bcbb594e3e610a0aa5aab76bc6349a7d"],["/archives/2024/01/index.html","594322d74b6ab0167e99b63c82aca4ff"],["/archives/2024/index.html","e09449bc0b8c914e8a82e7b30e732229"],["/archives/index.html","5f858c6528cbfedf9760f490299417b6"],["/archives/page/2/index.html","3bfd14476d921b603e46725ff03dcd32"],["/archives/page/3/index.html","318bbfda160c9ab9f3e7c674d55a9aad"],["/archives/page/4/index.html","f42284b270ade29e7d79d44edddf65e4"],["/categories/c/index.html","df180c7d7b366b127f4d96791f0e3170"],["/categories/index2.html","587b4fd0a81eff4bab1db0120804c11e"],["/categories/python/index.html","f05896cf1717fe51551256b026fb79f1"],["/categories/前端/index.html","156689830cdb66a25554da67c524cdde"],["/categories/数据库/index.html","6a49f1e6920d3fa5079ba9a45f53085c"],["/categories/设计模式/index.html","fdf0d042764d8841913f4c7adafbbdca"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fe33b5602e89d17a1471f46b2d61e234"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","98b34dd824b3b319e41457ab485d21e7"],["/page/3/index.html","a4c6387124bdd96c1c800dc462861f0d"],["/page/4/index.html","44e0967c3105bd613b349f014b3aca3d"],["/sw-register.js","f22034b88baa17c20d436849edcb73d3"],["/tags/Golang/index.html","258f7c1d7e1dc455b3c4fa516a6c6c0a"],["/tags/c-服务器/index.html","5623213ae1885d34d0b6cb5cfd1eac27"],["/tags/c/index.html","7ad838b8ecdf724a6c7300499e976bef"],["/tags/index.html","4051d315595069e8aa3f599b783e25c9"],["/tags/java/index.html","3716d6a67e9c1aba8846bbb83881ed49"],["/tags/javaweb/index.html","283e7dbbe77bfedd09eb052bb36edc4a"],["/tags/springBoot/index.html","4ef5ea56434db4cbe3591adb0dbd3a1d"],["/tags/web/index.html","1a602bd1d6ee3a09f29e182283669966"],["/tags/前端/index.html","1984a4240eaa0287d53003719a72fa92"],["/tags/设计模式/index.html","1060a122c19b71bd948b071998760f28"]];
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
