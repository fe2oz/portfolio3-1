


    $(function(){
        $('.new_merch_product_one:nth-of-type(1)').mouseover(function(){
            $('.details1').fadeIn();
        })

        $('.new_merch_product_one:nth-of-type(1)').mouseleave(function(){
            $('.details1').fadeOut();
        })

        $('.new_merch_product_one:nth-of-type(2)').mouseover(function(){
            $('.details2').fadeIn();
        })

        $('.new_merch_product_one:nth-of-type(2)').mouseleave(function(){
            $('.details2').fadeOut();
        })

        $('.new_merch_product_one:nth-of-type(3)').mouseover(function(){
            $('.details3').fadeIn();
        })

        $('.new_merch_product_one:nth-of-type(3)').mouseleave(function(){
            $('.details3').fadeOut();
        })

        $('.new_merch_product_one:nth-of-type(4)').mouseover(function(){
            $('.details4').fadeIn();
        })

        $('.new_merch_product_one:nth-of-type(4)').mouseleave(function(){
            $('.details4').fadeOut();
        })

        $('.new_merch_product_one:nth-of-type(5)').mouseover(function(){
            $('.details5').fadeIn();
        })

        $('.new_merch_product_one:nth-of-type(5)').mouseleave(function(){
            $('.details5').fadeOut();
        })

        $('.acc_product_one:nth-of-type(1)').mouseover(function(){
            $('.details6').fadeIn();
        })

        $('.acc_product_one:nth-of-type(1)').mouseleave(function(){
            $('.details6').fadeOut();
        })

        $('.acc_product_one:nth-of-type(2)').mouseover(function(){
            $('.details7').fadeIn();
        })

        $('.acc_product_one:nth-of-type(2)').mouseleave(function(){
            $('.details7').fadeOut();
        })

        $('.acc_product_one:nth-of-type(3)').mouseover(function(){
            $('.details8').fadeIn();
        })

        $('.acc_product_one:nth-of-type(3)').mouseleave(function(){
            $('.details8').fadeOut();
        })

        $('.acc_product_one:nth-of-type(4)').mouseover(function(){
            $('.details9').fadeIn();
        })

        $('.acc_product_one:nth-of-type(4)').mouseleave(function(){
            $('.details9').fadeOut();
        })

        $('.acc_product_one:nth-of-type(5)').mouseover(function(){
            $('.details10').fadeIn();
        })

        $('.acc_product_one:nth-of-type(5)').mouseleave(function(){
            $('.details10').fadeOut();
        })

    });

    $(function(){
        $('.prev').click(function(){
            $('.nv li:last').prependTo('.nv');
            $('.nv').css('margin-left', -0);
            $('.nv').stop().alimate({marginLeft:0}, 500);
        })

        $('.next').click(function(){
            $('.nv').stop().animate({marginLeft:-130}, 500, function(){
                $('.nv li:first').appendTo('.nv');
                $('.nv').css({marginLeft:0});
            })
        })
    });