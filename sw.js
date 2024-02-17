/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/06/05/c++STL/index.html","5bc5fc35f73138c8367db0e2d9060f91"],["/2023/06/05/c++基础/index.html","87993134bd18f240991cacedcf9369b8"],["/2023/06/09/sort/index.html","3414ea7de04f070409f4a77177cb54b6"],["/2023/06/14/epoll/index.html","670866cbb6e47f06ed0b1f919e7066aa"],["/2023/07/07/服务器开发模式/index.html","f32a9757c8fcf9dd13a558ff7cf6fc5d"],["/2023/07/08/python学习/index.html","c4b9f74b91eb62a38c4c9fd5673f9268"],["/2023/07/11/网络编程/index.html","10d6ec971015a1757670d3b696e824bd"],["/2023/07/20/前端/web知识点/index.html","ba0e01b2f7ef7ade6669ecc83cb498ae"],["/2023/07/23/前端/前端/index.html","ebe9c467474a53fb0c734eee43b1215b"],["/2023/07/24/javaweb/后端/index.html","e29a7d19433c740fceb92877fd2b5da8"],["/2023/07/25/Golang学习笔记1/index.html","03db6c73e5dc8eb8cf82df42d8fe5091"],["/2023/07/29/数据库/数据库/index.html","61b4d8d98df1073bf7553cac18640933"],["/2023/08/07/阿里云oss/阿里云oss/index.html","1e4d2913eb4e97fc5e123087868cb7f6"],["/2023/08/09/登录/登录/index.html","195ef83bbfd106629f53a453a34dd7c1"],["/2023/08/11/异常处理/异常处理/index.html","08201b3c0a66fe2a451d680e8eb0f055"],["/2023/08/12/spring事务/spring事务/index.html","e7c11f9d49b8f5d1578cce5dc629dbb5"],["/2023/08/16/Docker/Docker/index.html","68af42711f365af555d253209ccd5d56"],["/2023/08/16/bean/bean管理/index.html","3d9db0fbb710aec44298681e9ffc88da"],["/2023/08/16/springboot/sprngboot原理/index.html","8d63c692bcaf4e3a2a58be4e66f75fef"],["/2023/08/17/maven高级/maven/index.html","eb0896cd427ae83be7b4b51c3daf9584"],["/2023/08/19/java/java/index.html","fa7838281a7823c8f23c2577dbb3508f"],["/2023/09/02/Redis/redis/index.html","72ca3586fa2927b5e1f4038bd78503e6"],["/2023/09/16/git/git/index.html","a193a8ef8818c1ae91d7e19db857ebd9"],["/2023/10/11/waimai/外卖项目/index.html","d6dedea4e29c9036ee5975f1cd28f4a7"],["/2023/10/24/Redis/存储数据处理/index.html","8bbd4b849bd1b161121aaa0e8c53d4f2"],["/2023/11/06/设计模式/设计模式/index.html","f0373c7cb66644503ebcdab901338127"],["/2023/11/09/spring-AOP/AOP/index.html","64a27da690013e42c84a18b722b7e127"],["/2023/11/12/springcloud/SpringCloud/index.html","ce40b5298c731e7f57fd74cb6b733796"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","8fb129d081c9343c5b8542d6c5e08ff0"],["/2023/11/15/常用注解/常用注解/index.html","531dd34401e304aaad24521b83e1c96e"],["/2023/12/06/概念/概念/index.html","d5773aceb0cc23272d6e4ebe5cba921b"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","2e2fa362fd85454398a9393c3894d29e"],["/2023/12/13/数据库/mysql/index.html","06fbbd0de7e6ad564bbc7f81cc1af300"],["/2023/12/21/前端/前端2/index.html","60805b7cd2f2cca77ae06c30e5ecae22"],["/2023/12/24/前端/vue2项目开发/index.html","be07e73d692498b976bf4a581bd81617"],["/2023/12/29/前端2/vue3/index.html","5cd5fc3d5eb615b9760909d18e185585"],["/2024/01/05/前端/请求参数/index.html","e527483fe73b4a0de8486fea8ca3b539"],["/2024/01/17/java/java集合/index.html","2fd126d9a1de8f27694211edce55039c"],["/archives/2023/06/index.html","2bf507ab64c0d76f9739e9bb164be753"],["/archives/2023/07/index.html","b753a788a6dfcbdadd7a937812f03649"],["/archives/2023/08/index.html","c6e8b676d53bfc797801ad57babcb2e4"],["/archives/2023/09/index.html","0d6160876565ea99084ed92d546c5559"],["/archives/2023/10/index.html","2f4233d16f3dbdec44ea4d450331c6fc"],["/archives/2023/11/index.html","0c06f5ab0401768309844abe9d31da1a"],["/archives/2023/12/index.html","f483c621a9935b96ff2a962b6a1fbcd8"],["/archives/2023/index.html","199032817d77f5d943e0a313fdfb7297"],["/archives/2023/page/2/index.html","aa51b51605046b3c11318f0ca80e8336"],["/archives/2023/page/3/index.html","d20ffdea19f3991ee71da54478c6c99b"],["/archives/2023/page/4/index.html","5e22a553d4ebbd219e176de9b69187c3"],["/archives/2024/01/index.html","ef40a14c4b9787fbfa32ab43a1b8f448"],["/archives/2024/index.html","4425a0b873b9c9fc89ab6acc317bc2de"],["/archives/index.html","fd8af2112049e1fd1f7fbc3d8602a6bd"],["/archives/page/2/index.html","ec85940a8b902883232b367c37e68fc4"],["/archives/page/3/index.html","d6f6a5f4ee1dc69cf92cba175b372973"],["/archives/page/4/index.html","ae43940620a939b7c0e2a2cf2903fac4"],["/categories/c/index.html","7926ee06cb487200c4449b0c620aa76b"],["/categories/index2.html","4b619912b513c8504d1f3d8c5b3f35bb"],["/categories/python/index.html","c1b25f0b981bf19c4d166e4cc1e0ffe8"],["/categories/前端/index.html","a06d288d157262ef9e7fd75baacdfec5"],["/categories/数据库/index.html","c353fc2c5f44787ff300316ab348703c"],["/categories/设计模式/index.html","7d4107203824b4542c20141285cefa6e"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6cf9790904d8b62fcd6705e7c1fc9d6c"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","0471e6b2befaa74654e1d588afc7e819"],["/page/3/index.html","00f5fa7f3301f9edd1589394504a10da"],["/page/4/index.html","bc89569237e04689e5d0a8d461bf2c01"],["/sw-register.js","f699323363234765a4aaf92ce3adfb82"],["/tags/Golang/index.html","86de9f3601fd27abcbf5eef6828c6497"],["/tags/c-服务器/index.html","54c51ac7f8657c0dd9bab8b56c8f2b3a"],["/tags/c/index.html","e4b3fc4fbf67c79a0764dfbd122eb8d6"],["/tags/index.html","1fa5985cd3318c32043eb6a99f5c2b71"],["/tags/java/index.html","a20b279f60f91e4a66f29af8ec3fe79d"],["/tags/javaweb/index.html","fd30ba19474b300cde8f1dcc0f9922ea"],["/tags/springBoot/index.html","e3388b960dafab27a5079cd5dc3912a9"],["/tags/web/index.html","606c3018964595cec95defc5202a339c"],["/tags/前端/index.html","c4f29b54534efdf30514ca29a6e7cc2e"],["/tags/设计模式/index.html","e5dc0fca5705b338dae3fa96f9b4c948"]];
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
