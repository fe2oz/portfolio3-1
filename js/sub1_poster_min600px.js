

$(function(){
    $('.prev').click(function(){
        $('.tour_poster_list li:last').prependTo('.tour_poster_list');
        $('.tour_poster_list').css('margin-left', -0);
        $('.tour_poster_list').stop().alimate({marginLeft:0}, 500);
    })

    $('.next').click(function(){
        $('.tour_poster_list').stop().animate({marginLeft:-200}, 500, function(){
            $('.tour_poster_list li:first').appendTo('.tour_poster_list');
            $('.tour_poster_list').css({marginLeft:0});
        })
    })
});
