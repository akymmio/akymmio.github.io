/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","0c14c21b180c9ebdcde15675a147af9c"],["/2023/06/05/c++基础/index.html","a5dec5b1f7611d4c91f1ab66ff3e6464"],["/2023/06/09/sort/index.html","09ad2b41c03e2448d3ccef76b776c67c"],["/2023/06/14/epoll/index.html","b192c18251198a959507bde7b443dd24"],["/2023/07/07/服务器开发模式/index.html","d10ed07e656d2a41972fb0feb24c6f3f"],["/2023/07/08/python学习/index.html","875f91eabc332e7061d71281b476d279"],["/2023/07/11/网络编程/index.html","01f00d6a51dbf14195e8428ff9498a9a"],["/2023/07/20/前端/web知识点/index.html","53777f799c9693b48f25419d506d56c6"],["/2023/07/23/前端/前端/index.html","7b67deaa4b8c9bd1c974d150d1acf38d"],["/2023/07/24/javaweb/后端/index.html","410f9267b91c8214265cacefb5a95c5b"],["/2023/07/25/Golang学习笔记1/index.html","4c74fc4f265104e28c9ab72a7f7b67a4"],["/2023/07/29/数据库/数据库/index.html","c4e21ce6b544501289e4cedfdc078117"],["/2023/08/07/阿里云oss/阿里云oss/index.html","57abf9ce925f88950384876288574240"],["/2023/08/09/登录/登录/index.html","aec4d656da7e1b5f66c1155552df6bd5"],["/2023/08/11/异常处理/异常处理/index.html","d4e172fec626677021bfdd6e9604f396"],["/2023/08/12/spring事务/spring事务/index.html","4ee6a84ba37a411ea0884f0d15a11053"],["/2023/08/16/Docker/Docker/index.html","1b426ffe96a542a2dd34283d11a8ebfb"],["/2023/08/16/bean/bean管理/index.html","a8750a77742ae5381cfd3455677693c3"],["/2023/08/16/springboot/sprngboot原理/index.html","80c0d52886f21eac260a40b816c7a2e8"],["/2023/08/17/maven高级/maven/index.html","059a0ac3cf98f43de67b017dba61b5ad"],["/2023/08/19/java/java基础/index.html","1adfb131d59d0775dba3160ec5f7dc20"],["/2023/09/02/Redis/redis/index.html","86fcf455d0adad5346f2163251038819"],["/2023/09/16/git/git/index.html","263e76417870ded4fb89748beec099b1"],["/2023/10/11/waimai/外卖项目/index.html","ab9815914da8891a49a9f3a352005207"],["/2023/10/24/Redis/存储数据处理/index.html","c63507b4874feb339d8d1b25773167e1"],["/2023/11/06/设计模式/设计模式/index.html","066529b795f41da166ba500f57eddd48"],["/2023/11/09/spring-AOP/AOP/index.html","b82969d3199ea5fe8349ef45427e4ff3"],["/2023/11/12/springcloud/SpringCloud/index.html","f6da52103c0205cbd9f3c9a7308707c7"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","47b15aa4ced6fa19c60c6d465e2c91b2"],["/2023/11/15/常用注解/常用注解/index.html","9d9d69759a8d5879ad0451cf4f41d31a"],["/2023/12/06/概念/概念/index.html","7222817b84f660775defd09080be2386"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","de01f3ceeee57ce09aa4df8cf5a81738"],["/2023/12/13/数据库/mysql/index.html","9a19678dbb48cf71571bb8c56ad2a747"],["/2023/12/21/前端/前端2/index.html","bf1db1599718fa0d61f8fdc1a6fe3b1a"],["/2023/12/24/前端/vue2项目开发/index.html","5dbd9e983102eab876be9c007d768cb4"],["/2023/12/29/前端2/vue3/index.html","7761fed672766d09dbdc23b363dde815"],["/2024/01/05/前端/请求参数/index.html","f4f0ea41ea2c21e88344f581b4cc41c2"],["/2024/01/17/java/java集合/index.html","bb1be5c1d009d25439c3bbc6bfa67f23"],["/2024/02/18/java/java基础知识/index.html","2c40579c9ef337aefa0169aab40a3039"],["/archives/2023/06/index.html","57706276896a5afbaa87dd0b6d627e53"],["/archives/2023/07/index.html","7fc1b4f402fa7ed6f3e0a5da05425997"],["/archives/2023/08/index.html","85314f7a8af90070a7d4bc8b9dd4dead"],["/archives/2023/09/index.html","ab86c330cb3238363f6a49b856de59c0"],["/archives/2023/10/index.html","d7f153afd58d7c868f3487880abfb777"],["/archives/2023/11/index.html","e0ce91650dba097a62fad5b3c2e2b6f1"],["/archives/2023/12/index.html","696df90783bb552edd5f13fe73955446"],["/archives/2023/index.html","e74dce5f3ec1f3956447b21f1bc0382d"],["/archives/2023/page/2/index.html","8e50aa4bc0aabec9d6ba720318ed4399"],["/archives/2023/page/3/index.html","e97696de2f72758733d9a55e5f6ed758"],["/archives/2023/page/4/index.html","9fd65f5d0f6ca6ddfddd21bc118e059c"],["/archives/2024/01/index.html","e4fc0129507e2b9c174f4dd5ab1aaee8"],["/archives/2024/02/index.html","378712e2363a709caf884c76c663f9be"],["/archives/2024/index.html","2548833c1794fb41848be09e602d8e5c"],["/archives/index.html","31f440983bfff8a906f1642bd8eaffa9"],["/archives/page/2/index.html","57f1ad711cb9d4df388928943bb528fd"],["/archives/page/3/index.html","8ddc3a0eedfc20d29fbccd18a5c93693"],["/archives/page/4/index.html","083a9701c8e44b772e2e5a4c3fedf76c"],["/categories/c/index.html","1dc86952cae11523772f7cfaccd13d12"],["/categories/index2.html","121ae78d2b926d18a6715e2d7011e388"],["/categories/python/index.html","f3730622425238b4bdd0ab5cd866892e"],["/categories/前端/index.html","db7770b2a93b2ddadf15f3d72d4d6b7a"],["/categories/数据库/index.html","6f6447367ae91b7859c6aa1d9d0af018"],["/categories/设计模式/index.html","edb6c6eecf94d7da5cc6199860b2fc97"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","091601da5662321451d718eb91da5817"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","f3b42daac3f5e16b60564432c8f406a0"],["/page/3/index.html","33a44a38404a2d34140ff4bf1c07e3ac"],["/page/4/index.html","eee572ac5fcdecd3d1bce94d580ea7e8"],["/sw-register.js","a815da4f2c070ce8bae373b58926bd71"],["/tags/Golang/index.html","8beb88bd185d2b98d8dba113e42356c1"],["/tags/c-服务器/index.html","1db9041790f55139d6e712747500e1de"],["/tags/c/index.html","072d6a20612b3aeda810b8c8f21f633e"],["/tags/index.html","f46461bb9092672b55dbec7fc4705b8c"],["/tags/java/index.html","4852dc4a81a8719114b89119bc18d78e"],["/tags/javaweb/index.html","7257c4381041d7e2a1c2883b20539ca5"],["/tags/springBoot/index.html","5b7f2437345f4a67983c794a0b70d056"],["/tags/web/index.html","24007d2923fe096c56d27ebc1944e1bb"],["/tags/前端/index.html","a13e1a7fbe564945b48f335885b2be50"],["/tags/设计模式/index.html","2992d94b3bd17311272fa35754fd1f3a"]];
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
