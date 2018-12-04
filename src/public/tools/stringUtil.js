/*
 * create by Abyss on 2018/10
 * version : 1.0
 * update : 2018/10
 * ==========================
 * 标题：字符串验证
 * 内容：
 * ==========================
 */
"use strict";

/**
 * !!!=* 常用 *=!!!
 * 字符串非空判断
 * @param {*} text 字符串
 * @return 字符串为空返回true,否则返回false.
 */
function isEmpty(text){
    if(text === undefined || text === null || text === ''){
        return true;
    }
    return false;
}

/**
 * 数组非空判断
 * @param {*} text 传入的字符串
 */
function isMapEmpty(text){
    if(text === undefined || text === null || text === '' || text === [] || text.length <= 0){
        return true;
    }
    return false;
}

/**
 * 将一个字符串重复N此输出
 * @param {string} text string 字符串
 * @param {int} repeat int 重复次数
 * @return {string} 返回重复了N次的字符串
 */
function repeat(text,repeat){
    let s = text;
    for(let i = 0;i<repeat;i++){
        text = text + s;
    }
    return text;
}

const StringUtil = {
    isEmpty,
    isMapEmpty,
    repeat,
}

export default StringUtil;

/**
 * 这里是js常用 处理字符串的方法
 * 
 * 1.js 判断 字符串是否包含某个字符
 * s.indexOf('abc');不存在的话会返回 -1
 * 
 * 2.js 
 * 
 * 
 * 
 * 
 */