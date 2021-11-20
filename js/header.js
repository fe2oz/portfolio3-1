

$(function(){
    $('.menu').click(function(){
        $('.nv1').slideToggle();
    })
});

$(window).resize(function(){
    if(window.innerWidth>=480){
        $('.nv1').show();
    }

})

$(function(){
    $('.menu').mouseover(function(){
        $('.nv1').fadeIn();
    })

    $('.menu').mouseleave(function(){
        $('.nv1').fadeOut();
    })
});

