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

    $(document).keyup(function(e) {
        if(e.keyCode == 27) {
           
            $('.search__full_header').show();
            $('.s-overlay').removeClass('active_search');
            $('.mainmenu ').slideUp();
            $('.menubutton').removeClass('active');
        };
    });

    $('.menubutton').on('click', function() {
        $(this).toggleClass('active');
        $('.search__full_header').toggle();
        $('.s-overlay').toggleClass('active_search');
        $('.mainmenu ').slideToggle();
        //$('.s-overlay').toggleClass('active_headertop');
    });

     $('.s-overlay').on('click', function() {
        $(this).toggleClass('active_search');
        $('.search__full_header').toggle();
        $('.mainmenu ').slideToggle();
        $('.menubutton').toggleClass('active');
        });

 


    $('.categories__button').on('click', function() {
        $(this).toggleClass('active');
        $(this).siblings('.categories__items').slideToggle();
     
    });

    $('.newssort__current').on('click', function() {
        $(this).toggleClass('active');
        $(this).siblings('.newssort__items').slideToggle();
     
    });

    $('.input.search__input').on('click', function() {
        $(this).removeAttr('placeholder');
     
    });

    


   
    jQuery.fn.posDesktop = function () {
       var elem = $(this).attr('data-id');
       var offset = $(this).offset();
       var diff_out = $(this).outerHeight();
      

        var type = $('.asidecols__aside').find('[data-id='+elem+']').attr("data-position");
        console.log(type);

        if (type=="top") {
            $('.asidecols__aside').find('[data-id='+elem+']').offset({top: offset.top + diff_out + 25});
        }

       if (type=="bottom") {
            var diff_inner = Math.abs($(this).height() - $('.asidecols__aside').find('[data-id='+elem+']').height());
            $('.asidecols__aside').find('[data-id='+elem+']').offset({top: offset.top - diff_inner});
        }

       
       return this;
    }



     if ($(window).width() > 959) { 
         if ($('[data-id]').length != 0) {
                $('.asidecols__col').find('[data-id]').each(function() {
                $(this).posDesktop();
             });
            }

     }
     else {
        
     }


    $(window).on('resize', function(){

      if ($(window).width() > 959) { 
         if ($('[data-id]').length != 0) {
                $('.asidecols__col').find('[data-id]').each(function() {
                $(this).posDesktop();
             });
            }

     }
     else {
       
     }
    });


    $('.accordeon_type1 .accordeon-titlejs').click(function (event) {
        $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).hide(300).removeClass('active');
        $(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        /* $([document.documentElement, document.body]).animate({
            scrollTop: $(this).offset().top
        }, 400);*/
        $(this).next('.accordeon-contentjs').slideToggle();
    });
   

    $('.accordeon_type2 .accordeon-titlejs').click(function (event) {
        $(this).closest('.accordeon-js').find('.accordeon-contentjs').not($(this).next()).removeClass('active');
        $(this).closest('.accordeon-js').find('.accordeon-titlejs').not($(this)).removeClass('active');
        $(this).toggleClass('active');
        /* $([document.documentElement, document.body]).animate({
            scrollTop: $(this).offset().top
        }, 400);*/
        $(this).next('.accordeon-contentjs').toggleClass('active');
    });
   
   
});




