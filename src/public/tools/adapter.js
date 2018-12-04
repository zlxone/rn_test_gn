/*
 * create by Abyss on 2018/10
 * version : 1.0
 * update : 2018/10
 * ==========================
 * 标题：适配工具类
 * 内容：
 * ==========================
 */
"use strict";
import { Dimensions, Platform,StatusBar } from 'react-native';

/**
 * 图片算法 - 根据图片实际宽高 生成适配手机屏幕以宽度为基准的高度
 * @param imgWidth 图片实际宽度
 * @param imgHeight 图片实际高度
 * @return 当宽度满屏时，图片显示的实际高度
 */
function imageHeightAdapter(imgWidth,imgHeight){
    return Dimensions.get('window').width * imgHeight / imgWidth;
}

// iPhoneX  
const X_WIDTH = 375;
const X_HEIGHT = 812;
// screen  
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
/**
 * 获取当前设备是不是iphoneX
 * 
 * iOS11前导航栏的高度是64，其中状态栏(StatusBar)的高度为20。iPhoneX的状态栏(StatusBar)高度变为了44(传感器区域高度)，如果是自定义的TopBar，这部分需要做相应的适配。
 * iPhoneX的底部增加了虚拟Home区，由于安全区域的原因默认TabBar的高度由49变为83，增高了34(Home区高度)，所以自定义的底部TabBar也需要需改其适配方案。
 * 
 * 375 * 667
 * 375 * 812
 * 
 * @return 当前设备是否是iphoneX true是 false否
 */
function isIphoneX(){
    return (  
        Platform.OS === 'ios' &&   
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||   
        (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))  
    )
}

/**
 * 设置status bar的属性
 * @param backgroundColor Android背景颜色
 * @param barStyle Android api >= 23 或 iOS的字体颜色样式
 */
function setStatusBarStyle(backgroundColor,barStyle){
    if(Platform.OS === 'android'){
        StatusBar.setBackgroundColor(backgroundColor,false);
    }
    StatusBar.setBarStyle(barStyle,false);
}
/**
 * 设置status bar的 默认白色属性
 * 
 * android ： 灰色背景+白色字体。适配某些手机只支持白色字体的bug。
 * ios ： 白色背景+黑色字体。
 * 
 * @param backgroundColor Android背景颜色
 * @param barStyle Android api >= 23 或 iOS的字体颜色样式 （api23或以上，但某些型号的android手机设置这个为黑色无效）
 */
function setStatusBarWhiteStyle(){
    if(Platform.OS === 'android'){
        StatusBar.setBackgroundColor('#979893',false); //android only
    }
    StatusBar.setBarStyle(Platform.OS === 'ios' ? 'dark-content' : 'light-content',false);
}
const adapterType = {
    STATUSBAR_LIGHT : 'light-content',
    STATUSBAR_DARK : 'dark-content',
}

const Adapter = {
    adapterType,
    imageHeightAdapter,
    isIphoneX,
    setStatusBarStyle,
    setStatusBarWhiteStyle,
}

export default Adapter;