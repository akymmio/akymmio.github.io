/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","61dfd2046838724ca366476100ab2907"],["/2023/06/05/c++基础/index.html","2c3de8143a1791850249f12a6a63f63a"],["/2023/06/09/sort/index.html","74cc35d71bd4fcd6d152a7e8603f8871"],["/2023/06/14/epoll/index.html","a54d84131e5fbb6b534723c2b5ade677"],["/2023/07/07/服务器开发模式/index.html","5051fac29da30afa372165438fe258b2"],["/2023/07/08/python学习/index.html","9a7e4c8f884c88249210f0efae70d133"],["/2023/07/11/网络编程/index.html","92248fc760d794a65aa4a3b05eb1bf11"],["/2023/07/20/前端/web知识点/index.html","26fe5e84b365732f5ed3ac341bda5931"],["/2023/07/23/前端/前端/index.html","d404b328ca9e3b7303d6e0aa1a0d5b35"],["/2023/07/24/javaweb/后端/index.html","5587af16bd48cef509e5fa34e61a35c6"],["/2023/07/25/Golang学习笔记1/index.html","a7fdb3dbc4922c7747030cff5f27948f"],["/2023/07/29/MySQL/数据库/index.html","0bf75d252013d4b2b1cc7e0ebda2efaa"],["/2023/08/07/阿里云oss/阿里云oss/index.html","7cd8a79549cc38c5fc36b627d6316fb6"],["/2023/08/09/登录/登录/index.html","e4bb0bca99e1854b432100ef14e1e4da"],["/2023/08/11/异常处理/异常处理/index.html","5b3d1adf137238dd4dd0db91a5aa148a"],["/2023/08/12/spring事务/spring事务/index.html","9aeca49b60aaf13170421eaf52109e73"],["/2023/08/16/Docker/Docker/index.html","176874f2572b97ef1074c007b5de3f2a"],["/2023/08/16/bean/bean管理/index.html","3b9b90bdaaef9e51cf956c6afc948c7f"],["/2023/08/16/springboot/sprngboot原理/index.html","6cccb2302b371c57a410b7f836bebb33"],["/2023/08/17/maven高级/maven/index.html","2d6105740860fc626cbea33dd1e592d3"],["/2023/08/19/java/java基础/index.html","1b998f9a9911f5462050fb7f4217e8b3"],["/2023/09/02/Redis/redis/index.html","e940ffcccbb1642ab74b59cfd7491845"],["/2023/09/16/git/git/index.html","b1793aab2706de96d01bc6885d3770bd"],["/2023/10/11/waimai/外卖项目/index.html","1f6da8789909379ef6361ac3086d4ed0"],["/2023/10/24/Redis/存储数据处理/index.html","9d20bb6873de1683cad43f2cabfe73aa"],["/2023/11/06/设计模式/设计模式/index.html","5ab74f7fecd4ec70c6221f9947652040"],["/2023/11/09/spring-AOP/AOP/index.html","c8f36089888b78a2bab11ae6b05cb01e"],["/2023/11/12/springCloud/SpringCloud/index.html","fcdba89e6cae67e66e7984cf6cfc8f80"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","68673fc343c390f534221b7fce017fe1"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","725d22f793bd5779a808775c61e7a118"],["/2023/12/13/MySQL/mysql/index.html","5ab7a2e50d0443cf935f9803f0eb07e0"],["/2023/12/21/前端/前端2/index.html","a3ee134aa5433dfa4eeb57c6677dabd3"],["/2023/12/24/前端/vue2项目开发/index.html","fbe62be49fa65d14666913c9f6577555"],["/2023/12/29/前端2/vue3/index.html","4044c0aba4eff94d531d82d3b65b68c4"],["/2024/01/05/前端/请求参数/index.html","bdff212bd352b498847d102eb3832b31"],["/2024/01/17/java/java集合/index.html","0910808586f67132b33c6d33d0d734ae"],["/2024/02/18/java/java基础知识/index.html","53e3be13757ab8e9f26ca229e83ab2e7"],["/2024/03/06/redis原理/redis原理/index.html","3bc7845e7f8947623705611bb5c91685"],["/2024/03/09/日志/日志/index.html","0d817ba35cf100e1a8d0d8075af19e49"],["/2024/03/13/Mybatis/mybatis/index.html","c539574f68772517046b51a06aa20bfa"],["/2024/03/14/API接口文档/API接口文档/index.html","a254a812c00b9aa78c8d0f613b19a9d0"],["/2024/03/16/RabbitMQ/RabbitMQ消息队列/index.html","70921ba14f90e9d0f1412111fc60468b"],["/2024/03/19/项目/新闻项目/index.html","f258ec16a1e40b9bcff5069b8773849c"],["/2024/03/22/常见报错/常见报错/index.html","6c1b87e41f28351256e83c16fe8bf143"],["/archives/2023/06/index.html","1517de1efd2b0aad9eed01b56f86cf61"],["/archives/2023/07/index.html","e49d0f7c404061100dd576d9cc27f570"],["/archives/2023/08/index.html","b59c3c886a2068dd4c3ba8bb96ddf73a"],["/archives/2023/09/index.html","2d85a82efea518b9a6670346b7befd37"],["/archives/2023/10/index.html","bf34465968135a8d5ee8ac5b8e1ada0b"],["/archives/2023/11/index.html","64327873193d5b7ed1a6e0fd06017c27"],["/archives/2023/12/index.html","bfcc23c75e5f069718cf36329ee36cc2"],["/archives/2023/index.html","ab3e3420574abb97248b52bab0364d57"],["/archives/2023/page/2/index.html","b858bbc22a2696cd8ddf36369374b049"],["/archives/2023/page/3/index.html","087691401a9f57a343dcdbd80c367d46"],["/archives/2023/page/4/index.html","63fbb8d75caf6dcc35662d469ae91d38"],["/archives/2024/01/index.html","cd6e6982e0fdc0cf9c01cb336d8be5ff"],["/archives/2024/02/index.html","7995b4b83d75d0f3dc61b02c3154225a"],["/archives/2024/03/index.html","2e874f7d53eb0048a41db8a7f3077f3d"],["/archives/2024/index.html","31048a5a9498099311034dbdfd3147fd"],["/archives/index.html","d620dd2296d4f7e067316469ef4bd14b"],["/archives/page/2/index.html","2d3aff90da107fba00ca876c074faa6e"],["/archives/page/3/index.html","87e517aae6432ad209813a7a07f3a5ec"],["/archives/page/4/index.html","bc9add32e510bd0b5555da5e15b98dab"],["/archives/page/5/index.html","d1e67948b092959df62f96a90e658956"],["/categories/c/index.html","0b6d9cf712f92d893d070d2d9b4c2753"],["/categories/index2.html","e23c6ccf8288f6404c9f119dcf50cbc4"],["/categories/python/index.html","4c2f91ea0b99037eb053f8bd02e540f1"],["/categories/前端/index.html","48af2f48216f6a2bc1f764f0bc747051"],["/categories/数据库/index.html","6324e281a8118b4816681fa7fdf95eb8"],["/categories/设计模式/index.html","d630df89a91129d64fea5242e0f206df"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b049fc4ab44977b8187bbf0a22fc7ea3"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","564fee93391b09abbef00a3c6089c31f"],["/page/3/index.html","73a1ca1153480150d4ae4a09b132e890"],["/page/4/index.html","4cd4a7ddb58090d41d320d477ab143f5"],["/page/5/index.html","4a99f070c4d4c6040d93246a0cf22d03"],["/sw-register.js","7af8f47cf00265649f4a0b04fae5e884"],["/tags/Golang/index.html","8295dd018e80fb163bf46919f248237f"],["/tags/c-服务器/index.html","65d355e65c6b8044174685d52a923f52"],["/tags/c/index.html","a346ccc8b827a945332bdc87ca326eb0"],["/tags/index.html","bbf0cae42aa0fab8402c048f354477ca"],["/tags/java/index.html","e8f490e976c11ce7cf04396c7a0e1fdd"],["/tags/javaweb/index.html","fbb57a68caae2532de134dc8e2a0cb2e"],["/tags/springBoot/index.html","96d50b249aadf0298f236bbd3eb31338"],["/tags/web/index.html","ea8c81c4847897186e1574b03b7e351e"],["/tags/前端/index.html","f10c793a8b88ab846141544a1c666a43"],["/tags/数据库/index.html","412ff9cf48d15b465175de8314ba14fe"],["/tags/设计模式/index.html","8072e7761e1f866f7ff186baa66c96aa"]];
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
