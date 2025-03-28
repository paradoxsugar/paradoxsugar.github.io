/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","267946270d5d508efdf19d109521e704"],["/about/index.html","638020c03f5faf4aeb06554ef58445c4"],["/archives/2023/02/index.html","fcd8c75fd23d25cf543068db6e2c690b"],["/archives/2023/03/index.html","cedd6150eb533428db604c672761a81e"],["/archives/2023/04/index.html","99dbd46c6101ae97ba4ae42bda3c7d43"],["/archives/2023/07/index.html","81df254aeb07c08a6295a80cf281c4c9"],["/archives/2023/11/index.html","2407c00531f8ebd9688d39cf8817b543"],["/archives/2023/12/index.html","12b2d5e005906ecb0309e64cb642876b"],["/archives/2023/index.html","b740084be8508e76a0b4689c4a3ca9f8"],["/archives/2024/01/index.html","8659066dc8ba88e19b78bf14a1cfd3d5"],["/archives/2024/index.html","bfbc2864187b6b53c37f802c7626da2a"],["/archives/index.html","fbd0d5a338b3ac4a7e1fcb17a548ca39"],["/atom.xml","3015ad78707c532e8317acb04e80fc01"],["/baidusitemap.xml","0d30e096295d34916facf4af9094635e"],["/categories/index.html","3c6b7e247b1359eda079f07d17470645"],["/categories/电脑/index.html","b83948a75893ac55152bdf3e6c7fd83a"],["/categories/笔记/index.html","fa9f2f566f6013ff35d694b652db93b7"],["/categories/笔记/本科/index.html","3f27495fee0f9fc58221c8bd219a2e30"],["/categories/网站/index.html","6bccf0b5d09ece591cb72407a8e626b7"],["/charts/index.html","b290329338389174287d8791a0596e9e"],["/comments/index.html","b81eaeb440e66802113021395e8bb044"],["/css/APlayer.min.css","001e7304048b96bb1d88f87239047284"],["/css/animate.min.css","c0be8e53226ac34833fd9b5dbc01ebc5"],["/css/aplayer.css","ffd74e2d165c899f025a2010d344617b"],["/css/custom.css","23abb067391ad8c90e00a59b297e052f"],["/css/equipment.css","5c84c90b9d04db40041d126d9cb40c67"],["/css/essay_page.css","9dea25de4360b7d83c09f57bba410b5f"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","a208d7ce46fac7a6f38b40a41d5372fc"],["/css/katex.min.css","29e5c4ac7faa171f12af2b523c318952"],["/css/progress_bar.css","08beddab8a62411ac757947550792307"],["/css/project.css","aee12d876573066962afc9068966041f"],["/css/runtime.css","fc9ec484426f4158e003affd0c69caa3"],["/css/swiper.min.css","628611c97b63017f46a2fd7c33340850"],["/css/swiperstyle.css","5e3e30d4382af0cea16b806b6cbf0063"],["/css/twikoo.css","0d4d9f56035ff463d0726e64bfa598c9"],["/css/twikoo_beautify.css","2a646ec64112dd3c3bb523a51f9b64a2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/essay/index.html","194ba652ee0b9f0f042de3fba82cb32a"],["/gallery/index.html","5bf9dc83437754c5805585fb80d64d5b"],["/gallery/test/index.html","74a5bb0516a5c0454ddfab8a053760bd"],["/img/1.png","6d9cef99dfb290e33ce731252ea0546f"],["/img/2.jpg","53980ce4df5b57bc2ecfc31ffc11d943"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/a.jpg","855d42ffd2437b46fcfdf1477d8e889f"],["/img/about.gif","064d61fb1c9fff0ce541d587f4430e94"],["/img/about0.jpg","e4448ae2ba2d571d488cf02db7b496cd"],["/img/about1.jpg","1784f3b0aef7af7a144f00b27d9993c7"],["/img/about2.jpg","17997cdf3c0e7bfa5159c8ffb2197fe6"],["/img/about3.jpg","a63b7d364c79823ed0c690251a3e5daf"],["/img/about4.jpg","274b5022f231bf31821d50ff9b5e002a"],["/img/about5.jpg","961ddffda8b283249c3dddc6bb0e919c"],["/img/about6.jpg","b86ab49284b6eab3013e74d6339273ac"],["/img/about7.jpg","86cf07a69fb748270f14075d074a4c8a"],["/img/about8.jpg","e7e4ffcdebca8d83710bd08cc76d4d22"],["/img/about9.jpg","125430396eeccd84bde5e8d54a0f0db1"],["/img/after.png","1c57621c9e12185e0eb07f0e7cadd350"],["/img/archivebanner.jpg","f4714c78c326dbb8b078adc0e444ffe3"],["/img/ballon.jpg","16a8f39982a6ebed1b8c495ebde4379a"],["/img/before.png","2b95685d20a2b9bdbcfd5ee5096ee85c"],["/img/categoriesbanner.jpg","50a51c27f2f01055422a193406458f1e"],["/img/chartsbanner.jpg","52405e248d03c2bc900b5f2d4c3fbacf"],["/img/commentsbanner.jpg","2929a61984053e6e00f743d0540ca263"],["/img/cr1.png","cf23526f451784ff137f161b8fe18d5a"],["/img/cr10.png","246e9c9fc22108c9fef13ece809a3b1e"],["/img/cr11.png","469a303a1c5bef0923722b346a5160d2"],["/img/cr12.png","c29da8c2afae760bb16ae5beddf2dccc"],["/img/cr2.png","11fff3497f5c38112cca16137467d5c3"],["/img/cr3.png","2b3a86585b71a7a3f08ca26f5f274746"],["/img/cr4.png","7f1f5889d14c2a4e59c98e9317d24b7c"],["/img/cr5.png","20b9b8e87a18799855d23695c1f44fa3"],["/img/cr6.png","ce4ac77f788a2fa7fbcbe1cdd7fd3bac"],["/img/cr7.png","21dff1c163052cc2e6fc941093dfc425"],["/img/cr8.png","e888bb505de1b0810c770c00beae58f6"],["/img/cr9.png","b6944c569210fbe406e0b6e5952d1715"],["/img/enfjMBTI.svg","ab9eb4dbe1201ce33bc74688f35e348b"],["/img/essaycover.jpg","1a77660b9d9a5bf275056e3147f89f09"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/gallerybanner.jpg","973a45ff93e00fa252d583a87de8b30e"],["/img/kun.gif","8ab6904ad5b86162ca4deecf74ef298e"],["/img/line.png","5cd7b96a8423219bbff23d56d2a9e90f"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/map.jpg","892cc1d3346f2bbc2a34567abe75ad13"],["/img/monumentbanner.jpg","79326d9b9227fbea49b882afad092d03"],["/img/projectbanner.jpg","8aa20916b640f95b296096f7d4be4542"],["/img/psc.jpg","19f2ef368d99e628c42d8d14371106b9"],["/img/pwa/README.html","94f761e880572f88a2e6a27ecaa93ca7"],["/img/pwa/android-chrome-144x144.png","bbf908c02066bd6ce89cee6fc0dbfb01"],["/img/pwa/android-chrome-192x192.png","8b19c5536382a22dff30058ceafedc0e"],["/img/pwa/android-chrome-256x256.png","8ec64a7afaf4d683a1f5b0d4b0dede3b"],["/img/pwa/android-chrome-36x36.png","3488af6dba272170a56cc2d0f8be03aa"],["/img/pwa/android-chrome-384x384.png","a0c9151567453d34a22a71cf26e10160"],["/img/pwa/android-chrome-48x48.png","097dbce4908a01a88557723df843dd64"],["/img/pwa/android-chrome-512x512.png","b610e8d9565bf690a2d2ad92bd70af97"],["/img/pwa/android-chrome-72x72.png","59ac8faa603d392b13c7b068d8faec69"],["/img/pwa/android-chrome-96x96.png","9b8a9676a011f2cb688dc7e2f3882080"],["/img/pwa/apple-touch-icon-120x120.png","85fa7813bb0ed556cada799ed6c9b611"],["/img/pwa/apple-touch-icon-152x152.png","788efe1018a038a834e496daa7d6e72f"],["/img/pwa/apple-touch-icon-180x180.png","8b7ada743f9fb3f4b44fd5f5a963db38"],["/img/pwa/apple-touch-icon-60x60.png","c58b73b6fa4dac5c71369fb5ec001ecd"],["/img/pwa/apple-touch-icon-76x76.png","9fd4c80080bf08b711464d120bf156e4"],["/img/pwa/apple-touch-icon.png","8b7ada743f9fb3f4b44fd5f5a963db38"],["/img/pwa/browserconfig.xml","6cf17ce119d6a029504e21cca2a541c4"],["/img/pwa/favicon-16x16.png","d82a52bddfbf7e4eebb65d4b3218aeb4"],["/img/pwa/favicon-32x32.png","ace8dcd711c09e6e6c05d2bd2347b468"],["/img/pwa/mstile-150x150.png","53b9b6607048ac5a8bf7e6b501bead78"],["/img/pwa/safari-pinned-tab.svg","33bbce6936e48b7ef6ebebc2c087e7e3"],["/img/tagsbanner.jpg","dcf116f1426b77492de9e04a58188544"],["/img/violet.jpg","24acaf058c43b7c8e5a453f2e51b868f"],["/img/ypy5.png","6bdb8361db95808e6d8d196d37d8cbcc"],["/index.html","6bddd7b64bac18e4db66f146a3a0a884"],["/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/Meting2.min.js","ab757cbd9ab5b7fb26dd5f0793a7cfb2"],["/js/SmoothScroll.min.js","879e9ae29c5531554fcec25bd5a479c6"],["/js/anzhiyu.js","94e238521517f2ccb2f6208fc85dc830"],["/js/anzhiyuOnlyOne.js","e6287676ec0f13b92ed8ac6370103583"],["/js/anzhiyufunction.js","c82c2c3c6876a90a80e74d4f34dd7740"],["/js/auto-render.min.js","110d0f8f7eb874e128e8d0f2d8e443e1"],["/js/bsz.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/js/chartscolor.js","70a799ca8662503b3109de7086d8d8f4"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/custom.js","6fee577b162f790835db2f971f514aea"],["/js/day.js","472a6637b90b29bc22aec6571f234a07"],["/js/diytitle.js","69f41c1fae82b3918c58fbcc73edfdc6"],["/js/echarts.min.js","34a592df9cf88d5743f018f98049558a"],["/js/geoip2.js","0091ba6fca85eba88d94a5197f527da8"],["/js/grayscale.js","c0d284ca993a7d6a2ecfea49f945f5d3"],["/js/index.js","61654d8cb2373c49a3138330998a6799"],["/js/katex.min.js","2aaed3c2692536aac6713366a06c7e65"],["/js/lunar.js","7d91d3ee7444fd9d0eae81fc6a0149ac"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/modify.js","08ac73a973855be130adaf469df1de8c"],["/js/musickeep.js","2db0614f0cdcda01b8b879a230157cff"],["/js/myAPlayer.min.js","767b5cc0ddc50c97187726807b93973f"],["/js/project.js","4a60e94747a2e2e7460c9da596d0baa1"],["/js/random.js","79c4e878bd4b3683245bdf85c5d10dae"],["/js/reward.js","ae83396dcfb2426aa3cb283297fa80bc"],["/js/runtime.js","b301c1d23b1e8bab9c34c2ccd5f61b60"],["/js/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/js/sakura-original.js","fda7c3e516e336aa3c681fc9720d0538"],["/js/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/js/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/sun_moon.js","38f5255d55e04f997f40bbabd197d6c6"],["/js/sweetalert2.all.js","b23f16052c784255cc6d39fbca9a3287"],["/js/swiper.min.js","9c379840216a38360bb9b9ad8e04bb5c"],["/js/swiper_init.js","0b3755a1f1f38718bd47aa842db55eb3"],["/js/swiperbdage_init.min.js","7ce6224837bce0c8f5adf979e14b2b02"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/universe.js","21a37286382d2b1b1561d61e89862f6c"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/js/waterfall.js","5b6c6c5404c1916c0950c5e609dc2726"],["/js/wow.min.js","21fe90eedcbaafb4ed529d78418d30bd"],["/js/wow_init.js","a901d60d59cc7af260b836487af24817"],["/lib/hbe.js","8d22ca204eb093c8c07cedd2eefa9df6"],["/monument/index.html","941f1c81fdf478e991ff0d6ea7895ba3"],["/pluginsSrc/@docsearch/css/dist/style.css","7b9b2d58a76a948574c558639f28d1fb"],["/pluginsSrc/@docsearch/js/dist/umd/index.js","4016eb74e9eea32f3bd7ef5724c15ba5"],["/pluginsSrc/@fancyapps/ui/dist/fancybox.css","3a867c1ea947834b92530f9d57fa799a"],["/pluginsSrc/@fancyapps/ui/dist/fancybox.umd.js","0ce18f9ca64e6fdcac07ec7e97dac4c7"],["/pluginsSrc/@fortawesome/fontawesome-free/css/all.min.css","9402848c3d4bbc710c764326f8b887c9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf","1931427c23716bb4ff98d03627f7137c"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2","b6356c957274676e6571c1ff5e11c9a8"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf","a0cc1c8265e3163aa654a5284ea11ace"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2","023a4a925fa3fce0f66b769ef6bbb264"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf","25914cfeafced317e1a0372187fbb2b9"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2","6c4eee562650e53cee32496bdfbe534b"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.ttf","71808e147dc6d82c198a4ba292c0cb69"],["/pluginsSrc/@fortawesome/fontawesome-free/webfonts/fa-v4compatibility.woff2","c9e50ccabe9e36f370272197595ea1e5"],["/pluginsSrc/@waline/client/dist/waline.css","f9a6e928169c9000c7fdc6e2d4fe39ef"],["/pluginsSrc/@waline/client/dist/waline.js","8943d235ad431f230d318a492dbcd4ee"],["/pluginsSrc/algoliasearch/dist/algoliasearch-lite.umd.js","1e3dc6f644974934ffcb81baf749d76a"],["/pluginsSrc/aplayer/dist/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/pluginsSrc/aplayer/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/pluginsSrc/artalk/dist/Artalk.css","afafe046a97a29a277282447c5c3861a"],["/pluginsSrc/artalk/dist/Artalk.js","520868f67b0544435b2ab31c95247bc6"],["/pluginsSrc/blueimp-md5/js/md5.min.js","2f577924085ebbe12e29f3ff706397d0"],["/pluginsSrc/butterfly-extsrc/dist/activate-power-mode.min.js","eb1c75760fdc1249dfb74db05ba39a5c"],["/pluginsSrc/butterfly-extsrc/dist/canvas-fluttering-ribbon.min.js","bee7265e6d121d3e2bbe25592163fa22"],["/pluginsSrc/butterfly-extsrc/dist/canvas-nest.min.js","b4b3398371256eb9c74a0001eb5fa25d"],["/pluginsSrc/butterfly-extsrc/dist/canvas-ribbon.min.js","15fcd2b43b47baa5418ae4004cd2c802"],["/pluginsSrc/butterfly-extsrc/dist/click-heart.min.js","8626378d634c886884e3f94ff060182e"],["/pluginsSrc/butterfly-extsrc/dist/click-show-text.min.js","56edbcd0697d5c8056d0d40d9bbeb26a"],["/pluginsSrc/butterfly-extsrc/dist/fireworks.min.js","b0f0a5c077706616aef9224fa0b4df76"],["/pluginsSrc/butterfly-extsrc/metingjs/dist/Meting.min.js","7b5e05378aa5c4dbdccbe9a34cf30adb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/css/share.min.css","4b6e6c4b12b9206824231920ed3326c8"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.svg","11f1b83bfa2973cab7fe30d3f4bb278f"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/pluginsSrc/butterfly-extsrc/sharejs/dist/js/social-share.min.js","a11590a40662aa0470da0a9cf725e0be"],["/pluginsSrc/disqusjs/dist/browser/disqusjs.es2015.umd.min.js","1090676c68ac556956d14d40353c2da5"],["/pluginsSrc/disqusjs/dist/browser/styles/disqusjs.css","8edf59e04dfb9bb9b73d185e651262e0"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.css","d163683c883a1f80bc86404561f8004d"],["/pluginsSrc/flickr-justified-gallery/dist/fjGallery.min.js","9d1c40a9e1b26d1fc2c2a1fbd959f01e"],["/pluginsSrc/gitalk/dist/gitalk.css","8476031a633732dff9875feae0890070"],["/pluginsSrc/gitalk/dist/gitalk.min.js","8a817782fe4a94b4d2499bcfce04f8c3"],["/pluginsSrc/instant.page/instantpage.js","ae11493d70a8ce9fa776cc7aec1be764"],["/pluginsSrc/instantsearch.js/dist/instantsearch.production.min.js","493b9046f919290eb98d0806af1ca550"],["/pluginsSrc/katex/dist/contrib/copy-tex.min.js","c3a3efd7d609e2e905aa386fc0f7d18e"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.ttf","56573229753fad48910bda2ea1a6dd54"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff","10824af77e9961cfd548c8a458f10851"],["/pluginsSrc/katex/dist/fonts/KaTeX_AMS-Regular.woff2","66c678209ce93b6e2b583f02ce41529e"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf","497bf407c4c609c6cf1f1ad38f437f7f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff","de2ba279933d60f7819ff61f71c17bed"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2","a9e9b0953b078cd40f5e19ef4face6fc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf","e6fb499fc8f9925eea3138cccba17fff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff","a25140fbe6692bffe71a2ab861572eb3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2","08d95d99bf4a2b2dc7a876653857f154"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf","b9d7c4497cab3702487214651ab03744"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff","40934fc076960bb989d590db044fef62"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2","796f3797cdf36fcaea18c3070a608378"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf","97a699d83318e9334a0deaea6ae5eda2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff","e435cda5784e21b26ab2d03fbcb56a99"],["/pluginsSrc/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2","f9e6a99f4a543b7d6cad1efb6cf1e4b1"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.ttf","8e431f7ece346b6282dae3d9d0e7a970"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff","4cdba6465ab9fac5d3833c6cdba7a8c3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Bold.woff2","a9382e25bcf75d856718fcef54d7acdb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf","52fb39b0434c463d5df32419608ab08a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff","5f875f986a9bce1264e8c42417b56f74"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2","d873734390c716d6e18ff3f71ac6eb8b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.ttf","39349e0a2b366f38e2672b45aded2030"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff","8ffd28f6390231548ead99d7835887fa"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Italic.woff2","652970624cde999882102fa2b6a8871f"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.ttf","818582dae57e6fac46202cfd844afabb"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff","f1cdb692ee31c10b37262caffced5271"],["/pluginsSrc/katex/dist/fonts/KaTeX_Main-Regular.woff2","f8a7f19f45060f7a177314855b8c7aa3"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf","6589c4f1f587f73f0ad0af8ae35ccb53"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff","48155e43d9a284b54753e50e4ba586dc"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2","1320454d951ec809a7dbccb4f23fccf0"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.ttf","fe5ed5875d95b18c98546cb4f47304ff"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff","ed7aea12d765f9e2d0f9bc7fa2be626c"],["/pluginsSrc/katex/dist/fonts/KaTeX_Math-Italic.woff2","d8b7a801bd87b324efcbae7394119c24"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf","f2ac73121357210d91e5c3eaa42f72ea"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff","0e897d27f063facef504667290e408bd"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2","ad546b4719bcf690a3604944b90b7e42"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf","f60b4a34842bb524b562df092917a542"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff","ef725de572b71381dccf53918e300744"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2","e934cbc86e2d59ceaf04102c43dc0b50"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf","3243452ee6817acd761c9757aef93c29"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff","5f8637ee731482c44a37789723f5e499"],["/pluginsSrc/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2","1ac3ed6ebe34e473519ca1da86f7a384"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.ttf","a189c37d73ffce63464635dc12cbbc96"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff","a82fa2a7e18b8c7a1a9f6069844ebfb9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Script-Regular.woff2","1b3161eb8cc67462d6e8c2fb96c68507"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.ttf","0d8d9204004bdf126342605f7bbdffe6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff","4788ba5b6247e336f734b742fe9900d5"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size1-Regular.woff2","82ef26dc680ba60d884e051c73d9a42d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.ttf","1fdda0e59ed35495ebac28badf210574"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff","b0628bfd27c979a09f702a2277979888"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size2-Regular.woff2","95a1da914c20455a07b7c9e2dcf2836d"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.ttf","963af864cbb10611ba33267ba7953777"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff","4de844d4552e941f6b9c38837a8d487b"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size3-Regular.woff2","9108a400f4787cffdcc3a3b813401e6a"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.ttf","27a23ee69999affa55491c7dab8e53bf"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff","3045a61f722bc4b198450ce69b3e3824"],["/pluginsSrc/katex/dist/fonts/KaTeX_Size4-Regular.woff2","61522cd3d9043622e235ab57762754f2"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf","6bf4287568e1d3004b54d5d60f9f08f9"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff","0e0460587676d22eae09accd6dcfebc6"],["/pluginsSrc/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2","b8b8393d2e65fcebda5fa99fa3264f41"],["/pluginsSrc/katex/dist/katex.min.css","1612bcd72cc503f18e2f302b3a2addd1"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/tex.js","29662ef385c73c4dd9e99b17cd2d579b"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/pluginsSrc/mathjax/es5/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/pluginsSrc/mathjax/es5/tex-mml-chtml.js","2e00d51c98dbb338e81054f240e1deb2"],["/pluginsSrc/medium-zoom/dist/medium-zoom.min.js","348914dc9144b3441a2a0c9687604a16"],["/pluginsSrc/mermaid/dist/mermaid.min.js","e1bdcac49c3a6464a9aa3c6082b1833e"],["/pluginsSrc/node-snackbar/dist/snackbar.min.css","4220368aced9a5ce011f2ce9bd8b1035"],["/pluginsSrc/node-snackbar/dist/snackbar.min.js","8f19a3527021a6268cd8488a5debe7f8"],["/pluginsSrc/pace-js/pace.min.js","094ce2780af2906e8916dc4c4eab6ee1"],["/pluginsSrc/pace-js/themes/blue/pace-theme-minimal.css","7bba84cb68736f6ea9ae77cd934d995a"],["/pluginsSrc/pangu/dist/browser/pangu.min.js","a5bf049a3ae9cb5b19489fb2c61ae276"],["/pluginsSrc/pjax/pjax.min.js","d810aff16a7f45392bdeec5493ebee8e"],["/pluginsSrc/prismjs/plugins/autoloader/prism-autoloader.min.js","4f48958b1802a9d99581aa5ab1e3f621"],["/pluginsSrc/prismjs/plugins/line-numbers/prism-line-numbers.min.js","ffdf7bdb8ddaf0c89a4e4225e1086264"],["/pluginsSrc/prismjs/prism.js","54e45d657b6a3471bd7cc72d0873c0b1"],["/pluginsSrc/twikoo/dist/twikoo.all.min.js","ea0891a07876ffe2455fdfe08a950b1c"],["/pluginsSrc/typed.js/lib/typed.min.js","477fdd6405150093080290d2e8153eac"],["/pluginsSrc/valine/dist/Valine.min.js","c748c413b03bcdb2064c84bc9e06613c"],["/pluginsSrc/vanilla-lazyload/dist/lazyload.iife.min.js","1ce4f414981382d7d65435a2412e09eb"],["/posts/1/index.html","9581e410e15d8f129eaa417d4e330524"],["/posts/2/index.html","0e2a5479642a70bf4a5f5ab9238ddf98"],["/posts/3/index.html","b57275e67e842cd31cf513e73c08cff4"],["/posts/4/index.html","2e5d406b272d0bc2a0ab1b1acc17d2e7"],["/posts/95/index.html","7c22e9fd295345997b4359475e97a576"],["/posts/96/index.html","8d7167a2b2bec654c8082b50a0e6c713"],["/posts/97/index.html","f5e6095750fdc022283754923af184a6"],["/posts/98/index.html","00c0323e5fe00b7db5892cd86d5e2ef2"],["/posts/99/index.html","c06c7773a5fa0946e8f0aa746ad32875"],["/project/index.html","38a17bbbf2058f2c9c824a9f198edaa9"],["/search.xml","8fdca8d8e83b56466d4ac63073465fd9"],["/sitemap.xml","47a4649e23a9ec7e44ead8cd2f38e01c"],["/sw-register.js","e2d08f53ed23772968d291a4a7de9202"],["/tags/AIC/index.html","28fd473b59251a6bde1dba7ea0aba8c5"],["/tags/Control/index.html","ba0adac16df52c44b284edc57d1beabd"],["/tags/PLL/index.html","277a59a14cc7c5ea00c72fcb28f7bfe7"],["/tags/encrypt/index.html","ee414879fe33f54946022d4b23a65b48"],["/tags/index.html","51c66e7f44b646969ec44eff76d52505"],["/tags/本科/index.html","02e358a5f9c767ba9fd382b2755d5cb4"],["/tags/杂记/index.html","5d73c65de7ce7666e5778c2e80d8d28a"],["/tags/生活/index.html","8401ae435245d148eef2c26ca1e44c93"],["/tags/电脑/index.html","9ff742c973de9ed22a229ace340a565e"],["/tags/笔记/index.html","0a192c891975692932a0e69fede6889b"],["/zhheo/random.js","0dffdd493a84ae41738b93c83bbaf786"]];
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
