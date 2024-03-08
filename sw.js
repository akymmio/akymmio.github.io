/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","21504ee8d55c7f61710169b59fb846c6"],["/2023/06/05/c++基础/index.html","3abfb0619c62e3edbeb8ffd5fbc63eff"],["/2023/06/09/sort/index.html","0bb2c5b3203787d9349824483054ae36"],["/2023/06/14/epoll/index.html","37674c644a9c4b6bb98c8d7c1ddd151d"],["/2023/07/07/服务器开发模式/index.html","5b76adab901553fda8ad7526ba5828f6"],["/2023/07/08/python学习/index.html","e8d6f4cc516ba1e4f1a6d870b843039e"],["/2023/07/11/网络编程/index.html","7d34d8786733cfc1c9fa042ffcb20d85"],["/2023/07/20/前端/web知识点/index.html","6549326a24a0e70b25d238f1818ecde3"],["/2023/07/23/前端/前端/index.html","3e1dcc44cd6310b39f6974379cbebdb8"],["/2023/07/24/javaweb/后端/index.html","a3fd88605732acff5f2bbfd37ba8ee46"],["/2023/07/25/Golang学习笔记1/index.html","670fa9a3a69de33e6f24771a5ea4b6bd"],["/2023/07/29/数据库/数据库/index.html","9bac64eb6fbfb2354496aee85f94d1ec"],["/2023/08/07/阿里云oss/阿里云oss/index.html","2ad1c48f05346410f7059cf56cfdacea"],["/2023/08/09/登录/登录/index.html","087ecdc35d3e4e827fae57e60c835332"],["/2023/08/11/异常处理/异常处理/index.html","f4286fd9bd4a22fe1c4474fe0747e361"],["/2023/08/12/spring事务/spring事务/index.html","044f46bb115ddd70db248ef120064fb4"],["/2023/08/16/Docker/Docker/index.html","83886e757e67cced3263f2e538427876"],["/2023/08/16/bean/bean管理/index.html","91873e1ca12b75154f8f6aa0d578a8ad"],["/2023/08/16/springboot/sprngboot原理/index.html","901629caa46732c8f577781e376fb930"],["/2023/08/17/maven高级/maven/index.html","3c9ecf0f719dada7cd5373f240722c0c"],["/2023/08/19/java/java基础/index.html","e784f706f065f62143c2137b7d82d5ed"],["/2023/09/02/Redis/redis/index.html","8037887aafac12cb6311a1e26e28c216"],["/2023/09/16/git/git/index.html","ab5f70d09cf9f93aa54328cd209caaa6"],["/2023/10/11/waimai/外卖项目/index.html","83c07581982d77355593af307a0e4ba1"],["/2023/10/24/Redis/存储数据处理/index.html","a24f4419f2098b2c3a1ed66c23a55ba3"],["/2023/11/06/设计模式/设计模式/index.html","18122407e8f6b0848118f9755c75e377"],["/2023/11/09/spring-AOP/AOP/index.html","8a5a5a099435b0d8aa6cbefe01b99bc7"],["/2023/11/12/springcloud/SpringCloud/index.html","a51e9252b75acc3a575fd13a3a8aafee"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","13f7ced95b887884a028606eba1959af"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","2376bafe0108fffddb92a0b91b71c6f9"],["/2023/12/13/数据库/mysql/index.html","ad4ebcb293de52b8d081b0d8e8922772"],["/2023/12/21/前端/前端2/index.html","e78593fb5266521c5353b62fdcc058df"],["/2023/12/24/前端/vue2项目开发/index.html","d721e04729e3370b96941715056aebfc"],["/2023/12/29/前端2/vue3/index.html","af3d2de3fa437055a5e36e26ebef2eb4"],["/2024/01/05/前端/请求参数/index.html","a3cf3952e508597602bdc6452e613803"],["/2024/01/17/java/java集合/index.html","e58331f4a03c7be144ff3363ee29c732"],["/2024/02/18/java/java基础知识/index.html","2cd8885701f21f332d6342b6e06101b4"],["/2024/03/03/项目/chatGPT/index.html","49c89afd8cd6858b153396d696a6f4fc"],["/2024/03/05/chatGPT/项目/index.html","e5f55a62792f43dff09a76a01c10fb8e"],["/2024/03/06/redis原理/redis原理/index.html","3ec00515ada99babe59b881ecfd9a508"],["/archives/2023/06/index.html","dd148e5ab778132f53859e03e0a1d9dd"],["/archives/2023/07/index.html","64256e34090cc3de10eb5a1f54a08c6d"],["/archives/2023/08/index.html","316482508d4bc12dcb1dfe22487beadc"],["/archives/2023/09/index.html","e23ddba9d4b949d58554ab7fd8431041"],["/archives/2023/10/index.html","e556e3f5aa05f40d4cbcaadc9b69cdee"],["/archives/2023/11/index.html","724aa2593d55bdc8402a39e014a78f81"],["/archives/2023/12/index.html","b8634eba96a973ef3b78cad17f7e181b"],["/archives/2023/index.html","bc5f1625bf09d25c495f3bbbb05782bc"],["/archives/2023/page/2/index.html","99c136d12b8fde284dac58bbea3b2cd1"],["/archives/2023/page/3/index.html","51d0dcdad1cd1b7b8faef76f345e922c"],["/archives/2023/page/4/index.html","756fbecf113b726d5722b4ea64ae2052"],["/archives/2024/01/index.html","787a69472411138e8bc312d7e370e310"],["/archives/2024/02/index.html","0aa146481cc9ee70f6bf4e9bfbe69129"],["/archives/2024/03/index.html","db50b6825e7c0b106acdd15eee295115"],["/archives/2024/index.html","9f9fdc9ed5ab33e0298a7b78e8b4fdcf"],["/archives/index.html","017a6c657b4da2f4a297e020009fb372"],["/archives/page/2/index.html","64db43637e7b5d4c2477dd7aa5be5f51"],["/archives/page/3/index.html","31830c9c08a9f33357b1bf38145717ad"],["/archives/page/4/index.html","0a5a6d6bc76edee986110f74f71da98c"],["/categories/c/index.html","35f2b97a17068430fdd34513c1687487"],["/categories/index2.html","306b5070565ece01c2cd74a67d2326a6"],["/categories/python/index.html","e48eee527430fe24de2e577831799edb"],["/categories/前端/index.html","e2a5d2d369b9d8361df834bd72ac44e6"],["/categories/数据库/index.html","f317fc0dfe9f61624b9d017e2458f30a"],["/categories/设计模式/index.html","f7cbe11127e29bde64000f1ebadef742"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7e6a6e9ad0e0553e3b20425f90549a39"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","b41beee755c6adf3fe9fa46b5907d850"],["/page/3/index.html","7257f10c0e4f153bdd10ac0363750d95"],["/page/4/index.html","c3d8d84b291cca65e11ec56b7cfef878"],["/sw-register.js","14b5340535a9ca5b9f07a499e4598f63"],["/tags/Golang/index.html","6ece4224a247fc115cba9365287a1acb"],["/tags/c-服务器/index.html","dd9414aecada9b9979fccd7660cbc672"],["/tags/c/index.html","83ab86fb5daf680e648e5cae004b9e9b"],["/tags/index.html","9dbfd96824a8792a592bba2ce1811202"],["/tags/java/index.html","a16d8214d7f16e408fc8d05adb562fbd"],["/tags/javaweb/index.html","0e760fab1b4be43393091fe0f65ea271"],["/tags/springBoot/index.html","f6eeb81e64e5a7bcfb37b666660a5e0e"],["/tags/web/index.html","3cc81a7f0ad5f5fe8af0bbe8c0de49db"],["/tags/前端/index.html","5f6da82f51be2096f4557a81a290cfdc"],["/tags/数据库/index.html","fefa7145e6d98b1d6ecaa3aeb2e19bf3"],["/tags/设计模式/index.html","f96eced841fefc6edd19850908b91aba"]];
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
