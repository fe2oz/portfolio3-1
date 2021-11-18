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
        $('.cho3').fadeOut();
        $('.cho4').fadeOut();
        $('.cho5').fadeOut();
        $('.cho6').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(2)').click(function(){
        $('.cho2').fadeIn();
        $('.cho1').fadeOut();
        $('.cho3').fadeOut();
        $('.cho4').fadeOut();
        $('.cho5').fadeOut();
        $('.cho6').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(3)').click(function(){
        $('.cho3').fadeIn();
        $('.cho1').fadeOut();
        $('.cho2').fadeOut();
        $('.cho4').fadeOut();
        $('.cho5').fadeOut();
        $('.cho6').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(4)').click(function(){
        $('.cho4').fadeIn();
        $('.cho1').fadeOut();
        $('.cho2').fadeOut();
        $('.cho3').fadeOut();
        $('.cho5').fadeOut();
        $('.cho6').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(5)').click(function(){
        $('.cho5').fadeIn();
        $('.cho1').fadeOut();
        $('.cho2').fadeOut();
        $('.cho3').fadeOut();
        $('.cho4').fadeOut();
        $('.cho6').fadeOut();
    })

    $('.imgbox_cho li:nth-of-type(6)').click(function(){
        $('.cho6').fadeIn();
        $('.cho1').fadeOut();
        $('.cho2').fadeOut();
        $('.cho3').fadeOut();
        $('.cho4').fadeOut();
        $('.cho5').fadeOut();
    })
});