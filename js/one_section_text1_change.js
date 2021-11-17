


    $(function(){
        $('.nv li:nth-of-type(1)').click(function(){
            $(".changebox2").css("opacity", "1");
            $('.changebox1').css("opacity", "0");
            $('.changebox3').css("opacity", "0");
            $('.changebox4').css("opacity", "0");
            $('.changebox5').css("opacity", "0");
        })

        $('.nv li:nth-of-type(2)').click(function(){
            $(".changebox3").css("opacity", "1");
            $('.changebox1').css("opacity", "0");
            $('.changebox2').css("opacity", "0");
            $('.changebox4').css("opacity", "0");
            $('.changebox5').css("opacity", "0");
        })

        $('.nv li:nth-of-type(3)').click(function(){
            $('.changebox1').css("opacity", "1");
            $('.changebox2').css("opacity", "0");
            $('.changebox3').css("opacity", "0");
            $('.changebox4').css("opacity", "0");
            $('.changebox5').css("opacity", "0");
        })

        $('.nv li:nth-of-type(4)').click(function(){
            $('.changebox4').css("opacity", "1");
            $('.changebox1').css("opacity", "0");
            $('.changebox2').css("opacity", "0");
            $('.changebox3').css("opacity", "0");
            $('.changebox5').css("opacity", "0");
        })

        $('.nv li:nth-of-type(5)').click(function(){
            $('.changebox5').css("opacity", "1");
            $('.changebox1').css("opacity", "0");
            $('.changebox2').css("opacity", "0");
            $('.changebox3').css("opacity", "0");
            $('.changebox4').css("opacity", "0");
        })
    });

    



    