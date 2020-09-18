/***************************************************************
*     NetEase New Mail System 2006 Version. [js3style Style]    *
*                                                              *
* File Name:  tools.js                                         *
* Written by:  Harry Chen                                      *
* Important: to use this script don't                          *
*            remove these comments                             *
* Version 1.0 (MSIE 5.0 above,Firefox1.0,Netscape.)            *
* Created Date: 2006-01-15                                     *
* Copyright：1997-2006 NetEase.com Inc. All rights reserved.   *
****************************************************************/



/**
 * 去掉字符串两边的空格
 *
 * @param   void   
 * @return {String} 去掉两边空格后的字符串    
 */
function fTrim(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * 判断是否数字
 *
 * @param   void  
 * @return {Boolean}  返回是否数字   
 */
function fIsNumber(){
  return (this.search(/^\d+$/g) == 0);
}

/**
 * 通过id获取对象
 *
 * @param  {string}args  id字符串，可以有多个参数，用逗号分开
 * @return {Object}      根据id返回相应的对象   
 */
function $() {
  var aElements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var oElement = arguments[i];
    if(typeof oElement == 'string'){
		oElement = document.getElementById(oElement);
	}
    if(arguments.length == 1){
		return oElement;
	}
    aElements.push(oElement);
  }
  return aElements;
}


function fTools_Init(){
	String.prototype.trim             = fTrim;            // 删除字符串两边的空格
	String.prototype.isNumber         = fIsNumber;        // 字符串是否是数字
}

/**
 * 引用外部js
 * @param {string} sUrl:外部js的url
 */
function fCommonGetScript(sUrl, sCharset){
    var oJs = document.createElement("script");
    oJs.setAttribute("src", sUrl);
    oJs.setAttribute("charset", sCharset || "utf-8");
    oJs.setAttribute("type", "text/javascript");
    document.body.appendChild(oJs);
    return true;
}

/**
 * 生活百宝箱中的焦点进入效果
 * @param {obj} 需要焦点的对象
 */
function fHelpFocus(obj){
    obj.style.borderColor='#889297';
    obj.style.backgroundColor='#FFFFE8'
}

/**
 * 生活百宝箱中的焦点失去效果
 * @param {obj} 失去焦点的对象
 */
function fHelpBlue(obj){
    obj.style.borderColor='#7F9DB9';
    obj.style.backgroundColor='#FFF';
}

fTools_Init();