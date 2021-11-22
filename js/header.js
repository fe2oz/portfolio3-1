

$(function(){
    $('.menu').click(function(){
        $('.nv1').slideToggle();
    })
});

$(window).resize(function(){
    if(window.innerWidth>=1000){
        $('.nv1').show();
    }
})




