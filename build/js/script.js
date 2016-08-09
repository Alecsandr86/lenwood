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




});
