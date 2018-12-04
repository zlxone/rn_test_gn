/*
 * create by Abyss on 2018/10
 * version : 1.0
 * update : 2018/10
 * ==========================
 * 标题：正则验证
 * 内容：
 * ==========================
 */
"use strict";

/**
 * 传入text和正则过滤类别 返回结果text
 * @param {string} text 字符串
 * @param {*} type 正则类别
 * @return {string} 返回生成的字符串
 */
function filter (text,type) {
    return text.replace(type,"");
}

const RegExp = {
    RE_SPACE : /\s+/g, //过滤所有空格
    RE_PASSWORD : /^[0-9a-zA-Z_]{1,}$/, //只能输入数字字母下划线组成的字符串
    RE_NUMBER : /^[1-9]\d*$/, //1-9正整数过滤
    RE_SPECIAL_CHARACTERS : /[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g,//过滤所有特殊字符
    RE_NO_CHINESE : /[\u4e00-\u9fa5]/g, //过滤掉中文

    filter,
}

export default RegExp;