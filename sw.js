/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/26/redis/redis实战/index.html","3ac27cf3da2850d9c22ed88aa094f105"],["/2023/06/05/c++STL/index.html","1cbeb73c552dc30c82e04ae229d30349"],["/2023/06/05/c++基础/index.html","b213993ebc032fbe78b842ff588d9208"],["/2023/06/09/sort/index.html","4f1431557ff13c4c16dc5e844d2bbe05"],["/2023/06/14/epoll/index.html","8b7326f2eb1410e5b405cb76742c1bec"],["/2023/07/07/服务器开发模式/index.html","b99ddc050e369d47e4841d34fd67ee90"],["/2023/07/08/python学习/index.html","b13d732e805cf8c01032347c18ed71bb"],["/2023/07/11/网络编程/index.html","363f022a35c1a7b7ccf6484ad16dabaf"],["/2023/07/20/vue2/web知识点/index.html","608a4b45df5abe17789de78206f6e8e7"],["/2023/07/23/vue2/前端/index.html","6a43d2986628aa60c9b67e48cd577cab"],["/2023/07/24/javaweb/后端/index.html","bedc08b183d079a0d9cbe09eef2e1ace"],["/2023/07/25/Golang学习笔记1/index.html","4979d859b82f9ac855c26637d159b74f"],["/2023/07/29/MySQL/数据库/index.html","f36a6e4dd38f0f87e1de7a11980ab5d9"],["/2023/08/07/阿里云oss/阿里云oss/index.html","57bf2868832b7612d049da9fc5c593f8"],["/2023/08/09/登录/登录/index.html","eb181a3c051b925a329b5222dd77ab9b"],["/2023/08/11/异常处理/异常处理/index.html","1e68b14113ecda7d0a691db1acb4aa08"],["/2023/08/12/spring事务/spring事务/index.html","cd02b55476c678c27ecb9a64b153ec36"],["/2023/08/16/Docker/Docker/index.html","b117c736cd912d348abae5cf3d367467"],["/2023/08/16/bean/bean管理/index.html","16a78ef9d288708c976f5214275f830a"],["/2023/08/16/springboot/sprngboot原理/index.html","12ba91e1f5e3995a906369740550d951"],["/2023/08/17/maven高级/maven/index.html","6e9543d502494ecea2429c486dc02b68"],["/2023/08/19/java/java基础/index.html","eda8284d22a7d48316e4d508778de018"],["/2023/09/02/redis/redis/index.html","443261a1492391ddafa9fd2a430229fe"],["/2023/09/16/git/git/index.html","5b08d0a8804275a15a895f5a155893e7"],["/2023/10/11/waimai/外卖项目/index.html","979958bd83c7f698cb6c526509958dd6"],["/2023/10/24/redis/redis数据处理/index.html","c8f10ff2b80e959252d1be82513b38d0"],["/2023/11/06/设计模式/设计模式/index.html","c4bd9942ee673f109c943a185adb75f6"],["/2023/11/09/spring/AOP/index.html","f82cfaa882e9630d847fa6f22c5e909e"],["/2023/11/12/springCloud/SpringCloud/index.html","3854a8242ff2b5bb3907f207af8cdad9"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","7b717df70227892baad92df2743adce0"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","224c26d03e3050eaa50b764cd767032b"],["/2023/12/13/MySQL/mysql/index.html","69200e064d26425d0f7b482f83bc0354"],["/2023/12/21/vue2/前端2/index.html","ac5a486470ab79ac06695732e206942a"],["/2023/12/24/vue2/vue2项目开发/index.html","ad272dde21545c072cf88a091774d430"],["/2023/12/29/vue3/vue3/index.html","f83987038ffba942198aacd0342bf695"],["/2024/01/05/vue2/请求参数/index.html","942005d991f8096412cf20f05eec1aff"],["/2024/01/17/java/java集合/index.html","f7e11cbcb4c0a311057f82da5ac413fb"],["/2024/02/18/java/java基础知识/index.html","8a5db21c93af9fb1d78c6768f6d9c945"],["/2024/03/06/redis原理/redis原理/index.html","7740fab692d098a2cf4b14b88f7358f1"],["/2024/03/09/日志/日志/index.html","4d11bc583a6c82b755b722e040b41e6c"],["/2024/03/13/Mybatis/mybatis/index.html","1ebc4332a0206b89f38e77671dfbbbd0"],["/2024/03/14/API接口文档/API接口文档/index.html","fbddb27f00e8fbd07fb0dad36370cd5d"],["/2024/03/16/RabbitMQ/RabbitMQ消息队列/index.html","e9bf4eeea151cafc24dbdd268c8dd78a"],["/2024/03/19/项目/新闻项目/index.html","1ede3cd21bb8cb9453a924f02a319037"],["/2024/03/22/常见报错/常见报错/index.html","55b13ff00454e99e212910edbad25c60"],["/2024/03/28/Docker/docker部署/index.html","fe033d54b445f3fa21c4fd2882e2bb87"],["/2024/03/31/ElasticSearch/elasticsearch/index.html","9dcd6f340415eabd412fff9406b84b65"],["/2024/04/07/使用技巧/使用技巧/index.html","7051c94afca7aad920ff750c4d26ff68"],["/2024/04/14/前端项目/前端项目/index.html","b4bd796bcb699d22b4a9ed7261cf5669"],["/2024/05/13/部署/项目部署/index.html","d1e4fcb16bd161547f390f94ce40af3e"],["/2024/05/20/spring/bean管理/index.html","378fa04f6553b3c9fcbbd367e6472d53"],["/2024/05/20/spring/spring事务/index.html","f5839982396e7a14349748d3a0bdc0a3"],["/2024/06/24/测试/测试/index.html","99798d7af63b5d1894d95a1e60120451"],["/2024/09/02/Git 77da1de463e94f438abb6499e3e38715/index.html","b2b21ae4416adc4a1b7d3f819e0bdd59"],["/2024/09/02/Linux 0bb79742d9114f07bcf8417acb03cde7/index.html","76f6a43f8cc0a341a7a81e3918a2a5f8"],["/2024/09/02/PXE a20abd42a2df4c9d9a455c6c19e51b67/index.html","28abfce863b37c241d70b99e06f3efa0"],["/2024/09/02/Python c0a8943996074a71b1b572f822ddc4e3/index.html","ed60dfec9c5c0ea3cb1f947ebb4316cb"],["/2024/09/02/Regex 4047bfcf718346bc845e31e4a8ad6abd/index.html","5c9baaa7f20e2a671c24604b2030e8e6"],["/2024/09/02/Shell 30d187a8c878417bb11bc9c65960e13d/index.html","6384909cf423e4d3d4b658318795605e"],["/2024/09/02/项目 34fd01b2ad2740c1a06cc6427117d78d/index.html","e5c66f53b4059267d9341386b0910675"],["/2024/09/04/Test_Plan d4d9fdf7b08f4b588900d5dbe31493f3/index.html","b747eec14feff2a4739ed9855e02bb21"],["/archives/2020/03/index.html","14674f443cf4c7587c09c7572d891488"],["/archives/2020/index.html","a486cadf8f2263c0aa76ef8a747c2fee"],["/archives/2023/06/index.html","f9b17aae36c872f35b0e18975fe9307f"],["/archives/2023/07/index.html","6d80af65520319181a745898f4d6b16a"],["/archives/2023/08/index.html","55971d1996a9e64645cff78f4cbdd243"],["/archives/2023/09/index.html","1576c63dba2f2ea999ba0f942ead1504"],["/archives/2023/10/index.html","b448253c938f8daf62c9dd7af60ad270"],["/archives/2023/11/index.html","baef72d852694feccc9ab6db7ffe5867"],["/archives/2023/12/index.html","049450dca6797b5248d4f1d3f63b8121"],["/archives/2023/index.html","af65fcc301280e55a515e77b8f05e7c6"],["/archives/2023/page/2/index.html","d1287d92318fe8b57855778998885734"],["/archives/2023/page/3/index.html","a9523a28ffcc0072158ad91eaa7eca7c"],["/archives/2023/page/4/index.html","014e467060f2f878ee11d89cc5ab40d4"],["/archives/2024/01/index.html","10b5541ccc526015d262fa922179954f"],["/archives/2024/02/index.html","61f06d2f7af4ba2e3552325896c29505"],["/archives/2024/03/index.html","7545f7917d5fdcecaa1e6dc4c44c655b"],["/archives/2024/04/index.html","70c8ad5c0c873234b4bba34339a7ffe8"],["/archives/2024/05/index.html","2d07b17f9818ef716312887ca9366bee"],["/archives/2024/06/index.html","26cc396e0e6eebdcc044f47d3531b005"],["/archives/2024/09/index.html","73e6d19f0e75ec1d9e278cb9a4157590"],["/archives/2024/index.html","346c4aee185f54eff1b4522921b583e7"],["/archives/2024/page/2/index.html","adb20a55a9d8bfd8f9bbc4feeba0cc5a"],["/archives/2024/page/3/index.html","465bdfcbc48ffe062b502e80acf197a6"],["/archives/index.html","add34e06ff240bd1b5b68b8b9398d3d2"],["/archives/page/2/index.html","6abcb89b1615fe78840385c3cc188c66"],["/archives/page/3/index.html","e5c9c39e970f9f77add3b3ce84f75587"],["/archives/page/4/index.html","8fb5c23bd11314204e5d344a8db00834"],["/archives/page/5/index.html","6b570c5db22e7e4e3a077cb1eb705095"],["/archives/page/6/index.html","4211e428ce3dc96f428c9f5a04dd54e7"],["/archives/page/7/index.html","a66454d50e4bfb966a2ce99c19c166ba"],["/categories/c/index.html","ba701619b3c6f99bb54169e54612481c"],["/categories/index2.html","0e707bb2098f9ce3624724ee008c8e78"],["/categories/python/index.html","10c8927ee3ef6188879a193c522e7dca"],["/categories/redis/index.html","3f4c765b0ee6559826b006a70b0f0ecd"],["/categories/前端/index.html","954924886105219820fa139a539f7451"],["/categories/数据库/index.html","51e47795359b4e0059ea6d94d6cb2c70"],["/categories/设计模式/index.html","22b6c2a4c8a6014363e595582a681549"],["/css/index.css","4eb6070c94ede448133ff47cf1e6aacf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/2.png","2d373250ca1f547ec637e1d0b5237f07"],["/image/avatar.jpg","2d3e7230f0eea4e5aaf4005ccea61640"],["/image/re0.jpg","4beb18f89c45a7ba57771b56241af574"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7664ee2c9cf660a76df63a9afb04d84b"],["/js/main.js","c1abc98ff6aa69f598f43b8604fb7b3e"],["/js/search/algolia.js","5e2a2c65f28bddbb3d94529453e91716"],["/js/search/local-search.js","2e3ff3d156bb208f752d95375ebca557"],["/js/tw_cn.js","fd395fc3b4df9c7da17e730d173cfbea"],["/js/utils.js","2fd35bd141fd541a188ef52dd30108d5"],["/page/2/index.html","d6b3780e213aef04dfc6d6ef97f0f0dd"],["/page/3/index.html","1507c2c092da76ef38a928faea1a99c5"],["/page/4/index.html","42e1e023c6949ee181c315ebda550760"],["/page/5/index.html","7bbb90d7d12b2983bdd91e7a112371b3"],["/page/6/index.html","7a00a40e11f19117a29d493808f6e33e"],["/page/7/index.html","98f559a4c1340d840338aa10e7f07092"],["/sw-register.js","d6d8fa1c31a7194fef1ef8ba7fad0dd5"],["/tags/c-服务器/index.html","6a4a296153d16796ec2f398a470bffa1"],["/tags/c/index.html","b72e91972c09ff8da1f5369f7971852e"],["/tags/index.html","fefe1c14a98e0a57d0882eba39160ddf"],["/tags/java/index.html","b5c1859172e98fb91c4e0c0160562598"],["/tags/javaweb/index.html","a007a78b808a09e2b7b7380f84ba6306"],["/tags/redis/index.html","1c27c75a1cf4e477525c64fdcaf791cf"],["/tags/springBoot/index.html","2e1091b1e6ef6ca80047be31a4f73276"],["/tags/web/index.html","358bbafeb8ba4b8e4762a386a2268340"],["/tags/前端/index.html","9a0c93878fa43c63dad23f346a24b31c"],["/tags/数据库/index.html","e887cb9fb50995a3b585d82d6ba01e91"],["/tags/设计模式/index.html","220d7b84b32d4c7ae55257a626a29c36"]];
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
