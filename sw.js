/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/26/redis/redis实战/index.html","e2fd50a375a7a8b5d75721a79edf0494"],["/2023/06/05/c++STL/index.html","b7ef93629e4cce7ee074a010afa1fc92"],["/2023/06/05/c++基础/index.html","b0fc935fdd4581d5054ec7ec9f5f2e6a"],["/2023/06/09/sort/index.html","f7adc572fc2590db66a291a02eed98ea"],["/2023/06/14/epoll/index.html","bd4c5da913fa1e97431a0f3c2564b434"],["/2023/07/07/服务器开发模式/index.html","d4228d40af91ac3c2cfbaec23dbce360"],["/2023/07/08/python学习/index.html","974d8a8503f54c3d219f8cb79cbb150a"],["/2023/07/11/网络编程/index.html","61724952482527864fc39424dc8881ab"],["/2023/07/20/vue2/web知识点/index.html","f273d594ba1f67c825813086b7733b15"],["/2023/07/23/vue2/前端/index.html","379d63063d666fcbcaca6690d0e1b06b"],["/2023/07/24/javaweb/后端/index.html","050d7ee221b8f4a80106164769f2d1ad"],["/2023/07/25/Golang学习笔记1/index.html","f20fe3dfb08336e2b20ff224ed81ea00"],["/2023/07/29/MySQL/数据库/index.html","88a9961b686c843eb9f59c604b93d040"],["/2023/08/07/阿里云oss/阿里云oss/index.html","2912cca46d5051bb3fcac7164ffe1fe7"],["/2023/08/09/登录/登录/index.html","4ff6b72d87b13993dbfd4cf77f2863c8"],["/2023/08/11/异常处理/异常处理/index.html","fd62c0bd8348f37ea73291cc4760ab5d"],["/2023/08/12/spring事务/spring事务/index.html","eba9042454156fca3aaeb254fc4d7773"],["/2023/08/16/Docker/Docker/index.html","1b7fe7e6bd0389f287ab7c15923dc298"],["/2023/08/16/bean/bean管理/index.html","c202a973c44ced1a6c6b933aa87b3e92"],["/2023/08/16/springboot/sprngboot原理/index.html","5cae60160e6d72d776690b2105affb4f"],["/2023/08/17/maven高级/maven/index.html","c89f14b073d1e607840d19bc9c5d79ed"],["/2023/08/19/java/java基础/index.html","3a785171ce62e3de4cdd637fc44277f7"],["/2023/09/02/redis/redis/index.html","556ec66c27703bf67b7652d4c213f45a"],["/2023/09/16/git/git/index.html","d4f7822c6e7203894a1a16ee5f607715"],["/2023/10/11/waimai/外卖项目/index.html","7e0bc9ca3b71ddfacaf05ef7361d6117"],["/2023/10/24/redis/redis数据处理/index.html","3465f896975264d3af015a9c0914aab7"],["/2023/11/06/设计模式/设计模式/index.html","20b603b8f0e82c4d8fea81525290369a"],["/2023/11/09/spring/AOP/index.html","d63e5fa4aa0da52a33bd94186885db47"],["/2023/11/12/springCloud/SpringCloud/index.html","011a4b1d70c3884ad4c3d335f7d23d91"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","0b5a9b10b8fa1d9b4f194d3cdc502cf8"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","7a9334dd2ba50d079ecaa1f4e91defab"],["/2023/12/13/MySQL/mysql/index.html","7736805928dc553088ca5cb1307d39cb"],["/2023/12/21/vue2/前端2/index.html","40c55cbe90da8f84842f8a4a60faa761"],["/2023/12/24/vue2/vue2项目开发/index.html","c9e1f1d8d1c49ce8d2fccac28b8ac58a"],["/2023/12/29/vue3/vue3/index.html","55c7ff07866d6cc361f5ea4bdfe72ce7"],["/2024/01/05/vue2/请求参数/index.html","7405d667847530bc8d19cade6089c344"],["/2024/01/17/java/java集合/index.html","417fa7788ad0cb9080963aa9f8d91e94"],["/2024/02/18/java/java基础知识/index.html","99d3f0d494d9d52f35109d9d82af7018"],["/2024/03/06/redis原理/redis原理/index.html","3428c75a3ab26fe9477a13298b8ebf4d"],["/2024/03/09/日志/日志/index.html","8bbed5846cde39f393462dfea590de12"],["/2024/03/13/Mybatis/mybatis/index.html","716c171d1d8dac74e0b5966b1ebd4b41"],["/2024/03/14/API接口文档/API接口文档/index.html","20e62bb8450fd7c469d24ffd6e2217c2"],["/2024/03/16/RabbitMQ/RabbitMQ消息队列/index.html","c3cfdcbf0f69cc2491bd18abf33f21cd"],["/2024/03/19/项目/新闻项目/index.html","b9f530cef80bc355dfbd7ba7341eea91"],["/2024/03/22/常见报错/常见报错/index.html","3789e64bcfede70e8b0307c8e4b7424c"],["/2024/03/28/Docker/docker部署/index.html","83b790f10fdaecf3a2ccf7f46d8e06b7"],["/2024/03/31/ElasticSearch/elasticsearch/index.html","5f3340f4da4bb248d8d7613a50cbb06e"],["/2024/04/07/使用技巧/使用技巧/index.html","dbb80b5c5ed500546eda2069d9428d9f"],["/2024/04/14/前端项目/前端项目/index.html","e54a8387d420fd10ce6588f8b7e37020"],["/2024/05/13/部署/项目部署/index.html","3b0251642ca2b445530172b8e73d78da"],["/2024/05/20/spring/bean管理/index.html","8cda982090b41c658d0af3dac1ba25d5"],["/2024/05/20/spring/spring事务/index.html","06241efd03150aee38416c1fe0236ddf"],["/archives/2020/03/index.html","ae7e009069737a0f42742b3ab8b416f9"],["/archives/2020/index.html","962252cc324c5918164e1f9d4ce3376e"],["/archives/2023/06/index.html","d590fd0565d91760f4e781a72b1de673"],["/archives/2023/07/index.html","d00d909bc8fc315b93ec7655fdac51da"],["/archives/2023/08/index.html","d5bf0b9f637b7354d66bea0b35901d9e"],["/archives/2023/09/index.html","bb70baa9903f10e7932f6b0e51d174cb"],["/archives/2023/10/index.html","891ebb65578288cb73a3a54065c80c4b"],["/archives/2023/11/index.html","aab245e1470935673a6b24de944d09ed"],["/archives/2023/12/index.html","e214f2dc7528d22c458983fce670b84e"],["/archives/2023/index.html","b30a63393b037512c82a2fa975213e85"],["/archives/2023/page/2/index.html","3a94d9ea75c918b56635bcb63c2c8555"],["/archives/2023/page/3/index.html","6bcee54c088452d980da4b22c8355aea"],["/archives/2023/page/4/index.html","a5b264015be4d477754015b839540eb1"],["/archives/2024/01/index.html","d04bf881ce1edb5f976fe990ac4deeda"],["/archives/2024/02/index.html","fbb564530772b9d8b8f5016fa3544bfa"],["/archives/2024/03/index.html","c472b0e4e76bf1961327c017fde58988"],["/archives/2024/04/index.html","fc9b555beec42f0d6a9dd414719cb556"],["/archives/2024/05/index.html","b5396aa74586415410522f0b83ec8774"],["/archives/2024/index.html","fa5261942a2568c0941cf0fd8cc75cdc"],["/archives/2024/page/2/index.html","d713b2088aa77a4a35083badf0aa36d0"],["/archives/index.html","097ee95f299f7f527c9ca750d6fe5b39"],["/archives/page/2/index.html","215d611aab1358845bfec37f59c89a79"],["/archives/page/3/index.html","7c4ea7988cd0208484aa38d9c5a2177a"],["/archives/page/4/index.html","3badc05d9c3194a49388e21db42caecf"],["/archives/page/5/index.html","61c5af80982a395f4d99a56a5edbd26f"],["/archives/page/6/index.html","f638a1d0ca4f51cba1b94b5c98526378"],["/categories/c/index.html","86af636d769299db88ed488e380635f0"],["/categories/index2.html","768b032137acfef226abdb1f531db2e9"],["/categories/python/index.html","42b2315b2bcb04f722bb767fb86346d4"],["/categories/redis/index.html","47dc0d543721561b383ed25e2665aa2d"],["/categories/前端/index.html","2e6566908670c9ca4f75e6a65bb88d87"],["/categories/数据库/index.html","aed0edc3cb581b2093fc6f88645946f7"],["/categories/设计模式/index.html","e5bf7868b4ac68cff1383f8899e02a5a"],["/css/index.css","b0ec4ae02b756b7bca9db1ffec330ab0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3fe4fe116bf3f3c05b6ccbf035582c0d"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","964539c68beb548ef0681552c91cf032"],["/page/3/index.html","fa4b4d3d94236173feee820b4f64c6a5"],["/page/4/index.html","cedfbe48833697f8d06ee42a504ac21d"],["/page/5/index.html","27a93d39aca877f26403d9b1d7ab5536"],["/page/6/index.html","477bc1d8bba66a36718bd195f1bf33a9"],["/sw-register.js","1c8e88bc4b0fc364b58ba7e05985c7cf"],["/tags/Golang/index.html","cd7a4173936bc2b772ee917bedc24053"],["/tags/c-服务器/index.html","e744c7ef148a69a4845eaf65b0e2163c"],["/tags/c/index.html","9c1b5d7e7920d698fbc0cca4cd695bef"],["/tags/index.html","d066a01dfc5b8b91137f6480eefb62ff"],["/tags/java/index.html","28a5e663cb38a42b26a8a897daee1a24"],["/tags/javaweb/index.html","97d5b9417eedf1ab0b33ffb032bb63a9"],["/tags/redis/index.html","a6e2cabf247517d571ee22a91d6c404a"],["/tags/springBoot/index.html","a8a7c0c2a01aca2216b27688c2521a0b"],["/tags/web/index.html","ede4851f2a329e939a16556635247fe5"],["/tags/前端/index.html","ade33935d8839a8d5693f7894ab277e6"],["/tags/数据库/index.html","e23f98f1f5a803ff2dba13e5c34da4a9"],["/tags/设计模式/index.html","8f8c8348fd05cc2f32f43d6bf44782bf"]];
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
