$(function(){
    new WOW().init();
    $(window).on('scroll',function(){
        if($(window).scrollTop() >= 600){
            console.log('good');
            $('.main_nav_bar nav').addClass('navbar-light bg-light').removeClass('reset_opacity');
        }else{
            $('.main_nav_bar nav').addClass('reset_opacity').removeClass('navbar-light bg-light');
        }
    });

    $(".navbar li a").click(function (e) {

        e.preventDefault(); 
        

$(this).parent().addClass("active").siblings().removeClass("active")
        $("html").animate({

            scrollTop: $($(this).data("scroll")).offset().top  ,
            
        }, 1000);
        

        

        



    });
});