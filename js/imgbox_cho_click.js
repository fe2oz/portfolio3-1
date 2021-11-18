$(function(){
    $('.imgbox_cho li').click(function(){
        $('.imgbox_cho li').removeClass("active");
        $(this).addClass("active");
    })

    $('.imgbox_cho li').click(function(){
        $('.imgbox_cho li').removeClass("active");
        $(this).addClass("active");
    })

});

$(function(){
    $('.imgbox_cho li:nth-of-type(1)').click(function(){
        $('.cho1').fadeIn();
        $('.cho2').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(2)').click(function(){
        $('.cho2').fadeIn();
        $('.cho1').fadeOut();
    })
});