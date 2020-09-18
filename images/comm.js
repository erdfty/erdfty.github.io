// JavaScript Document

function baiduSub(){
	if (formbaidu.type.value=="webpage"){
		formbaidu.action="http://www.baidu.com/s";
		formbaidu.wd.value=formbaidu.word.value;
		formbaidu.ct.value=0;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=-0;
		formbaidu.bs.value="";
		formbaidu.q.value="";
	}
	if (formbaidu.type.value=="mp3"){
		formbaidu.action="http://www.baidu.com/m";
		formbaidu.wd.value="";
		formbaidu.ct.value=134217728;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=0;
		formbaidu.bs.value="";
		formbaidu.q.value="";
	}
	if (formbaidu.type.value=="images"){
		formbaidu.action="http://image.baidu.com/i";
		formbaidu.wd.value="";
		formbaidu.ct.value=201326592;
		formbaidu.tn.value="baiduimage";
		formbaidu.cl.value=2;
		formbaidu.lm.value=-1;
		formbaidu.bs.value="";
		formbaidu.q.value="";
	}
	if (formbaidu.type.value=="video"){
		formbaidu.action="http://video.baidu.com/v";
		formbaidu.wd.value="";
		formbaidu.ct.value=301989888;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=-0;
		formbaidu.bs.value="";
		formbaidu.q.value="";
	}
	if (formbaidu.type.value=="ditu"){
		formbaidu.action="http://ditu.google.cn/maps";
		formbaidu.wd.value="";
		formbaidu.ct.value=0;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=-0;
		formbaidu.bs.value="";
		formbaidu.q.value=formbaidu.word.value;
	}
	if (formbaidu.type.value=="translator"){
		formbaidu.action="http://www.iciba.com/"+formbaidu.word.value;
		formbaidu.wd.value="";
		formbaidu.ct.value=0;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=-0;
		formbaidu.bs.value=formbaidu.word.value;
		formbaidu.q.value="";
	}
	if (formbaidu.type.value=="taobao"){
		formbaidu.action="http://search1.taobao.com/browse/search_auction.htm?at_topsearch=1";
		formbaidu.wd.value="";
		formbaidu.ct.value=0;
		formbaidu.tn.value="";
		formbaidu.cl.value=0;
		formbaidu.lm.value=-0;
		formbaidu.bs.value="";
		formbaidu.q.value=formbaidu.word.value;
	}
	return true;
}

function googleSub(){
	if (formgoogle.type.value=="webpage")
	{
		formgoogle.action="http://www.google.cn/search";
	}
	if (formgoogle.type.value=="images")
	{
		formgoogle.action="http://images.google.cn/images";
	}
	if (formgoogle.type.value=="video")
	{
		formgoogle.action="http://www.gougou.com/search";
		formgoogle.search.value=formgoogle.q.value;
	}
}

function baiduInput(){
	formgoogle.q.value=formbaidu.word.value;
}

function googleInput(){
	formbaidu.word.value=formgoogle.q.value;
}

function tabSwitch(id){
	if (id=="webpage"){
		document.getElementById('tabwebpage').className="activated";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="normal";	
		//-------------------------
		formbaidu.type.value="webpage";
		formgoogle.type.value="webpage";
		formbaidu.baidulogo.src="images/baidu.gif";
		document.getElementById('baidusubmit').src="images/search_baidu.gif";
		formgoogle.googlelogo.src="images/google.gif";
		document.getElementById('googlesubmit').src="images/search_google.gif";				
		document.getElementById('googlesearch').style.display = "";
		document.getElementById('searchhot').innerHTML="";
	}
	if (id=="mp3"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="activated";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="normal";
		//-------------------------
		formbaidu.type.value="mp3";			
		formbaidu.baidulogo.src="images/baidu_mp3.gif";
		document.getElementById('baidusubmit').src="images/search_baidu.gif";
		formgoogle.googlelogo.src="images/google.gif";
		document.getElementById('googlesubmit').src="images/search_google.gif";		
		document.getElementById('googlesearch').style.display = "none";
		document.getElementById('searchhot').innerHTML=" <a href='http://list.mp3.baidu.com/list/topmp3.html?id=1' target='_blank'>MP3排行榜</a>　<a href='http://list.mp3.baidu.com/list/newhits.html?id=1?top1' target='_blank'>新歌TOP100</a>　<a href='http://list.mp3.baidu.com/topso/mp3topsong.html?id=1?top2' target='_blank'>歌曲TOP500</a>　<a href='http://list.mp3.baidu.com/list/top200.htm?id=1?top3' target='_blank'>歌手TOP200</a>　<a href='http://list.mp3.baidu.com/list/dj.html?top10' target='_blank'>热舞DJ</a>";
	}
	if (id=="images"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="activated";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="normal";
		//-------------------------
		formbaidu.type.value="images";
		formgoogle.type.value="images";
		formbaidu.baidulogo.src="images/baidu_image.gif";
		document.getElementById('baidusubmit').src="images/search_baidu.gif";
		formgoogle.googlelogo.src="images/google.gif";
		document.getElementById('googlesubmit').src="images/search_google.gif";
		document.getElementById('googlesearch').style.display = "";
		document.getElementById('searchhot').innerHTML="";
	}
	if (id=="video"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="activated";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="normal";
		//-------------------------
		formbaidu.type.value="video";
		formgoogle.type.value="video";
		formbaidu.baidulogo.src="images/baidu_video.gif";
		document.getElementById('baidusubmit').src="images/search_baidu.gif";
		formgoogle.googlelogo.src="images/gougou.gif";
		document.getElementById('googlesubmit').src="images/search_gougou.gif";
		document.getElementById('googlesearch').style.display = "";
		document.getElementById('searchhot').innerHTML="";
	}
	if (id=="ditu"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="activated";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="normal";
		//-------------------------
		formbaidu.type.value="ditu";
		formbaidu.baidulogo.src="images/google_map.gif";
		document.getElementById('baidusubmit').src="images/search_ditu.gif";
		document.getElementById('googlesearch').style.display = "none";
		document.getElementById('searchhot').innerHTML=" <a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=北京'>北京</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=上海'>上海</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=广州'>广州</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=深圳'>深圳</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=王府井'>王府井</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=中关村'>中关村</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=东方明珠'>东方明珠</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=越秀公园'>越秀公园</a>　<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=上海市世纪大道'>上海市世纪大道</a>";
	}
	if (id=="translator"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="activated";
		document.getElementById('tabtaobao').className="normal";
		//-------------------------
		formbaidu.type.value="translator";			
		formbaidu.baidulogo.src="images/iciba.gif";
		document.getElementById('baidusubmit').src="images/search_iciba.gif";
		document.getElementById('googlesearch').style.display = "none";
		document.getElementById('searchhot').innerHTML=" <a href='http://translate.google.cn/translate_t?hl=zh-CN' target='_blank'>谷歌翻译</a>";
	}
	if (id == "taobao"){
		document.getElementById('tabwebpage').className="normal";
		document.getElementById('tabmp3').className="normal";
		document.getElementById('tabimages').className="normal";
		document.getElementById('tabvideo').className="normal";
		document.getElementById('tabditu').className="normal";
		document.getElementById('tabtranslator').className="normal";
		document.getElementById('tabtaobao').className="activated";
		//-------------------------
				formbaidu.type.value="taobao";
		formbaidu.baidulogo.src="images/taobao.gif";
		document.getElementById('baidusubmit').src="images/search_taobao.gif";
		document.getElementById('googlesearch').style.display = "none";
		document.getElementById('searchhot').innerHTML=" <a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=笔记本电脑'>笔记本电脑</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=数码相机'>数码相机</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=新款手机'>新款手机</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=平板电视'>平板电视</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=MP4'>MP4　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=摄像头'>摄像头</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=掌上电脑'>掌上电脑</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=数码摄像机'>数码摄像机</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=PSP'>PSP</a>　<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=美容'>美容</a>  <a href='http://www.youa.com' target='_blank'>百度有啊</a>   <a href='http://www.eachnet.com/' target='_blank'>易趣网</a>   <a href='http://www.dangdang.com/' target='_blank'>当当网</a>   <a href='http://www.paipai.com/' target='_blank'>拍拍网</a>   <a href='http://www.jd.com/' target='_blank'>京东商城</a>";
	}
}

function doCopyClick(CopyText) {
    clipboardData.setData('text', CopyText);
    alert("复制成功，请粘贴到你的QQ/MSN上推荐给你的好友！");
}