/*
 * create by Abyss on 2017/11
 * version : 2.0
 * update : 2018/10
 * ==========================
 * 标题：public总分发类
 * 内容：全局调用这个类，共享public方法参数  transparent
 * ==========================
 */
"use strict";
import config from './config/config';
import userInfo from './config/userInfo';
import Network from './net/Network';
import color from './res/color';
// import storage from './three_party/storage';
// import storageType from './three_party/storageType';
import ToastUtil from './three_party/toastUtil';
//import ToastLoad from './three_party/toastLoad';
import RegExp from './tools/filterRE';
import StringUtil from './tools/stringUtil';
import Adapter from './tools/adapter';
//import ImageCopy from './three_party/imageCopy';
//import Download from './three_party/download';

var R = {
    config,          //总配置文件
    userInfo,        //个人信息文件可变的
    color,           //颜色文件
    // storage,         //33333 三方缓存封装
    // storageType,     //33333 三方缓存类别枚举类
}
export default R;    //R 文件 全局调用总入口
export {
    Network,         //网络请求工具类
    StringUtil,      //字符串处理工具类
    Adapter,         //适配处理工具类
    ToastUtil,       //33333 三方toast组件封装
    RegExp,          //正则过滤工具类
    //ImageCopy,       //33333 三方图片选择封装
    //ToastLoad,       //33333 三方toast带动画的封装
    //Download,        //33333 下载 图片
}