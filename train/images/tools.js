/***************************************************************
*     NetEase New Mail System 2006 Version. [js3style Style]    *
*                                                              *
* File Name:  tools.js                                         *
* Written by:  Harry Chen                                      *
* Important: to use this script don't                          *
*            remove these comments                             *
* Version 1.0 (MSIE 5.0 above,Firefox1.0,Netscape.)            *
* Created Date: 2006-01-15                                     *
* Copyright��1997-2006 NetEase.com Inc. All rights reserved.   *
****************************************************************/



/**
 * ȥ���ַ������ߵĿո�
 *
 * @param   void   
 * @return {String} ȥ�����߿ո����ַ���    
 */
function fTrim(){
  return this.replace(/(^\s*)|(\s*$)/g, "");
}


/**
 * �ж��Ƿ�����
 *
 * @param   void  
 * @return {Boolean}  �����Ƿ�����   
 */
function fIsNumber(){
  return (this.search(/^\d+$/g) == 0);
}

/**
 * ͨ��id��ȡ����
 *
 * @param  {string}args  id�ַ����������ж���������ö��ŷֿ�
 * @return {Object}      ����id������Ӧ�Ķ���   
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
	String.prototype.trim             = fTrim;            // ɾ���ַ������ߵĿո�
	String.prototype.isNumber         = fIsNumber;        // �ַ����Ƿ�������
}

/**
 * �����ⲿjs
 * @param {string} sUrl:�ⲿjs��url
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
 * ����ٱ����еĽ������Ч��
 * @param {obj} ��Ҫ����Ķ���
 */
function fHelpFocus(obj){
    obj.style.borderColor='#889297';
    obj.style.backgroundColor='#FFFFE8'
}

/**
 * ����ٱ����еĽ���ʧȥЧ��
 * @param {obj} ʧȥ����Ķ���
 */
function fHelpBlue(obj){
    obj.style.borderColor='#7F9DB9';
    obj.style.backgroundColor='#FFF';
}

fTools_Init();