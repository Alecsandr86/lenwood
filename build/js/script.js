window.log = function(param){
    console.log(param);
};

$(document).ready(function(){

    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };

    var menu = $('.rm-nav').rMenu({
      minWidth: '991px'
    });

    $('.js-top-menu').bind('click',function(){
      $(this).find('.top-menu-mob').toggleClass('top-menu-mob-hover');
      $(this).next('.nav-top').slideToggle();
    });

    setTimeout(function() {
      $('select').styler();
    }, 100);

    $(window).on("load",function(){

        $('.wr-table').mCustomScrollbar({
					axis:"x",
					theme:"dark-thin",
					autoExpandScrollbar:true,
					advanced:{autoExpandHorizontalScroll:true}
				});
    });

    $('a[href^="#t"]').click(function(){
         var target = $(this).attr('href');
         $('html, body').animate({
             scrollTop: $(target).offset().top},1000);
         return false;
     });

     $('.footer-address__item').bind('click',function () {
       $(this).toggleClass('active').find('.hidden-my').slideToggle();
     });


});


$(function(){
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});
