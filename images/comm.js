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
		document.getElementById('searchhot').innerHTML=" <a href='http://list.mp3.baidu.com/list/topmp3.html?id=1' target='_blank'>MP3���а�</a>��<a href='http://list.mp3.baidu.com/list/newhits.html?id=1?top1' target='_blank'>�¸�TOP100</a>��<a href='http://list.mp3.baidu.com/topso/mp3topsong.html?id=1?top2' target='_blank'>����TOP500</a>��<a href='http://list.mp3.baidu.com/list/top200.htm?id=1?top3' target='_blank'>����TOP200</a>��<a href='http://list.mp3.baidu.com/list/dj.html?top10' target='_blank'>����DJ</a>";
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
		document.getElementById('searchhot').innerHTML=" <a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=����'>����</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=�Ϻ�'>�Ϻ�</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=����'>����</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=����'>����</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=������'>������</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=�йش�'>�йش�</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=��������'>��������</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=Խ�㹫԰'>Խ�㹫԰</a>��<a href='http://ditu.google.cn/maps?ie=gb&hl=zh-CN&client=aff-avalanche&forid=1&channel=prefill&q=�Ϻ������ʹ��'>�Ϻ������ʹ��</a>";
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
		document.getElementById('searchhot').innerHTML=" <a href='http://translate.google.cn/translate_t?hl=zh-CN' target='_blank'>�ȸ跭��</a>";
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
		document.getElementById('searchhot').innerHTML=" <a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=�ʼǱ�����'>�ʼǱ�����</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=�������'>�������</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=�¿��ֻ�'>�¿��ֻ�</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=ƽ�����'>ƽ�����</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=MP4'>MP4��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=����ͷ'>����ͷ</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=���ϵ���'>���ϵ���</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=���������'>���������</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=PSP'>PSP</a>��<a href='http://search1.taobao.com/browse/search_auction.htm?commend=all&sort=&q=����'>����</a>  <a href='http://www.youa.com' target='_blank'>�ٶ��а�</a>   <a href='http://www.eachnet.com/' target='_blank'>��Ȥ��</a>   <a href='http://www.dangdang.com/' target='_blank'>������</a>   <a href='http://www.paipai.com/' target='_blank'>������</a>   <a href='http://www.jd.com/' target='_blank'>�����̳�</a>";
	}
}

function doCopyClick(CopyText) {
    clipboardData.setData('text', CopyText);
    alert("���Ƴɹ�����ճ�������QQ/MSN���Ƽ�����ĺ��ѣ�");
}