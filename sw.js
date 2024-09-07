/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/03/26/redis/redis实战/index.html","1cf3f850779f5e2bdce445b79968abf2"],["/2023/06/05/c++STL/index.html","0781f51bacd5cd619bd4e8b0f74f40c7"],["/2023/06/05/c++基础/index.html","e2e2e99fe2817703b89ac0c9bd55ba5c"],["/2023/06/09/sort/index.html","afba620d367c3b41f9f4101621160ecb"],["/2023/06/14/epoll/index.html","9380ff7c772345a494b4a95e5d92a3bd"],["/2023/07/07/服务器开发模式/index.html","494d76d42897022b4572c48a00379820"],["/2023/07/08/python学习/index.html","496933093a7b27586413d76d96eb54ca"],["/2023/07/11/网络编程/index.html","2daa1c8504e1bb22c1c27ab387cb6117"],["/2023/07/20/vue2/web知识点/index.html","8f483b1a59be26525995bc8956b5ed87"],["/2023/07/23/vue2/前端/index.html","783721a59d47a135a7c26a80a0cdd2f3"],["/2023/07/24/javaweb/后端/index.html","fceba8c67316b801d4357bed05ccdbc4"],["/2023/07/25/Golang学习笔记1/index.html","69ac8f42fe2511d337dd1037b6f08d2c"],["/2023/07/29/MySQL/数据库/index.html","eef692bcc2e83142be5dddd7dc72ae06"],["/2023/08/07/阿里云oss/阿里云oss/index.html","560ce70c616d7c68d0f24a349394ac8c"],["/2023/08/09/登录/登录/index.html","de7cab796f69a70c17fe6ce9567ab6ab"],["/2023/08/11/异常处理/异常处理/index.html","46a9e508fb8dba58bb9a658e4300addc"],["/2023/08/12/spring事务/spring事务/index.html","8826d72f9ab1553598ddd60cf6a38d9a"],["/2023/08/16/Docker/Docker/index.html","902b7b64346ca8cf1c31b5c793eeae7f"],["/2023/08/16/bean/bean管理/index.html","91bad9f34937599cb3f2c68972f05877"],["/2023/08/16/springboot/sprngboot原理/index.html","b445d255297b6ce5a78f23edd7b805bc"],["/2023/08/17/maven高级/maven/index.html","7ac0d0bd63f539a51c0946e2bf78b560"],["/2023/08/19/java/java基础/index.html","75f710362d4dcb60e85bd19f420cba73"],["/2023/09/02/redis/redis/index.html","2cb6901e34e9e534918a9f90f2eb4e7c"],["/2023/09/16/git/git/index.html","2662143b7ee26914ed2dc0af83015703"],["/2023/10/11/waimai/外卖项目/index.html","0a8df61e6e8e70cad036abf914c7854f"],["/2023/10/24/redis/redis数据处理/index.html","27e7861d4d46349747fc51e734871a82"],["/2023/11/06/设计模式/设计模式/index.html","e80fe2b35f04a692c3d9c490cb1cdb81"],["/2023/11/09/spring/AOP/index.html","e7315b0b428ea31c8981510551d3ab4e"],["/2023/11/12/springCloud/SpringCloud/index.html","8ae8b6b944b5476178e7529fd4a9beb6"],["/2023/11/13/mybatisPlus/mybatisPlus/index.html","b5d5415235763b971afdd56568cc617c"],["/2023/12/09/RabbitMQ/RabbitMQ/index.html","3508140a1078b29f417f0da0c79ab196"],["/2023/12/13/MySQL/mysql/index.html","fb6d27e671d915b12b94dec283192907"],["/2023/12/21/vue2/前端2/index.html","469bf256750454c57e6106d3a40eec98"],["/2023/12/24/vue2/vue2项目开发/index.html","70f28e114582ddbf966bc0a8b1ce8b35"],["/2023/12/29/vue3/vue3/index.html","42d3123d6dce60caa27035e8bcfd7763"],["/2024/01/05/vue2/请求参数/index.html","9002ce46783628e54dc3c726107ec64b"],["/2024/01/17/java/java集合/index.html","26c16065702f552912c9e9e38c1e3cd9"],["/2024/02/18/java/java基础知识/index.html","02dd93c96c9bc86da3c6ba9f4ee11059"],["/2024/03/06/redis原理/redis原理/index.html","664292d8503dccce92b00c06111038c3"],["/2024/03/09/日志/日志/index.html","4910b28d01f651097944d2cdc3ba9fda"],["/2024/03/13/Mybatis/mybatis/index.html","81a6b673c73e7d8884d560ad6ac34e98"],["/2024/03/14/API接口文档/API接口文档/index.html","dce6604a32efca271c2c8667b720d80e"],["/2024/03/16/RabbitMQ/RabbitMQ消息队列/index.html","ec8aa7cd73afb2a6757509251c7d0add"],["/2024/03/19/项目/新闻项目/index.html","f401436d74a13cf2fe1c543b04428475"],["/2024/03/22/常见报错/常见报错/index.html","156a35e1b109a7e59582badce08eeb0b"],["/2024/03/28/Docker/docker部署/index.html","14e438fe01f072bd7eb4e6293782dd90"],["/2024/03/31/ElasticSearch/elasticsearch/index.html","aaa8cfc4bfa83819c22ecc88bbdd5a9d"],["/2024/04/07/使用技巧/使用技巧/index.html","ecb6f786cb5202516a197eae28aa4f87"],["/2024/04/14/前端项目/前端项目/index.html","23ea4303a7879279102459dc6a72fbbe"],["/2024/05/13/部署/项目部署/index.html","032424b64afd1dc8e4455a781b6df40d"],["/2024/05/20/spring/bean管理/index.html","6e4c4e2150a330b03231313d3e553d72"],["/2024/05/20/spring/spring事务/index.html","6b39eb01cd170802f5e88c5c4acc2f8c"],["/2024/06/24/测试/测试/index.html","62a707065258c81e30f5fc64d03b8dca"],["/2024/09/02/Git 77da1de463e94f438abb6499e3e38715/index.html","749dfd535e247325cafd275764b92660"],["/2024/09/02/Linux 0bb79742d9114f07bcf8417acb03cde7/index.html","82aefbd1b6603363d69612a658f85d97"],["/2024/09/02/PXE a20abd42a2df4c9d9a455c6c19e51b67/index.html","7fff5e5ff1f4d3db7221a553a09f458b"],["/2024/09/02/Python c0a8943996074a71b1b572f822ddc4e3/index.html","7a079ab8e811bde313303472ae8a5e26"],["/2024/09/02/Regex 4047bfcf718346bc845e31e4a8ad6abd/index.html","5f37ab180853204ba28bf806de0e1ec8"],["/2024/09/02/Shell 30d187a8c878417bb11bc9c65960e13d/index.html","d382d1ba21113e4ce196514aa43b4c2b"],["/2024/09/02/项目 34fd01b2ad2740c1a06cc6427117d78d/index.html","25101d03b53564ef86b78b5fae9ceb69"],["/2024/09/04/Test_Plan d4d9fdf7b08f4b588900d5dbe31493f3/index.html","5361cf3b5807caf5e9c57e6b4d635af1"],["/404.html","d41d8cd98f00b204e9800998ecf8427e"],["/anzhiyu/random.js","7470fbb00b362293d21f7285744244e1"],["/archives/2020/03/index.html","e70b29ebbf58b350677cd99f2057a78f"],["/archives/2020/index.html","a8f23986e8e88224678c786b6fcfcb65"],["/archives/2023/06/index.html","a4eac8ba47d690f7392e622de03cb687"],["/archives/2023/07/index.html","2568fde349eb6162f093d6cb9576aa6d"],["/archives/2023/08/index.html","61ec5f832146411f8c28038a75a41304"],["/archives/2023/09/index.html","276dc285c2a2178d6f4faedee49cb0fd"],["/archives/2023/10/index.html","c608ac709fa8d580f35b4c1388257522"],["/archives/2023/11/index.html","ec3172ac2ac4b05d066a7679de402b46"],["/archives/2023/12/index.html","eaad7f30e31b704eac714b1b93382903"],["/archives/2023/index.html","c9ccab5566701701959aa65c5e18772a"],["/archives/2023/page/2/index.html","ead920017f11e01ed0245e5d9b82eaa2"],["/archives/2023/page/3/index.html","964297cfb7fef51199728df69ff54a24"],["/archives/2023/page/4/index.html","a4ccbb054f5cc72410bf8f924cd06623"],["/archives/2024/01/index.html","ba9af0c3396a7fdc8dd55876c2989136"],["/archives/2024/02/index.html","4250a594b5bc87b7ff8185d4db1821d6"],["/archives/2024/03/index.html","57fc5dd7aeeedf20e13a4197e4b93c8e"],["/archives/2024/04/index.html","9ae280419b155592b83520b894fb6d21"],["/archives/2024/05/index.html","74dc8b025700f8bf87de9ec6535108cd"],["/archives/2024/06/index.html","22f94a32e29e3194d89e7c8908bc3411"],["/archives/2024/09/index.html","a4fd4d83c470f8850fee898043a36e8b"],["/archives/2024/index.html","909ad2de79d06dcfed0e035e01911abc"],["/archives/2024/page/2/index.html","eb7cf34e734cc88962f559238b45a97a"],["/archives/2024/page/3/index.html","472e1cf3682d74812f054b4982ff98e3"],["/archives/index.html","3fca7f550f3fadcb62ca239aee107572"],["/archives/page/2/index.html","6a5fb22d54926b69d929158649bab236"],["/archives/page/3/index.html","1f930376c64e91c436ea498f933abdd2"],["/archives/page/4/index.html","ae2e9d9be27ece776b73ae183b399ba0"],["/archives/page/5/index.html","cc81a41c0ad0417d1b37a9d645283789"],["/archives/page/6/index.html","69b1c3a78d0cd9a0d8dcc19081151cdd"],["/archives/page/7/index.html","6ad89a8014abdb2c4d6d64bf90343295"],["/categories/c/index.html","2a13938084f00bccb76f9a98bba636e8"],["/categories/index2.html","d41d8cd98f00b204e9800998ecf8427e"],["/categories/python/index.html","ea8839764d3f8dc702bca83a09aa8e53"],["/categories/redis/index.html","f2c570305545a6e6dcd7b2ba4d368234"],["/categories/前端/index.html","f117792a908e5ee7bcf6cbb2c4cfcb9c"],["/categories/数据库/index.html","9375a81af3f5e908db70e19c217e2225"],["/categories/设计模式/index.html","46f3e66eccee14f9f3cc45d9b0c4bd18"],["/css/index.css","d0195177afdb102fb6df5c1a5c94d9d2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/image/2.png","2d373250ca1f547ec637e1d0b5237f07"],["/image/avatar.jpg","2d3e7230f0eea4e5aaf4005ccea61640"],["/image/re0.jpg","4beb18f89c45a7ba57771b56241af574"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/index.html","6e77cf2a03515f4da25b8c9ad2724f9f"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","586c1eecf6617180a50d419def5fd4c0"],["/js/main.js","0ca6e958debf5d18e10ead8c0c00191c"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","b2bbde9d96fc4ded6c7a163038818ae5"],["/page/2/index.html","857a9765cdc174b9c680e97ac79bb639"],["/page/3/index.html","0ac05e9015130bb9bc1980d526fda9b8"],["/page/4/index.html","f155099b369b6ddcbc8ad48c5cedfdd1"],["/page/5/index.html","619183457fea864fe7ec840d5844513a"],["/page/6/index.html","114b05a922cfb9ad0ed3716739bb86de"],["/page/7/index.html","490c15535e5414be54895ef1e6615876"],["/sw-register.js","63ca5de6f4e3390badae601279e7d1e6"],["/tags/Golang/index.html","69e5e358c29b0c2041b8119c09c47d99"],["/tags/c-服务器/index.html","eaa8b0d6267bb86a6f0719b964be5de9"],["/tags/c/index.html","fcec0542c9571035f0c5c35637da60ce"],["/tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/tags/java/index.html","ea2c469e8e58c82b7c84a309d047e333"],["/tags/javaweb/index.html","84813093bf009f6afb9eee7336684fec"],["/tags/redis/index.html","72b01ddd3bd81057450164f8669c4283"],["/tags/springBoot/index.html","c2522144651fe614bc17d3624b594f05"],["/tags/web/index.html","c0cb37d2acbbc3a48967d6eb8c67ff0b"],["/tags/前端/index.html","d5ae8e390318c0d8e57fbe156ed94501"],["/tags/数据库/index.html","8fd73a813a24c96125524647422b7ac6"],["/tags/设计模式/index.html","6db03226b5b961bcfba8aae2201498c9"]];
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
