nie.define("Index",function(){

    'use strict';
    //返回顶部函数
    var toTop=function(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    $('.cont_tab1 .cont_tab1_a').click(function(){
    	$('.cont_tab').toggleClass('cont_tab_show');
    })

    $('.cont_tabC').eq(0).css({'display':'block'});

    $('.cont_tab li').click(function(){
    	var test = $(this).find("a").html();
        var index = $(this).index();

        $('.cont_tab1_a').html(test + '<i></i>')
        $('.cont_tab').removeClass('cont_tab_show');


        var top1 = $(window).height();
        var top2 = document.getElementById('cont_nav').offsetTop;

        $('.cont_tabC').eq(index).css({'display':'block'}).siblings('.cont_tabC').css({'display':'none'});
         $('.cont_tab').removeClass('cont_tab_show');
         toTop();
        if(top2>=top1){
            $('.cont_nav').addClass('cont_nav_active1');
        }else{
            $('.cont_nav').removeClass('cont_nav_active1');
        }
    });

	var top1 = $(window).height();
	var top2 = document.getElementById('cont_nav').offsetTop;

	if(top2>=top1){
		$('.cont_nav').addClass('cont_nav_active1');
	}else{
		$('.cont_nav').removeClass('cont_nav_active1');
	}
    
    var timer = '';
    var ulH = $('.cont_nav').height();
    var contentH = $('.cont_bg').height();
    $(window).scroll(function(){
        var a = document.querySelector(".site_bottom").offsetTop;
        if($(window).scrollTop() >= 200){
            $('.cont_tab1').css('transform','translateY(-1rem)');
        }else{
            $('.cont_tab1').css('transform','translateY(0rem)');
        }
        timer = setTimeout(function(){
            contentH = $('.cont_bg').height();
            if (  +$(window).height() > contentH - $(window).scrollTop()  + ulH ) {
                $('#cont_nav').removeClass('cont_nav_active1');
            } else {
                $('#cont_nav').addClass('cont_nav_active1');
            }
            clearTimeout(timer);
        }, 0);
    })

});
