$(document).ready(function(){

    // 마우스 오버 gnb
    var gnb = $('.gnb-wrap .gnb');
    var _depth1 = $('.gnb-wrap .gnb > ul > li');
    var _depth2 = $('.gnb-wrap .gnb .depth-menu ul');

    gnb.on('mouseenter focusin',function(e){
        $('.depth-menu').stop().slideDown()
    }).on('mouseleave',function(e){
        $('.depth-menu').stop().slideUp()
    });

    $('.gnb-wrap .gnb > ul > li > a').on('mouseenter focusin',function(e){
        _depth2.removeClass('active');
        $(this).siblings().children().addClass('active');
    })

    _depth1.on('mouseenter',function(e){
        $(this).addClass('active');
    }).on('mouseleave',function(e){
        _depth1.removeClass('active');
    });

});

  
