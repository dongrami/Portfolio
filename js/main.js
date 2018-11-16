/**** About me ****/
function aboutOver() {
    $(".hat").stop().animate({
        "bottom": "160%"
    }, 500);
    $(".hat-cont .gear1").stop().animate({
        "top": "0"
    });
    $(".hat-cont .gear2").stop().animate({
        "top": "-98%"
    }, 500);
    $(".hat-cont .gear3").stop().animate({
        "bottom": "55%"
    }, 800);
    $(".hat-cont .gear4").stop().animate({
        "top": "-70%"
    }, 800);
    $(".hat-cont").show();
}

function aboutBack() {
    $(".hat").stop().animate({
        "bottom": "100%"
    }, 500);
    $(".hat-cont .gear1").stop().animate({
        "top": "2%"
    });
    $(".hat-cont .gear2").stop().animate({
        "top": "2%"
    }, 500);
    $(".hat-cont .gear3").stop().animate({
        "bottom": "1%"
    }, 500);
    $(".hat-cont .gear4").stop().animate({
        "top": "5%"
    }, 500);
    $(".hat-cont").hide();
}
$(".about").mouseover(aboutOver);
$(".hat").mouseleave(aboutBack);


/**** My design ****/
$(".design").hover(function () {
        $(".ear-left").stop().animate({
            "left": "-63%"
        }, 500);
        $(".ear-1-left").stop().animate({
            "left": "-70%"
        }, 500);
        $(".ear-right").stop().animate({
            "right": "-63%"
        }, 500);
        $(".ear-1-right").stop().animate({
            "right": "-70%"
        }, 500);
    },
    function () {
        $(".ear-left").stop().animate({
            "left": "-13%"
        }, 500);
        $(".ear-1-left").stop().animate({
            "left": "-15%"
        }, 500);
        $(".ear-right").stop().animate({
            "right": "-13%"
        }, 500);
        $(".ear-1-right").stop().animate({
            "right": "-15%"
        }, 500);
    });


$(".web").hover(function () {
    $(".arm_bot02").stop().removeClass("arm_ani_back").addClass("arm_ani");
},
function(){ $(".arm_bot02").stop().removeClass("arm_ani").addClass("arm_ani_back")
});