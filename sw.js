/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/26/redis/redis实战/index.html","962047bfb88addb09eff68fcd59e41c7"],["/2023/06/05/c++STL/index.html","e80b3be2e8e8fb7bf1478468709ba5e6"],["/2023/06/05/c++基础/index.html","747ba707e7a412214d2ed0d722aa29cc"],["/2023/06/09/sort/index.html","587c3596ca8b7bb25a27b8fc42e11e40"],["/2023/06/14/epoll/index.html","b08078e8295e5147b18e633fbfc4b987"],["/2023/07/07/服务器开发模式/index.html","cae0266ee4c891b203583c32651b287f"],["/2023/07/08/python学习/index.html","e34bd1fe4fced067ef7c0560f8cff317"],["/2023/07/11/网络编程/index.html","3d0f275a5ad503c8504f6927977c6c84"],["/2023/07/20/vue2/web知识点/index.html","711658dbeb80767334806c9efdb86f12"],["/2023/07/23/vue2/前端/index.html","36fcdff0efa8a13c932bfb185a45bbd9"],["/2023/07/24/javaweb/后端/index.html","1cddaf89705601e4c7a5c7f73b988086"],["/2023/07/25/Golang学习笔记1/index.html","35746314acb9c0ec8887ab6949e035a3"],["/2023/07/29/MySQL/数据库/index.html","4564686655c595ac34ec0718e9ac9abd"],["/2023/08/07/阿里云oss/阿里云oss/index.html","f98bcef7b103a18872e4274fbee6e55c"],["/2023/08/09/登录/登录/index.html","505a53205921249748bf1c49f00adab2"],["/2023/08/16/Docker/Docker/index.html","73cf3742ad38274c717acace1bfb4675"],["/2023/08/16/springboot/sprngboot原理/index.html","1b614a09d5f544a21c1066b73b775d05"],["/2023/08/17/maven高级/maven/index.html","9a824510d47f2d28df947f000164982c"],["/2023/08/19/java/java基础/index.html","b9a0f2d1223e8732f8c1767b391e5dd8"],["/2023/09/02/redis/redis/index.html","b04029900923b2780689dba05e1489d9"],["/2023/09/16/git/git/index.html","ad58ce05aaccda782245afa2a18dd64f"],["/2023/10/11/waimai/外卖项目/index.html","60fa90fc985c2a6ecc47ba49833bdc8b"],["/2023/10/24/redis/redis数据处理/index.html","814acca9d38489cfc20b1ab918e51f40"],["/2023/11/06/设计模式/设计模式/index.html","3f740e8d3b1804ae08804bf985238ce5"],["/2023/11/12/springCloud/SpringCloud/index.html","72cd9ea4a468a1e3460689552d767407"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","57b4dd4907dd12061d4ca7b17c3049e1"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","6139f04ac98143b85b9ca1ae5f8a0666"],["/2023/12/13/MySQL/mysql/index.html","430118b8a442c24868b14a5d0c0bd5aa"],["/2023/12/21/vue2/前端2/index.html","5506e5462d0e5d6b2a60b036abfd3d6a"],["/2023/12/29/vue3/vue3/index.html","007b23fe0377dc6da1d24f7985f714a0"],["/2024/01/05/vue2/请求参数/index.html","89ba18ef6f1e414af1fde1bd6e961f21"],["/2024/01/17/java/java集合/index.html","221e5bdcf624e310d1c5205e93d8285c"],["/2024/02/18/java/java基础知识/index.html","d9cdbf2e8a43996a70614381ab72cd3e"],["/2024/03/06/redis原理/redis原理/index.html","d74c9fb8d5de2274dfc611fe277e2039"],["/2024/03/09/日志/日志/index.html","af8565ec336d6430af46220cfc9e0651"],["/2024/03/13/Mybatis/mybatis/index.html","4e5e4e9d6df177c769aaf34c8a6e576f"],["/2024/03/14/API接口文档/API接口文档/index.html","06f3d5f8d1ef808383fa49ae85bd8ebb"],["/2024/03/16/RabbitMQ/RabbitMQ消息队列/index.html","1c4eb6091ec5c0322ae74d2a8ef4b635"],["/2024/03/19/项目/新闻项目/index.html","a93884797013726a725bef0974197493"],["/2024/03/22/常见报错/常见报错/index.html","5b98ab552ca094dcc09599e9f06dd62c"],["/2024/03/28/Docker/docker部署/index.html","dc51911269881b51fea81835dbc71bc6"],["/2024/03/31/ElasticSearch/elasticsearch/index.html","44bcc66d879694e1df36ee7f98832778"],["/2024/04/14/前端项目/前端项目/index.html","6f598eb7c2bb058dfeee036ea768f5e8"],["/2024/05/13/部署/项目部署/index.html","1f7babf9973d9557ca4fa74c07c37233"],["/2024/06/24/测试/测试/index.html","887ad47d7d4d657df1e5ed2345b1e5ef"],["/2024/09/02/Git 77da1de463e94f438abb6499e3e38715/index.html","ecf834ed9445310c35fcdde77752e296"],["/2024/09/02/Linux 0bb79742d9114f07bcf8417acb03cde7/index.html","0d0c536a93f86dacfb07587a4ff2befb"],["/2024/09/02/PXE a20abd42a2df4c9d9a455c6c19e51b67/index.html","79fb5984b0f307e8be5dc7a473d37b7e"],["/2024/09/02/Python c0a8943996074a71b1b572f822ddc4e3/index.html","2fc4be906f4464af662a091c0ce4ea04"],["/2024/09/02/Regex 4047bfcf718346bc845e31e4a8ad6abd/index.html","92fb5c56427edf9075f2a3a13d19f7bf"],["/2024/09/02/Shell 30d187a8c878417bb11bc9c65960e13d/index.html","e334990bd19dacc7a3dfae3046866070"],["/2024/09/02/项目 34fd01b2ad2740c1a06cc6427117d78d/index.html","5c506bf7207de271998f27c50e8e4236"],["/2024/09/04/Test_Plan d4d9fdf7b08f4b588900d5dbe31493f3/index.html","1646b0406c2ca9306b8d40f5116a13f5"],["/2024/09/07/git/Git 77da1de463e94f438abb6499e3e38715/index.html","2ecdb4c761a5dd7d1c7fd471be230477"],["/2024/09/07/spring/springboot/index.html","29d840a3e673387adbaaf778c24494a4"],["/archives/2020/03/index.html","169e2723fa489c05374011872b7185b9"],["/archives/2020/index.html","1165f0f158f3896dea90fc7b2a80b3fb"],["/archives/2023/06/index.html","f25851e49cd68a6ac178ca02d5d031f7"],["/archives/2023/07/index.html","96a800fd3bd47b3869817f6a300f27e4"],["/archives/2023/08/index.html","1b3931ecb659dc80660365a0ffc32d10"],["/archives/2023/09/index.html","50c58df8c9ab934accffb067b78f7dad"],["/archives/2023/10/index.html","6bf34ae8925906aa854a1ca3f8d8abd6"],["/archives/2023/11/index.html","9ebd89bc27f8d0255b8fcd23d3551bd9"],["/archives/2023/12/index.html","a456ac81172d7ad84e698375fee62024"],["/archives/2023/index.html","5a9da8e28ef6bedc1dbfe734bbc2f97f"],["/archives/2023/page/2/index.html","ff87a5a3aa25030d134fe967e759af5a"],["/archives/2023/page/3/index.html","4b74fad527b7305ec1e12b8ed40ac1da"],["/archives/2024/01/index.html","0459593f086caeb1789271de4538fa48"],["/archives/2024/02/index.html","cf4e27132ee834836bb3c81f718cbbaa"],["/archives/2024/03/index.html","798d7b80c9ca3e1c19f84976381d3994"],["/archives/2024/04/index.html","0b9b17f3690a461adb5743a2014112de"],["/archives/2024/05/index.html","a537bb72d0722acf3fee62c7dfe9e1a3"],["/archives/2024/06/index.html","a774f9f7bc229e47ba28f08fe8199afe"],["/archives/2024/09/index.html","eb68c9c559b33b6c87ac0da7ffab421d"],["/archives/2024/index.html","f6536422e07601371910997ad913d6b7"],["/archives/2024/page/2/index.html","577b0e886edacf942af09133a2e8ada3"],["/archives/2024/page/3/index.html","0bec0287c3d1a19037504e30be14d92a"],["/archives/index.html","2ff66e0eb677ff723d3fabc02335ef57"],["/archives/page/2/index.html","b386d47749d1c485e5721ab20c565916"],["/archives/page/3/index.html","0866a78e7bf5f0592f3de09bc9ece1b5"],["/archives/page/4/index.html","4b2d183b4e25993024922f185ee01703"],["/archives/page/5/index.html","01daedcf37808164a72427ed56342982"],["/archives/page/6/index.html","0d5e31e31f531ef064e52ce1fbe1652d"],["/categories/c/index.html","ba00be5e9f2dacb6af025d2a7417fcad"],["/categories/index2.html","001f2cad8fe05b5c1a1db37875783cf9"],["/categories/python/index.html","4edcc09dfcd07acaaca881bb2a7ef5f8"],["/categories/redis/index.html","a36e8bd7d90bd3f7bba826c11067d074"],["/categories/前端/index.html","a3c34cb418e385d39b339d064d338410"],["/categories/后端/index.html","32e303e0fccc887f34edd32114d607d1"],["/categories/数据库/index.html","69a8b55ccc8dca63eced2215bb579521"],["/categories/设计模式/index.html","3737b6d45ba528d00bfbfae594439b35"],["/css/index.css","936345659fdae16950dfe827b5233e22"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/2.png","2d373250ca1f547ec637e1d0b5237f07"],["/image/avatar.jpg","2d3e7230f0eea4e5aaf4005ccea61640"],["/image/re0.jpg","4beb18f89c45a7ba57771b56241af574"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","865d8630cf0862732262e9000cce13ab"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","f49a380e6c8bd6171b401a347252c791"],["/page/3/index.html","57a98004966753f885ca14cb72f50b0b"],["/page/4/index.html","e715e8f563fdfcf596b5db422aff40e5"],["/page/5/index.html","0bbee1e2561468f22a3c2ab4fb65286f"],["/page/6/index.html","5be37511bc338768114db23985e75828"],["/sw-register.js","f4b1681dbe05ddca17454b62247211fd"],["/tags/c-服务器/index.html","65eeef3be2cfee359b99f4bde0286dd5"],["/tags/c/index.html","fa58e02b6e9934403465be333c43ac68"],["/tags/docker/index.html","9a7ba0ebcf720082735ba692b7a3672a"],["/tags/index.html","3186a33beabced3366ace04fc0d88772"],["/tags/java/index.html","b784c3cbf3c11248c0482560d086b557"],["/tags/javaweb/index.html","663bded97a325cf72c87f8f4adaaf1f1"],["/tags/redis/index.html","546d0e60617fcc8230fe4038ea217c95"],["/tags/springBoot/index.html","95d6d4b5c51e172e48e0e1f5dd8b83c4"],["/tags/前端/index.html","1aaaf5e75ff8e5ed181694580a52d555"],["/tags/数据库/index.html","70100294a569068b93e4950d975b4d10"],["/tags/设计模式/index.html","6af514dd4e6adda5907c4d9b5044aa31"]];
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
