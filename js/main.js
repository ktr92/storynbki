$(document).ready(function() {

    $(function() {
        $("input[type=checkbox]").click(function(){
            if ($(this).closest('form').find('input[type=checkbox]:checked').length == 0) {
                $(this).closest('form').find('[type=submit]').prop('disabled', true);
            }
            else {
                 $(this).closest('form').find('[type=submit]').prop('disabled', false);
            }
        });
    });

    $('.menubutton').on('click', function() {
        $(this).toggleClass('active');
        $('.search__full_header').toggle();
        
        $('.mainmenu ').slideToggle();
        //$('.s-overlay').toggleClass('active_headertop');
    });



    $('.categories__button').on('click', function() {
        $(this).toggleClass('active');
        $(this).siblings('.categories__items').slideToggle();
     
    });

    $('.newssort__current').on('click', function() {
        $(this).toggleClass('active');
        $(this).siblings('.newssort__items').slideToggle();
     
    });


    jQuery.fn.pos = function () {
       var elem = $(this).attr('data-id');
       var offset = $(this).offset();
       var diff_out = $(this).outerHeight();
      

        var type = $('.asidecols__aside').find('[data-id='+elem+']').attr("data-position");
        console.log(type);

        if (type=="top") {
            $('.asidecols__aside').find('[data-id='+elem+']').offset({top: offset.top + diff_out + 35});
        }

       if (type=="bottom") {
            var diff_inner = Math.abs($(this).height() - $('.asidecols__aside').find('[data-id='+elem+']').height());
            $('.asidecols__aside').find('[data-id='+elem+']').offset({top: offset.top - diff_inner});
        }

       
       return this;
    }


    if ($('[data-id]').length != 0) {
        $('.asidecols__col').find('[data-id]').each(function() {
        $(this).pos();
    });
    }



    (function($) {
        $(function() {

            $('ul.tabs__caption_js').on('click', 'li:not(.active)', function() {
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('div.tabs').find('div.prevblock__item').removeClass('active').eq($(this).index()).addClass('active');

            });

        });
    })(jQuery);

    



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
