$(document).ready(function() {

    new WOW().init();


    $('.kisteps__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        fade: true,
        dots: false,
        responsive: [{
            breakpoint: 999,
            settings: "unslick"
        }]

    });


    $(".kislide__image").click(function(e) {
        $(this).closest(".kisteps__container").find(".slick-slider").slick("slickNext");
    });


    $(".slideRight").click(function(e) {
        $(this).parent().parent().find(".slick-slider").slick("slickNext");
    });
    $(".slideLeft").click(function(e) {
        $(this).parent().parent().find(".slick-slider").slick("slickPrev");
    });


    $('.newsslider__slider').each(function() {


        var slToShow = 3;

        var slcount = $(this).find('.newscard__slide').length - slToShow + 1;


        var $slider = $(this);
        var $progressBar = $(this).parent().find('.progress');
        var $progressBarLabel = $(this).parent().find('.slider__label');

        var initcalc = 1.0 / slcount * 100;

        $progressBar
            .css('width', initcalc + '%')
            .attr('aria-valuenow', initcalc);

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slcount)) * 100;

            $progressBar
                .css('left', calc + '%')
                .attr('aria-valuenow', initcalc + calc);

        });



        $(this).on('init reInit', function(event, slick) {
            var amount = $(this).find('.newscard__slide').length;
            $(this).parent().find('.range').attr('max', amount);
        })

        $(this).on('afterChange', function(e, slick, currentSlide) {
            $(this).parent().find('.range').val(currentSlide + 1);
        })

        $(this).parent().find('.range').on('input change', function() {
            $(this).slick('slickGoTo', $(this).value - 1);
        });


        $(this).slick({
            infinite: false,
            slidesToShow: slToShow,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '0',
			autoplay: true,
			autoplaySpeed: 3000,
				dots: false,

        });
    });


    $('.partnersslider__slider').each(function() {

        var slToShow = 4;

        var slcount = $(this).find('.partnersslider__slide').length - slToShow + 1;


        var $slider = $(this);
        var $progressBar = $(this).parent().find('.progress');
        var $progressBarLabel = $(this).parent().find('.slider__label');

        var initcalc = 1.0 / slcount * 100;

        $progressBar
            .css('width', initcalc + '%')
            .attr('aria-valuenow', initcalc);

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            var calc = ((nextSlide) / (slcount)) * 100;

            $progressBar
                .css('width', initcalc + calc + '%')
                .attr('aria-valuenow', initcalc + calc);

        });



        $(this).slick({
            infinite: false,
            slidesToShow: slToShow,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '0',
            autoplay: true,
        autoplaySpeed: 3000,

            dots: false,
            responsive: [{
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }]

        });
    });




    $('.langs__current').on('click', function() {
        $(this).toggleClass('active');
        $(this).siblings('.langs__list').slideToggle();
    });
    $('.headertop__link a.current').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('clicked');
        $(this).parent().siblings('.headertop__link').slideToggle();
    });




    

    $('.menubutton').on('click', function() {
        $(this).toggleClass('active');
        $('.search__full_header').toggle();
        
        $('.mainmenu ').slideToggle();
        //$('.s-overlay').toggleClass('active_headertop');
    });

    (function($) {
        $(function() {

            $('ul.tabs__caption_js').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.prevblock__item').removeClass('active').eq($(this).index()).addClass('active');

            });

        });
    })(jQuery);

    if ($(window).width() <= 999) {
        $(window).scroll(function() {
            scroll = $(window).scrollTop();

            if (scroll >= 1) {
                $('.header').addClass('fixed');
                $('body').addClass('fixed');
            } else {
                $('.header').removeClass('fixed');
                $('body').removeClass('fixed');
            }
        });
    };

    if ($(window).width() > 999) {
        $(window).scroll(function() {
            scroll = $(window).scrollTop();

            if (scroll >= 1) {
                $('.header').addClass('fixed');
                $('body').addClass('fixed2');
            } else {
                $('.header').removeClass('fixed');
                $('body').removeClass('fixed2');
            }
        });
    };



    $('span.mobilemenuclose').click(function(e) {
        $('.mobilemenu').hide();
        $('.mobilemenu__item').hide();
        $('.mobilemenu__menu li').removeClass('active');
    });

    $('span.mobilemenubtn').click(function(e) {
        $('.mobilemenu').slideToggle();
    });

    $('.mobilemenu__title').click(function(e) {
        $(this).closest('.mobilemenu__item').toggle('slide');
        $('.mobilemenu__menu li').removeClass('active');
    });



    (function($) {
        $(function() {

            $('.mobilemenu__menu ul').on('click', 'li.mobilemenu__parent:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.mobilemenu__wrapper').find('div.mobilemenu__item').removeClass('active').eq($(this).index()).toggle('slide');

            });

        });
    })(jQuery);

});




$(document).ready(function() {
    'use strict';

    var $uiAccordion = $('.js-ui-accordion');

    $uiAccordion.accordion({
        collapsible: true,
        heightStyle: 'content',

        activate: function activate(event, ui) {
            var newHeaderId = ui.newHeader.attr('id');

            if (newHeaderId) {
                history.pushState(null, null, '#' + newHeaderId);
            }
        },

        create: function create(event, ui) {
            var $this = $(event.target);
            var $activeAccordion = $(window.location.hash);

            if ($this.find($activeAccordion).length) {
                $this.accordion('option', 'active', $this.find($this.accordion('option', 'header')).index($activeAccordion));
            }
        }
    });

    $(window).on('hashchange', function(event) {
        var $activeAccordion = $(window.location.hash);
        var $parentAccordion = $activeAccordion.parents('.js-ui-accordion');

        if ($activeAccordion.length) {
            $parentAccordion.accordion('option', 'active', $parentAccordion.find($uiAccordion.accordion('option', 'header')).index($activeAccordion));
        }
    });
});


$(document).ready(function() {

    $(".pkrbanks__slider").on("init", function(event, slick) {
        addCustomSlickAttributes();
        $(this).addClass("notchanged");
    });

    $('.pkrbanks__slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,

        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,

        responsive: [{
                breakpoint: 999,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },


        ]


    });



    $(".pkrbanks__slider").on("beforeChange", function(event, slick, current_slide_index, next_slide_index) {
        addCustomSlickAttributes();
        if (next_slide_index > current_slide_index) {
            $(this).addClass("changed");
            $(this).removeClass("notchanged");
        } else {
            $(this).addClass("changed2");
            $(this).removeClass("notchanged");
        }

    });

    function addCustomSlickAttributes() {
        // Remove old attributes
        $("[data-my-slick-attr]").removeAttr("data-my-slick-attr");

        // Iterate through each active slide and add our custom attribute
        $(".pkrbanks__slider .slick-active").each(function(index, el) {
            $(el).attr("data-my-slick-attr", index);
        })
    };

    if ($(window).width() < 481) {
        var koef = $(window).width() / 10 + 7;

        $(".pkrbanks__slider").find('.slick-list').css('padding-right', koef + '%');
    }

    if ($(window).width() < 481) {
	    $(window).resize(function() {
	        var koef = $(window).width() / 10 + 7 + $(window).width() / 150;

	        $(".pkrbanks__slider").find('.slick-list').css('padding-right', koef + '%');
	    });
	}
    (function($) {
        $(function() {

            $('ul.pagetabs__caption_js').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.pagetabs__content_js').removeClass('active').eq($(this).index()).addClass('active');

            });

        });
    })(jQuery);

    
    $('.pageaccordion__title').click(function (event) {
        $('.pageaccordion__content').not($(this).next()).hide().removeClass('active');
        $('.pageaccordion__title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $(this).next('.pageaccordion__content').slideToggle();
    });
    $('.pageaccordion2__title').click(function (event) {
        $('.pageaccordion2__content').not($(this).next()).hide().removeClass('active');
        $('.pageaccordion2__title').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        $('.pageaccordion2__item').not($(this).parent()).removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).next('.pageaccordion2__content').slideToggle();
    });
    $('.pageaccordion3__title').click(function (event) {

        $(this).toggleClass('active');
        $(this).next('.pageaccordion3__content').slideToggle();
    });

     (function ($) {
        $(function () {

            $('ul.tabs__captionforms').on('click', 'li:not(.active)', function () {
                if (!($(this).hasClass('expt'))) {
                    $(this).addClass('active').siblings().removeClass('active')
                        .closest('div.tabs').find('div.tabs__content_js').removeClass('active').eq($(this).index()).addClass('active');
                }
            });


        });
    })(jQuery);




});
