
// let common_url = 'http://192.168.1.1:8080/';  //服务器地址
let common_url = '';  //服务器地址
// let token = '';   
/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */



function fetchRequest(param){
    const { url, heade={}, method='get',type='json' } = param
    let header = {
        'Accept': 'application/json',
        "Content-Type": "application/json;charset=UTF-8",
        ...heade,
    };
    if( method.toLowerCase() === 'get'){
        return new Promise(function (resolve, reject) {
            fetch(unescape(url),{
                method:'GET',headers:header
            })
            .then((response) => response[type]())
            .then((responseData) => {
                resolve(responseData);
            })
            .catch( (err) => { 
                reject(err);
            });
        });

    } else {
        const obj2params = (obj) => {
            let item, result = '';
            for (item in obj) {
              result+='&'+item+'='+ encodeURIComponent(obj[item]);
            }
            if(result) {
              result = result.slice(1);
            }
            return result;
        }
        return new Promise(function (resolve, reject) {
            fetch(url,{
                method: method,
                headers: header,
                body: obj2params(params)
            })
            .then((response) => response[type]())
            .then((responseData) => {
                resolve(responseData);
            })
            .catch( (err) => {
                reject(err);
            });
        });
    }
}

export default fetchRequest