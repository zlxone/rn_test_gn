/*
 * create by Abyss on 2017/11
 * version : 2.0
 * update : 2018/10
 * ==========================
 * 标题：网络接口封装类
 * 内容：
 * ==========================
 */
"use strict";
import config from '../config/config';

const Network = {
    /* 参数配置 */
    ErrorCode : '0X100001',
    ErrorMessage : '请求失败！',
    TimeOut : 15 * 1000, //十五秒
    GET : 'GET',
    POST : 'POST',

    /* 方法导出 */
    fetchRequest,
    fetchRequestDebug,
    fetchUploadImage,
    fetchRequestAlipay,
    fetchRequestHTML,
}

/**
 * 普通网络请求接口
 * @param url baseurl之后的接口地址拼接
 * @param method GET or POST
 * @param params 请求的object数据 {...}
 */
function fetchRequest (url, method, params = '') {
    let header = {
        "Content-Type": "application/x-www-form-urlencoded",
        // "accountSid": new Buffer(''+R.myData.code).toString('base64'),  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };

    url = config.baseUrl + url;

    console.log('request url:', url, params);  //打印请求参数
    if (params == '') {   //如果网络请求中没有参数
        return Promise.race([
            new Promise(function (resolve, reject) {
                fetch(url, {
                    method: method,
                    headers: header
                }).then((response) => response.json())
                    .then((json) => {
                        console.log('res:', url , json);  //网络请求成功返回的数据
                        resolve(json);
                    })
                    .catch((err) => {
                        console.log('err:', url, err);     //网络请求失败返回的数据        
                        reject(err);
                    });
            }),
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
            })
        ]);
    } else {//如果网络请求中带有参数
        return Promise.race([
            new Promise(function (resolve, reject) {
                var requestParam = "";
                if(method === 'GET'){
                    requestParam = '?'
                }

                let i = 0;
                for (key in params) {
                    if(i == 0){
                        requestParam += ("" + key + "=" + params[key]);
                        i++;
                    }else{
                        requestParam += ("&" + key + "=" + params[key]);
                    }
                }
                console.log("requestParam=  ", requestParam);
                //get 和 post 传值方式不一样
                if(method === 'GET'){
                    fetch(url + requestParam, {
                        method: method,
                        headers: header,
                    }).then((response) => response.json())
                        .then((json) => {
                            console.log('res:', url, json);   //网络请求成功返回的数据
                            resolve(json);
                        })
                        .catch((err) => {
                            console.log('err:', url, err);   //网络请求失败返回的数据  
                            reject(err);
                        });
                } else {
                    fetch(url, {
                        method: method,
                        headers: header,
                        body: requestParam   //body参数，通常需要转换成字符串后服务器才能解析
                    }).then((response) => response.json())
                        .then((json) => {
                            console.log('res:', url, json);   //网络请求成功返回的数据
                            resolve(json);
                        })
                        .catch((err) => {
                            console.log('err:', url, err);   //网络请求失败返回的数据  
                            reject(err);
                        });
                }
            }),
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
            })
        ])
    }
}

/**
 * 普通网络请求接口 报错都debug调试
 * @param url baseurl之后的接口地址拼接
 * @param method GET or POST
 * @param params 请求的object数据 {...}
 */
function fetchRequestDebug (url, method, params = '') {
    let header = {
        "Content-Type": "application/x-www-form-urlencoded",
        // "accountSid": new Buffer(''+R.myData.code).toString('base64'),  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };

    url = config.baseUrl + url;

    console.log('request url:', url, params);  //打印请求参数
    if (params == '') {   //如果网络请求中没有参数
        return Promise.race([
            new Promise(function (resolve, reject) {
                fetch(url, {
                    method: method,
                    headers: header
                }).then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log('err:', url, err);     //网络请求失败返回的数据        
                    reject(err);
                });
            }),
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
            })
        ]);
    } else {//如果网络请求中带有参数
        return Promise.race([
            new Promise(function (resolve, reject) {
                var requestParam = "";
                if(method === 'GET'){
                    requestParam = '?'
                }
                let i = 0;
                for (key in params) {
                    if(i == 0){
                        requestParam += ("" + key + "=" + params[key]);
                        i++;
                    }else{
                        requestParam += ("&" + key + "=" + params[key]);
                    }
                }
                console.log("requestParam=  ", requestParam);
                //get 和 post 传值方式不一样
                if(method === 'GET'){
                    fetch(url + requestParam, {
                        method: method,
                        headers: header,
                    }).then((response) => {
                        console.log(response);
                    })
                    .catch((err) => {
                        console.log('err:', url, err);   //网络请求失败返回的数据  
                        reject(err);
                    });
                } else {
                    fetch(url, {
                        method: method,
                        headers: header,
                        body: requestParam   //body参数，通常需要转换成字符串后服务器才能解析
                    }).then((response) => {
                        console.log(response);
                    })
                    .catch((err) => {
                        console.log('err:', url, err);   //网络请求失败返回的数据  
                        reject(err);
                    });
                }
            }),
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
            })
        ])
    }
}

/**
 * 上传图像网络请求接口
 * @param url baseurl之后的接口地址拼接
 * @param uri 本地图片的路径
 * @param keyImg 接收图像的字段名称
 * @param params 请求的object数据 {...}
 */
function fetchUploadImage (url, uri, keyImg, params) {
    let formData = new FormData();
    //把uri地址单独封装成file 
    let file = { uri: uri, type: 'multipart/form-data', name: 'image.png' };
    //遍历参数
    for (var key in params){
        formData.append(key, params[key]);
    }
    //固定格式
    formData.append(keyImg, file);

    console.log('request url:', url, formData);  //打印请求参数
    return new Promise(function (resolve, reject) {
        fetch(config.baseUrl + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                // "accountSid": new Buffer(''+R.myData.code).toString('base64'),  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
            },
            body: formData,
        }).then((response) => response.json())
            .then(( json ) => {
                console.log('res:', url, json);   //网络请求成功返回的数据
                resolve(json);
            })
            .catch((err) => {
                console.log('err:', url, err);   //网络请求失败返回的数据  
                reject(err);
            });
    });
}

function fetchRequestAlipay (url, method, params = '') {
    let header = {
        "Content-Type": "application/x-www-form-urlencoded",
        // "accountSid": new Buffer(''+R.myData.code).toString('base64'),  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };

    console.log('request url:', url, params);  //打印请求参数
    var requestParam = "";
    
    let i = 0;
    for (key in params) {
        if(i == 0){
            requestParam += ("" + key + "=" + params[key]);
            i++;
        }else{
            requestParam += ("&" + key + "=" + params[key]);
        }
    }
    return Promise.race([
        new Promise(function (resolve, reject) {
            fetch(url, {
                method: method,
                headers: header,
                body : requestParam
            }).then((response) => response.text())
                .then((json) => {
                    console.log('res:', url , json);  //网络请求成功返回的数据
                    resolve(json);
                })
                .catch((err) => {
                    console.log('err:', url, err);     //网络请求失败返回的数据        
                    reject(err);
                });
        }),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
        })
    ]);
}

function fetchRequestHTML (url, method, params = '') {
    let header = {
        "Content-Type": "application/x-www-form-urlencoded",
        // "accountSid": new Buffer(''+R.myData.code).toString('base64'),  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
    };

    console.log('request url:', url, params);  //打印请求参数
    var requestParam = "";
    
    let i = 0;
    for (key in params) {
        if(i == 0){
            requestParam += ("" + key + "=" + params[key]);
            i++;
        }else{
            requestParam += ("&" + key + "=" + params[key]);
        }
    }
    return Promise.race([
        new Promise(function (resolve, reject) {
            fetch(url, {
                method: method,
                headers: header,
            }).then((response) => response.text())
                .then((json) => {
                    console.log('res:', url , json);  //网络请求成功返回的数据
                    resolve(json);
                })
                .catch((err) => {
                    console.log('err:', url, err);     //网络请求失败返回的数据        
                    reject(err);
                });
        }),
        new Promise(function (resolve, reject) {
            setTimeout(() => reject(new Error('request timeout')), Network.TimeOut)
        })
    ]);
}

export default Network;