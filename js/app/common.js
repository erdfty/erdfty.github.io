nie.define(function(){

    'use strict';

    var mbshare = nie.require("nie.util.mobiShare2");

    var Controller = {

        initAttention: function() {
            var $popAttention = $( '.attention-pop' );
            $( '#btn_attention' ).click(function() {
                $popAttention.show();
                setTimeout( function() {
                    $popAttention.addClass( 'show' );
                }, 100);
            });

            $popAttention.click(function() {
                $popAttention.removeClass( 'show' );

                setTimeout( function() {
                    $popAttention.hide();
                }, 300);

            });
        },

        initShare: function() {

            // 设置分享
            MobileShare.init({
                title       : $('#share_title').html(), //分享给朋友的分享标题
                desc        : $('#share_desc').html(), //分享给朋友的分享描述
                circleTitle : $('#share_timeline').html(), //分享到朋友圈的标题。不填则与title一致
                imgurl      : $('#share_pic').attr('data-src'), //分享图片
                guideText   : $("#share_guide").html(), //微信中点分享按钮（参数button）显示的分享引导语
                qrcodeIcon  : $("#qr_icon").attr('data-src')//二维码图标
            });


            // 点击分享按钮，显示分享弹层
            $( '#btn_share' ).click(function() {
                MobileShare.showShare();
            });
        },

        initOriTip: function() {
            // 横屏提示
            hengshuping();
            function hengshuping(){
                if(window.orientation == 90||window.orientation == -90 ){
                    $('.hp').show();
                    $('body,html').css({'overflow':'hidden',height:'100%'});
                }else{
                    $('.hp').hide();
                    $('body,html').css({'overflow-y':'auto',height:'auto'});

                }
            }
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
        },
        
        bind: function() {
            var $body = $( 'body,html' );
            $( '.btn_toTop' ).click(function() {
                $body.scrollTop(0);
                return false;
            });
        },

        init: function() {
            this.initShare();
            this.initAttention();
            this.bind();
            this.initOriTip();
        }
    }
    //横竖屏


    Controller.init();
    
    
    
    
});
