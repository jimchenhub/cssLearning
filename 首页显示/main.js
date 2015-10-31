$(document).ready(function(){
    var pageHeight = $(window).height();
    $('.page').height(pageHeight);
    $('.page .title').css('margin-top', (pageHeight/2-60)+"px");

    $(window).resize(function(){
        pageHeight = $(window).height();
        pageHeight = pageHeight < 400 ? 400 : pageHeight;
        $('.page').height(pageHeight);
        $('.page .title').css('margin-top', (pageHeight/2-60)+"px");
    }).scroll(function(){
        var heightTop = $(window).scrollTop();
        pageHeight = $(window).height();
        pageHeight = pageHeight < 400 ? 400 : pageHeight;

        var value = (Math.floor(heightTop/pageHeight)+1)*pageHeight;

        $('html,body').css({
            scrollTop : value+"px"
        });
    })

});