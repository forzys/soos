const API = {
    zhihu:{
        latest:`https://news-at.zhihu.com/api/4/news/latest`,
        getNew:`https://news-at.zhihu.com/api/4/news/`,//3892357
        oldNew:`https://news-at.zhihu.com/api/4/news/before/`//20131119
    },
   
    wallpaper:{
        search:'http://so.picasso.adesk.com/v1/',
        wall:'http://service.picasso.adesk.com/v1/'
    }


}

export default API


// case '/bd-weather':  //百度天气接口  //fetch('http://localhost:2233/bd-weather/city=上海')
// target = 'https://www.baidu.com/home/other/data/weatherInfo';
// pathRewrite = {'^/bd-weather/':'?'}
// break
// case '/douban-movie'://豆瓣电影接口
// target = `https://api.douban.com/v2/movie/search`;
// pathRewrite = {'^/douban-movie':''}
// break
// case '/article'://每日一文接口
// target = `https://interface.meiriyiwen.com/article`;
// pathRewrite = {'^/article':''}
// break

// case '/wallpaper'://壁纸接口
// target = `http://service.picasso.adesk.com/v1/`;
// pathRewrite = {'^/wallpaper/':''}
// break
// case '/wallpaper-search'://搜索壁纸接口
// target = `http://so.picasso.adesk.com/v1/`;
// pathRewrite = {'^/wallpaper-search/':''}
// break

// case '/novel': //追书神奇接口
// target = `http://api.zhuishushenqi.com`;
// pathRewrite = {'^/novel':''}
// break
// case '/chapter': //追书神奇章节接口
// target = `http://chapter2.zhuishushenqi.com`;
// pathRewrite = {'^/chapter':''}
// break



// case '/bd-weather': // fetch('http://localhost:2233/bd-weather/city=上海')
// target = 'https://www.baidu.com/home/other/data/weatherInfo';
// pathRewrite = {'^/bd-weather/':'?'}
// break
// case '/qqmusic':
// target = 'https://u.y.qq.com/';
// pathRewrite = {'^/qqmusic':'/'}
// break
// case '/sina-weather': // fetch('http://localhost:2233/sina-weather/&ip=192.168.0.0')
// target = 'https://interface.sina.cn/dfz/outside/ipdx/weather.d.html?length=1&air=1&callback=&';
// pathRewrite = {'^/sina-weather':'/'}
// break
// case '/he-weather':   // fetch('http://localhost:2233/he-weather/&location=上海/shanghai/192.168.0.0')
// target = 'https://free-api.heweather.com/s6/weather/now?key=b1da27652f6a46589f3160080bec11fd&';
// pathRewrite = {'^/he-weather':'/'}
// break
// case '/bd-hotword':
// target = 'http://top.baidu.com/mobile_v2/buzz/hotspot';
// pathRewrite = {'^/bd-hotword':'/'}
// break
// case '/wb-hotword':
// target = 'https://s.weibo.com/ajax/jsonp/gettopsug';
// pathRewrite = {'^/wb-hotword':''}
// break
// case '/sg-hotword':
// target = 'https://m.sogou.com/web/search/hot_news.jsp';
// // target = 'https: //www.sogou.com/suggnew/hotwords';
// pathRewrite = {'^/sg-hotword':''}
// break
// case '/sina-hotword':
// target = 'https://www.sina.com.cn/api/hotword.json?';
// pathRewrite = {'^/sina-hotword':'/'}
// break
// case '/iciba-one':
// target = 'http://open.iciba.com/dsapi/';
// pathRewrite = {'^/iciba-one':'/'}
// break
// case '/iciba-trans':      // fetch('http://localhost:2233/iciba-trans/&w=端口')
// target = 'http://dict-co.iciba.com/api/dictionary.php?type=json&key=D9559383FCE4D0AC0AFA9C1C6CBF871D&';
// pathRewrite = {'^/iciba-trans':'/'}
// break
// case '/youdao':          //fetch('http://localhost:2233/youdao/&i=端口')
// target = 'http://fanyi.youdao.com/translate?&doctype=json&type=AUTO&';
// pathRewrite = {'^/youdao':'/'}
// break
// case '/sg-img': //fetch('http://localhost:2233/sg-img/&start=0&len=10')
// target = 'https://pic.sogou.com/pic/action/getWapHomeFeed.jsp?key=homeFeedData&category=feed&';
// pathRewrite = {'^/sg-img':'/'}
// break
//             // https://od.qingting.fm/m4a/587892897cb8913977b1d09d_6654123_64.m4a
// case '/luoji': //fetch('https://i.qingting.fm/wapi/channels/82598/programs/page/1/pagesize/10')(max page 20)
// target = 'https://i.qingting.fm/wapi/channels/82598/programs';
// pathRewrite = {'^/luoji':'/'}
// break
// case '/movie250': //fetch('http://api.douban.com/v2/movie/top250')
// target = 'https://api.douban.com/v2/movie/top250';
// pathRewrite = {'^/movie250':''}
// break
// case '/rd-wallpaper': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `https://infinity-api.infinitynewtab.com/random-wallpaper`;
// pathRewrite = {'^/rd-wallpaper':''}
// break
// case '/inf-wallpaper': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `https://infinity-api.infinitynewtab.com/get-wallpaper`;
// pathRewrite = {'^/inf-wallpaper':''}
// break
// case '/guokr-rd': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `https://www.guokr.com/apis/minisite/article.json?retrieve_type=by_subject&limit=20&offset=18`;
// pathRewrite = {'^/guokr-rd':''}
// break
// case '/db-movie-release': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `http://api.douban.com/v2/movie/in_theaters`;
// pathRewrite = {'^/db-movie-release':''}
// break
// case '/migu-music': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `http://music.migu.cn`;
// pathRewrite = {'^/migu-music':'/'}
// break
// case '/toutiao-news': //fetch('http://localhost:2233/rd-wallpaper/')
// // target = `https://www.toutiao.com/api/pc/feed`;
// target = `http://is.snssdk.com/api/news/feed/v51`;
// pathRewrite = {'^/toutiao-news':''}
// break
// case '/article': //fetch('http://localhost:2233/rd-wallpaper/')
// target = `https://interface.meiriyiwen.com/article`;
// pathRewrite = {'^/article':''}
// break
// case '/tuchong':
// target = `https://api.tuchong.com/feed-app`;
// pathRewrite = {'^/tuchong':''}
// break
// case '/test':
// target = `https://www.bimo.cc`;
// pathRewrite = {'^/test':''}
// break
