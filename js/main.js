/**** About me ****/
function aboutOver() {
    $(".hat").stop().animate({"bottom": "160%"}, 300);
    $(".hat-cont .gear1").stop().animate({"top": "0"});
    $(".hat-cont .gear2").stop().animate({"top": "-98%"}, 500);
    $(".hat-cont .gear3").stop().animate({"bottom": "55%"}, 800);
    $(".hat-cont .gear4").stop().animate({"top": "-70%"}, 800);
    $(".hat-cont").show();
}

function aboutBack() {
    $(".hat").stop().animate({"bottom": "100%"}, 300);
    $(".hat-cont .gear1").stop().animate({"top": "2%"});
    $(".hat-cont .gear2").stop().animate({"top": "2%"}, 500);
    $(".hat-cont .gear3").stop().animate({"bottom": "1%"}, 500);
    $(".hat-cont .gear4").stop().animate({"top": "5%"}, 500);
    $(".hat-cont").hide();
}
$(".about").mouseover(aboutOver);
$(".hat").mouseleave(aboutBack);


/**** My design ****/
function designOver() {
        $(".ear-left").stop().animate({"left": "-63%"}, 300);
        $(".ear-1-left").stop().animate({"left": "-70%"}, 300);
        $(".ear-right").stop().animate({"right": "-63%"}, 300);
        $(".ear-1-right").stop().animate({"right": "-70%"}, 300);
        $(".ear-gear1").stop().animate({"left": "0%"}, 500);
        $(".ear-gear2").stop().animate({"right": "0%"}, 500);
    }
function designBack() {
        $(".ear-left").stop().animate({"left": "-13%"}, 300);
        $(".ear-1-left").stop().animate({"left": "-15%"}, 300);
        $(".ear-right").stop().animate({"right": "-13%"}, 300);
        $(".ear-1-right").stop().animate({"right": "-15%"}, 300);
        $(".ear-gear1").stop().animate({"left": "100%"}, 500);
        $(".ear-gear2").stop().animate({"right": "100%"}, 500);
    };
    $(".design").mouseover(designOver);
    $(".ear").mouseleave(designBack);

$(".web").hover(function () {
    $(".arm_bot02").stop().removeClass("arm_ani_back").addClass("arm_ani");
},
function(){ $(".arm_bot02").stop().removeClass("arm_ani").addClass("arm_ani_back")
});