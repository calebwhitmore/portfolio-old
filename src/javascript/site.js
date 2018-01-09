$(document).ready(function() {
    parallax()

    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        if (scroll > 280) {
            $('.header').addClass('fade');
        } 
        else {
            $('.header').removeClass('fade');
        }
    });

    
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        if (scroll > ($('body').height() - window.innerHeight - 280 ) ) {
            $('.footer').removeClass('fade');
        } 
        else {
            $('.footer').addClass('fade');
        }
    });

    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
            $('.eyebrow').addClass('eyebrowUp');
        }
        else {
            $('.eyebrow').removeClass('eyebrowUp');
        }
    });
    
    function parallax(){
        var scrolled = $(document).scrollTop();
        $('.header').children('div').css({
            'transform': 'translate(-50%, calc(-50% + ' + (scrolled * -0.5) + 'px)) scale( calc(1 - ' + (scrolled * 0.0002) + '))',
            '-webkit-transform':'translate(-50%, calc(-50% + ' + (scrolled * -0.5) + 'px))',
        });

        var scrolled2 = $(document).height() - ($(document).scrollTop() + window.innerHeight );
        $('.footer').children('div').css({
            'transform': 'translate(-50%, calc(50% - ' + (scrolled2 * -0.5) + 'px))',
            '-webkit-transform':'translate(-50%, calc(-50% - ' + (scrolled2 * -0.5) + 'px))',
        });
    };
    
    $(window).scroll(function(e){
        parallax()
        
    });
    
    $('.projectButton').click(function(){
        $(window).scrollTop($('.portfolio').offset().top - 40);
        $('body').toggleClass('noOverflow');
        $('.portfolio').toggleClass('dock');
        $('.header').addClass('fade2');
        $('.footer').addClass('fade2');
        $('.menu').children('ul').toggleClass('projectDropdownUp');
        $('.menu').children('ul').toggleClass('up20');
        $('.menu').children('ul').toggleClass('down20');
        $('.arrow').toggleClass('invisible');
        $('.chevronDown').toggleClass('rotate180');
        parallax()
    });
    $('.hamburger').focusin(function() {
        $('.menu').children('ul').toggleClass('autoHeight').toggleClass('opaque');
    });

    $('.hamburger').blur(function() {
      $('.menu').children('ul').removeClass('autoHeight').removeClass('opaque');
    });

    $('.arrow').click(function(){
        $('body').toggleClass('noOverflow');
        $('.portfolio').removeClass('dock');
        $('.menu').children('ul').toggleClass('projectDropdownUp');
        $('.menu').children('ul').toggleClass('up20');
        $('.menu').children('ul').toggleClass('down20');
        $('.arrow').addClass('invisible');
        $('.header').removeClass('fade2');
        $('.footer').removeClass('fade2');
        $('.chevronDown').removeClass('rotate180');
        $('.projectWrap').css({
            'opacity': '0', 
        });
        $('.projectWrap').children('.projectContents').css({
            'transform': 'translate(0px, 240px) scale(0.8)',
            'opacity': '0', 
        });
        $('.projectWrap').css({
            'overflow-y': 'hidden',
            'z-index': '8',
        });
        parallax()
    });
    
    $('.projectButton').hover(function(){
        $(this).children('.background').toggleClass('backgroundAnimation')
    });

    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
            x: -((mouse.clientX - (window.innerWidth / 2)) / resistance)
            , y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
        });
    
    };
    
    $(document).mousemove(function (e) {
        $('.paralax').parallax(-60, e);
        $('.paralax2').parallax(-200, e);
    });

    $('.projectWrap').scroll( function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 40) {
            $('.arrow').addClass('arrowScrollBottom');
        } else {
            $('.arrow').removeClass('arrowScrollBottom');
        } 
    });

    $('.hamburger').click(function() {
        $(this).children('.bar1').toggleClass('bar1ani');
        $(this).children('.bar2').toggleClass('bar2ani');
        $(this).children('.bar3').toggleClass('bar3ani');
    });
});