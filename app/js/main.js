$( document ).ready(function() {

    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn__active')
    });


    $('.menu-btn').on('click', function (e) {
        e.preventDefault();
        $('.header__nav').slideToggle();
    });

    $(window).resize(function () {
        if($(window).width() > 768) {
            $('.header__nav').removeAttr('style');
        }
    });

    //
    $('.projects-slider').slick({
        infinite: true,
        fade:true,
        appendArrows: '.arrows',
        prevArrow: '<button type="button" class="slick-prev">' +
                    '<img src="img/arrow-prew2.png" alt="">' +
                    '<span>previous project</span></button>',
        nextArrow: '<button type="button" class="slick-next">' +
                    '<span>next project</span>' +
                    '<img src="img/arrow-next-2.png" alt=""></button>',
    });



});
