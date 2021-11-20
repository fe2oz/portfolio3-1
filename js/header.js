

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