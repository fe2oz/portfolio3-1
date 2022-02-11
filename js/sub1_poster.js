

$(function(){
    $('.prev').click(function(){
        var chars = $(".tour_poster_list li").width();
        $(".tour_poster_list").stop().animate({marginLeft:chars}, function(){
            $('.tour_poster_list').css({marginLeft:0});
            $('.tour_poster_list li:last').prependTo('.tour_poster_list');
        })
    })

    $('.next').click(function(){
        var chars = $(".tour_poster_list li").width();
        $('.tour_poster_list').stop().animate({marginLeft:-chars}, function(){
            $('.tour_poster_list li:first').appendTo('.tour_poster_list');
            $('.tour_poster_list').css({marginLeft:0});
        })
    })
});

$(function(){
    $('.poster1').mouseover(function(){
        $('.p_text1').css("opacity", "1");
    });

    $('.poster1').mouseleave(function(){
        $('.p_text1').css("opacity", "0");
    });

    $('.poster2').mouseover(function(){
        $('.p_text2').css("opacity", "1");
    });

    $('.poster2').mouseleave(function(){
        $('.p_text2').css("opacity", "0");
    });

    $('.poster3').mouseover(function(){
        $('.p_text3').css("opacity", "1");
    });

    $('.poster3').mouseleave(function(){
        $('.p_text3').css("opacity", "0");
    });

    $('.poster4').mouseover(function(){
        $('.p_text4').css("opacity", "1");
    });

    $('.poster4').mouseleave(function(){
        $('.p_text4').css("opacity", "0");
    });

    $('.poster5').mouseover(function(){
        $('.p_text5').css("opacity", "1");
    });

    $('.poster5').mouseleave(function(){
        $('.p_text5').css("opacity", "0");
    });

    $('.poster6').mouseover(function(){
        $('.p_text6').css("opacity", "1");
    });

    $('.poster6').mouseleave(function(){
        $('.p_text6').css("opacity", "0");
    });

    $('.poster7').mouseover(function(){
        $('.p_text7').css("opacity", "1");
    });

    $('.poster7').mouseleave(function(){
        $('.p_text7').css("opacity", "0");
    });

    $('.poster8').mouseover(function(){
        $('.p_text8').css("opacity", "1");
    });

    $('.poster8').mouseleave(function(){
        $('.p_text8').css("opacity", "0");
    });
});