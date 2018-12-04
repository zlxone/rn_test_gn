/*
 * create by AbyssKitty on 2017/12/12
 * 全局配置文件 配置存储storage的type值
 * 注意：注意：注意：键值命名必须使用驼峰命名法，不能带下划线
 */
"use strict";
var storageType = {
    //键名：纯大写+下划线
    //键值：小驼峰命名法，storage规定表名不准带下划线。
    key : 'value',

    //存储userbean
    TYPE_STORAGE_USERBEAN : 'typeUserBeanbrzj',
    //存储 手机号 密码
    TYPE_STORAGE_PHONEANDPASSWORD : 'typeUserbrzj',
    //推送通知列表
    TYPE_STORAGE_JPUSH_MOADULE : 'typeJPushModulebrzj',
    //是否第一次安装app
    TYPE_STORAGE_ONE_MOADULE : 'typeOnebrzj',
    //缓存数据
    TYPE_STORAGE_CLEAN : 'typeCleanbrzj',
    //多语言管理
    TYPE_LANGUAGE_BRZJ : 'typeLanguagebrzj',
    //是否是每天 第一次打开
    TYPE_TIMEONE_BRZJ : 'typeTimeOnebrzj',
    //缓存播放信息
    TYPE_TIMEPLAY_BRZJ : 'typeTimePlaybrzj',
}

export default storageType;