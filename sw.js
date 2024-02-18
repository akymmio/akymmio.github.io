/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","5bc5fc35f73138c8367db0e2d9060f91"],["/2023/06/05/c++基础/index.html","87993134bd18f240991cacedcf9369b8"],["/2023/06/09/sort/index.html","3414ea7de04f070409f4a77177cb54b6"],["/2023/06/14/epoll/index.html","670866cbb6e47f06ed0b1f919e7066aa"],["/2023/07/07/服务器开发模式/index.html","f32a9757c8fcf9dd13a558ff7cf6fc5d"],["/2023/07/08/python学习/index.html","c4b9f74b91eb62a38c4c9fd5673f9268"],["/2023/07/11/网络编程/index.html","10d6ec971015a1757670d3b696e824bd"],["/2023/07/20/前端/web知识点/index.html","ba0e01b2f7ef7ade6669ecc83cb498ae"],["/2023/07/23/前端/前端/index.html","ebe9c467474a53fb0c734eee43b1215b"],["/2023/07/24/javaweb/后端/index.html","e29a7d19433c740fceb92877fd2b5da8"],["/2023/07/25/Golang学习笔记1/index.html","03db6c73e5dc8eb8cf82df42d8fe5091"],["/2023/07/29/数据库/数据库/index.html","61b4d8d98df1073bf7553cac18640933"],["/2023/08/07/阿里云oss/阿里云oss/index.html","1e4d2913eb4e97fc5e123087868cb7f6"],["/2023/08/09/登录/登录/index.html","195ef83bbfd106629f53a453a34dd7c1"],["/2023/08/11/异常处理/异常处理/index.html","08201b3c0a66fe2a451d680e8eb0f055"],["/2023/08/12/spring事务/spring事务/index.html","e7c11f9d49b8f5d1578cce5dc629dbb5"],["/2023/08/16/Docker/Docker/index.html","68af42711f365af555d253209ccd5d56"],["/2023/08/16/bean/bean管理/index.html","3d9db0fbb710aec44298681e9ffc88da"],["/2023/08/16/springboot/sprngboot原理/index.html","8d63c692bcaf4e3a2a58be4e66f75fef"],["/2023/08/17/maven高级/maven/index.html","bdab48864e2b11d75baac38c1b65227c"],["/2023/08/19/java/java/index.html","0b30f047164a4e079f423582c176328e"],["/2023/09/02/Redis/redis/index.html","f0a87fa56df154be077fa26753d7b89d"],["/2023/09/16/git/git/index.html","a193a8ef8818c1ae91d7e19db857ebd9"],["/2023/10/11/waimai/外卖项目/index.html","d6dedea4e29c9036ee5975f1cd28f4a7"],["/2023/10/24/Redis/存储数据处理/index.html","8bbd4b849bd1b161121aaa0e8c53d4f2"],["/2023/11/06/设计模式/设计模式/index.html","f0373c7cb66644503ebcdab901338127"],["/2023/11/09/spring-AOP/AOP/index.html","64a27da690013e42c84a18b722b7e127"],["/2023/11/12/springcloud/SpringCloud/index.html","ce40b5298c731e7f57fd74cb6b733796"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","8fb129d081c9343c5b8542d6c5e08ff0"],["/2023/11/15/常用注解/常用注解/index.html","531dd34401e304aaad24521b83e1c96e"],["/2023/12/06/概念/概念/index.html","d5773aceb0cc23272d6e4ebe5cba921b"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","2e2fa362fd85454398a9393c3894d29e"],["/2023/12/13/数据库/mysql/index.html","c156d3a3ab6b75be1a64674305b0e5b0"],["/2023/12/21/前端/前端2/index.html","60805b7cd2f2cca77ae06c30e5ecae22"],["/2023/12/24/前端/vue2项目开发/index.html","be07e73d692498b976bf4a581bd81617"],["/2023/12/29/前端2/vue3/index.html","5cd5fc3d5eb615b9760909d18e185585"],["/2024/01/05/前端/请求参数/index.html","e527483fe73b4a0de8486fea8ca3b539"],["/2024/01/17/java/java集合/index.html","1010095d738707d2a0d071304967eb7e"],["/archives/2023/06/index.html","90fdae813cc1be9ee72271e9130cc416"],["/archives/2023/07/index.html","b2a2729b9d66618380c4e6df944e1853"],["/archives/2023/08/index.html","3a2c6bfc12ed895eb52d12b217275bd0"],["/archives/2023/09/index.html","64ba7e33cb7418d764ba0947a231fdc3"],["/archives/2023/10/index.html","6fd8ab0295fed6a283477dff32ac2ab0"],["/archives/2023/11/index.html","24ef0f5cde32960e9302de6fa331c655"],["/archives/2023/12/index.html","388442f4384e591b90544a952be571a6"],["/archives/2023/index.html","b55db90765fc6108831bc123340f9209"],["/archives/2023/page/2/index.html","9de7725fd5bcf5b3ab0a0aebdc9c377b"],["/archives/2023/page/3/index.html","57515d257b79b3539c99ae9d7c798b6e"],["/archives/2023/page/4/index.html","ebfd8c6760cc091380605420973203ab"],["/archives/2024/01/index.html","06825da12797607a445938452ace0f57"],["/archives/2024/index.html","679f78113e6fc822a49c5972cd83432e"],["/archives/index.html","53e3271086fc82bec5bee2fd423d0529"],["/archives/page/2/index.html","39d46fac86f2b0ffc8b10da8b000e1c7"],["/archives/page/3/index.html","e48eee3bb4172f8997d1f4f9f5122ff7"],["/archives/page/4/index.html","31238754b60afbb5d3f1396002e24d19"],["/categories/c/index.html","ddfadd740a71d6c884ba396358349c27"],["/categories/index2.html","08297d6c7b4e110db45c501ee9e3a209"],["/categories/python/index.html","1e2c9f58cb7008637162f5eeff4cc787"],["/categories/前端/index.html","ee35a356ab13f3fc77469193d89b1a60"],["/categories/数据库/index.html","5eb032549bec773aa2ebdf7b99664324"],["/categories/设计模式/index.html","71673eaf25d7c46722ab99077710bdf5"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","90eb17d7c356bf8a9581bb48e9f62a9a"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","8baf22cbd3ab2bcda516c63aa8ee8af5"],["/page/3/index.html","b9379d2f9665168deecc0d8babb96948"],["/page/4/index.html","ed7f20baee3969848060276d575b8be7"],["/sw-register.js","b2ee42425937f9fb68c22b5f80aaed59"],["/tags/Golang/index.html","8b19ecb3e3922195b977d35e86eec9b9"],["/tags/c-服务器/index.html","f5c8516c14efe50a14d98d93ed953cf2"],["/tags/c/index.html","68520b31a46093a322472129f2345e2d"],["/tags/index.html","0cb5c7ee10b7064ecc314ecb0e112cbc"],["/tags/java/index.html","4ea0797a7aa3408ef322f6a9fb9d5ca1"],["/tags/javaweb/index.html","6ac46ba31616f493ee46bc01f15bade7"],["/tags/springBoot/index.html","beaeda05683e17107a1af979dff38dcc"],["/tags/web/index.html","ea3cc44e379871688c5563703c365996"],["/tags/前端/index.html","d55e2b8aea863ffd19f368c45c89f03c"],["/tags/设计模式/index.html","8dbbf271b845d415ee91be5bca3213bf"]];
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
