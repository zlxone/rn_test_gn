/*
 * create by Abyss on 2017/11
 * version : 1.2
 * update : 2018/10
 * ==========================
 * 标题：配置公共类
 * 内容：包含全部配置、公共属性等(固定的)
 * ==========================
 */
"use strict";
import { Dimensions, Platform, } from 'react-native';
const type = {
    debug : 'debug',
    release : 'release',
}
const config = {
    /* 全局配置模块 */
    type : type.debug,  //当前模式 正式发布时改成 type.release ！！！！！！！！！！
    showLog : type === 'debug' ? true : false, //是否打印日志
    baseUrl : 'http://wanjiafengmian.pro1.lnkj1.com/', //全局接口域名
    baseImgUrl : 'http://wanjiafengmian.pro1.lnkj1.com', //全局图片路径前缀
    
    /* 公共属性模块 */
    OS : Platform.OS,//当前操作系统输出 => ios or  android
    version : Platform.OS === 'ios' ? '0.6.4' : '0.6.4', //程序里写死的一个版本
    width: Dimensions.get('window').width, //整个屏幕的宽度
    height: Dimensions.get('window').height, //整个屏幕的高度
}

export default config;