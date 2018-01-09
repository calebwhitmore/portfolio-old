$(document).ready(function() {
    parallax()

    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        if (scroll > 280) {
            $('.intro').addClass('fade');
        } 
        else {
            $('.intro').removeClass('fade');
        }
    });

    
    $(window).scroll( function(){
        var scroll = $(window).scrollTop();
        if (scroll > ($('body').height() - window.innerHeight - 280 ) ) {
            $('.outro').removeClass('fade');
        } 
        else {
            $('.outro').addClass('fade');
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
        $('.intro').children('div').css({
            'transform': 'translate(-50%, calc(-50% + ' + (scrolled * -0.5) + 'px)) scale( calc(1 - ' + (scrolled * 0.0002) + '))',
            '-webkit-transform':'translate(-50%, calc(-50% + ' + (scrolled * -0.5) + 'px))',
        });

        var scrolled2 = $(document).height() - ($(document).scrollTop() + window.innerHeight );
        $('.outro').children('div').css({
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
        $('.intro').addClass('fade2');
        $('.outro').addClass('fade2');
        $('.header').children('ul').toggleClass('projectDropdownUp');
        $('.header').children('ul').toggleClass('up20');
        $('.header').children('ul').toggleClass('down20');
        $('.arrow').toggleClass('invisible');
        $('.chevronDown').toggleClass('rotate180');
        parallax()
    });
    $('.hamburger').focusin(function() {
        $('.header').children('ul').toggleClass('autoHeight').toggleClass('opaque');
    });

    $('.hamburger').blur(function() {
      $('.header').children('ul').removeClass('autoHeight').removeClass('opaque');
    });

    $('.arrow').click(function(){
        $('body').toggleClass('noOverflow');
        $('.portfolio').removeClass('dock');
        $('.header').children('ul').toggleClass('projectDropdownUp');
        $('.header').children('ul').toggleClass('up20');
        $('.header').children('ul').toggleClass('down20');
        $('.arrow').addClass('invisible');
        $('.intro').removeClass('fade2');
        $('.outro').removeClass('fade2');
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


    //paralax function 

    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
            x: -((mouse.clientX - (window.innerWidth / 2)) / resistance)
            , y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
        });
    
    };
    
    $(document).mousemove(function (e) {
        //paralax for the eyes
        $('.paralax').parallax(-60, e);
        //paralax for the backgrounds
        $('.paralax2').parallax(-200, e);
    });

    //shows the arrow for projects when scrolled to the bottom
    $('.projectWrap').scroll( function(){
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 40) {
            $('.arrow').addClass('arrowScrollBottom');
        } else {
            $('.arrow').removeClass('arrowScrollBottom');
        } 
    });

    //hamburger click animation
    $('.hamburger').click(function() {
        $(this).children('.bar1').toggleClass('bar1ani');
        $(this).children('.bar2').toggleClass('bar2ani');
        $(this).children('.bar3').toggleClass('bar3ani');
    });
});