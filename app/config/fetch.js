
// let common_url = 'http://192.168.1.1:8080/';  //服务器地址
let common_url = '';  //服务器地址
// let token = '';   
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */
function fetchRequest(url, params = '', type='json', token){
    let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // "Content-Type": "application/json;charset=UTF-8",
        // "Content-Type":"application/x-www-form-urlencoded",
        // "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };
    // console.log('request url:',url,params);  //打印请求参数
    if(params == ''){   //如果网络请求中带有参数
        return new Promise(function (resolve, reject) {
            // {
            //     method: 'get',
            //     headers: header
            // }
            fetch(common_url + url).then( (response) => response[type]() )
                .then((responseData) => {
                    // console.warn('res:',url,responseData);  //网络请求成功返回的数据
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.warn('err:',url, err);     //网络请求失败返回的数据        
                    reject(err);
                });
        });
    } else {   //如果网络请求中没有参数
        const obj2params = (obj) => {
            let item, result = '';
            for (item in obj) {
              result += '&' + item + '=' + encodeURIComponent(obj[item]);
            }
            if (result) {
              result = result.slice(1);
            }
            return result;
          }

        return new Promise(function (resolve, reject) {
            console.warn( obj2params(params) )
            fetch(common_url + url, {
                method: 'post',
                headers: header,
                body: obj2params(params)  
            }).then((response) => response.json())
                .then((responseData) => {
                    // console.log('res:',url, responseData);   //网络请求成功返回的数据
                    console.warn('success',responseData)
                    resolve(responseData);
                })
                .catch( (err) => {
                    console.warn('err',err)
                    // console.log('err:',url, err);   //网络请求失败返回的数据  
                    reject(err);
                });
        });
    }
}

export default fetchRequest