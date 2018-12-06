/**** My design ****/
function designOver() {
    $(".ear-left").stop().animate({"left": "-63%"}, 300);
    $(".ear-1-left").stop().animate({"left": "-70%"}, 300);
    $(".ear-right").stop().animate({"right": "-63%"}, 300);
    $(".ear-1-right").stop().animate({"right": "-70%"}, 300);
    $(".ear-gear1").stop().animate({"left": "0%"}, 500);
    $(".ear-gear2").stop().animate({"right": "0%"}, 600);
    $(".design").stop().animate({"left": "-105%"}, 300);
    $(".content02").stop().slideDown(500);
}
function designBack() {
    $(".ear-left").stop().animate({"left": "-13%"}, 300);
    $(".ear-1-left").stop().animate({"left": "-15%"}, 300);
    $(".ear-right").stop().animate({"right": "-13%"}, 300);
    $(".ear-1-right").stop().animate({"right": "-15%"}, 300);
    $(".ear-gear1").stop().animate({"left": "100%"}, 500);
    $(".ear-gear2").stop().animate({"right": "100%"}, 500);
    $(".design").stop().animate({"left": "-58%"}, 300);
    $(".content02").hide();

};
$(".ear-left").mouseover(designOver);
$(".exit-D").click(designBack);

/**** About me ****/
function aboutOver() {
    $(".hat").stop().animate({"bottom": "160%"}, 300);
    $(".hat-cont .gear1").stop().animate({"top": "0"});
    $(".hat-cont .gear2").stop().animate({"top": "-98%"}, 500);
    $(".hat-cont .gear3").stop().animate({"bottom": "55%"}, 800);
    $(".hat-cont .gear4").stop().animate({"top": "-70%"}, 800);
    $(".gear3").addClass("hat_ani");
    $(".hat-cont").show();
    $(".about").stop().animate({"top":"-75%"}, 300);
    $(".content01").stop().slideDown(500);
}

function aboutBack() {
    $(".hat").stop().animate({"bottom": "100%"}, 300);
    $(".hat-cont .gear1").stop().animate({"top": "2%"});
    $(".hat-cont .gear2").stop().animate({"top": "2%"}, 500);
    $(".hat-cont .gear3").stop().animate({"bottom": "1%"}, 500);
    $(".hat-cont .gear4").stop().animate({"top": "5%"}, 500);
    $(".gear3").removeClass("hat_ani");
    $(".content01").hide();
    $(".hat-cont").hide();
    $(".about").stop().animate({"top":"-20%"}, 300);
    $(".about-me").hide();
    $(".content01 li:first-child").stop().removeClass("contentAni");
    $(".text").show();
    $(".button-a").show();
    $(".design").show();
    $(".web").show();
    $(".skill").hide();
    $(".robot").stop().animate({"left": "50%"}, 1000);
    
}
$(".hat").mouseover(aboutOver);
$(".exit-A").click(aboutBack);



/*******web site****/
    function webOver() {
    $(".arm_bot02").stop().removeClass("arm_ani_back").addClass("arm_ani");
    $(".elbow-gear").stop().removeClass("elbow_ani_back").addClass("elbow_ani");
    $(".web").stop().animate({"top": "-30%","right": "-80%"}, 500);
    $(".content03").stop().slideDown(500);
};
function webBack() { 
    $(".arm_bot02").stop().removeClass("arm_ani").addClass("arm_ani_back");
    $(".elbow-gear").stop().removeClass("elbow_ani").addClass("elbow_ani_back");
    $(".web").stop().animate({"top": "-15%","right": "-58%"}, 500);
    $(".content03").hide();
};
$(".arm02").mouseover(webOver);
$(".exit-W").click(webBack);

/*** color ***/
    function bluecolor (){
        $(".bg").addClass("B-bg-color").removeClass("Y-bg-color");
        $(".hand-blank").addClass("B-bg-color").removeClass("Y-bg-color");
        $(".head").addClass("B-main-color").removeClass("Y-main-color");
        $(".b1").addClass("B-main-color").removeClass("Y-main-color");
        $(".arm01").addClass("B-main-color").removeClass("Y-main-color");
        $(".arm02").addClass("B-main-color").removeClass("Y-main-color");
        $(".arm_bot01").addClass("B-main-color").removeClass("Y-main-color");
        $(".arm_bot02").addClass("B-main-color").removeClass("Y-main-color");
        $(".hat").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-left").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-right").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".hand-neck01").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".hand-neck02").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".link01").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".link02").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".neck").addClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-1-left").addClass("B-line-color").removeClass("Y-line-color");
        $(".ear-1-right").addClass("B-line-color").removeClass("Y-line-color");
        $(".mouse").addClass("B-line-color").removeClass("Y-line-color");
        $(".chest").addClass("B-line-color").removeClass("Y-chest-color");
        $(".part1").addClass("B-part-color").removeClass("Y-part-color");
        $(".part2").addClass("B-part-color").removeClass("Y-part-color");
        $(".part3").addClass("B-part-color").removeClass("Y-part-color");
        $(".part2-1").addClass("B-part-color-a").removeClass("Y-part-color-a");
        $(".part3-1").addClass("B-part-color-b").removeClass("Y-part-color-b");
        $(".eye-1").addClass("B-eye-color").removeClass("Y-eye-color");
        $(".eye-2").addClass("B-eye-color").removeClass("Y-eye-color");
        $(".button-rec li").addClass("B-button-rec").removeClass("Y-button-rec");
        $(".button-rec li:first-child").addClass("B-button-rec1").removeClass("Y-button-rec1");
        $(".mouse").removeClass("Y-mouse-color");
    }
    $(".p-blue").click(bluecolor);
    

    function redcolor (){
        $(".bg").removeClass("B-bg-color").removeClass("Y-bg-color");
        $(".hand-blank").removeClass("B-bg-color").removeClass("Y-bg-color");
        $(".head").removeClass("B-main-color").removeClass("Y-main-color");
        $(".b1").removeClass("B-main-color").removeClass("Y-main-color");
        $(".arm01").removeClass("B-main-color").removeClass("Y-main-color");
        $(".arm02").removeClass("B-main-color").removeClass("Y-main-color");
        $(".arm_bot01").removeClass("B-main-color").removeClass("Y-main-color");
        $(".arm_bot02").removeClass("B-main-color").removeClass("Y-main-color");
        $(".hat").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-left").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-right").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".hand-neck01").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".hand-neck02").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".link01").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".link02").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".neck").removeClass("B-sub-color").removeClass("Y-sub-color");
        $(".ear-1-left").removeClass("B-line-color").removeClass("Y-line-color");
        $(".ear-1-right").removeClass("B-line-color").removeClass("Y-line-color");
        $(".mouse").removeClass("B-line-color").removeClass("Y-line-color");
        $(".chest").removeClass("B-line-color").removeClass("Y-chest-color");
        $(".part1").removeClass("B-part-color").removeClass("Y-part-color");
        $(".part2").removeClass("B-part-color").removeClass("Y-part-color");
        $(".part3").removeClass("B-part-color").removeClass("Y-part-color");
        $(".part2-1").removeClass("B-part-color-a").removeClass("Y-part-color-a");
        $(".part3-1").removeClass("B-part-color-b").removeClass("Y-part-color-b");
        $(".eye-1").removeClass("B-eye-color").removeClass("Y-eye-color");
        $(".eye-2").removeClass("B-eye-color").removeClass("Y-eye-color");
        $(".mouse").removeClass("Y-mouse-color");
        $(".button-rec li").removeClass("Y-button-rec").removeClass("B-button-rec");
        $(".button-rec li:first-child").removeClass("Y-button-rec1").removeClass("B-button-rec1");
    }
    $(".p-red").click(redcolor);

    function yellowcolor (){
        $(".bg").removeClass("B-bg-color").addClass("Y-bg-color");
        $(".hand-blank").removeClass("B-bg-color").addClass("Y-bg-color");
        $(".head").removeClass("B-main-color").addClass("Y-main-color");
        $(".b1").removeClass("B-main-color").addClass("Y-main-color");
        $(".arm01").removeClass("B-main-color").addClass("Y-main-color");
        $(".arm02").removeClass("B-main-color").addClass("Y-main-color");
        $(".arm_bot01").removeClass("B-main-color").addClass("Y-main-color");
        $(".arm_bot02").removeClass("B-main-color").addClass("Y-main-color");
        $(".hat").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".ear-left").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".ear-right").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".hand-neck01").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".hand-neck02").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".link01").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".link02").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".neck").removeClass("B-sub-color").addClass("Y-sub-color");
        $(".ear-1-left").removeClass("B-line-color").addClass("Y-line-color");
        $(".ear-1-right").removeClass("B-line-color").addClass("Y-line-color");
        $(".mouse").removeClass("B-line-color").addClass("Y-line-color");
        $(".chest").removeClass("B-line-color").addClass("Y-chest-color");
        $(".part1").removeClass("B-part-color").addClass("Y-part-color");
        $(".part2").removeClass("B-part-color").addClass("Y-part-color");
        $(".part3").removeClass("B-part-color").addClass("Y-part-color");
        $(".part2-1").removeClass("B-part-color-a").addClass("Y-part-color-a");
        $(".part3-1").removeClass("B-part-color-b").addClass("Y-part-color-b");
        $(".eye-1").removeClass("B-eye-color").addClass("Y-eye-color");
        $(".eye-2").removeClass("B-eye-color").addClass("Y-eye-color");
        $(".mouse").addClass("Y-mouse-color");
        $(".button-rec li").removeClass("B-button-rec").addClass("Y-button-rec");
        $(".button-rec li:first-child").removeClass("B-button-rec1").addClass("Y-button-rec1");
    }
    $(".p-yellow").click(yellowcolor);
    

    function content01(){
        $(".content01 li:first-child").stop().addClass("contentAni");
        $(".about-me").slideDown();
        $(".skill").slideDown();
        $(".text").hide();
        $(".button-a").hide();
        $(".robot").stop().animate({"left": "28%"}, 1000);
        $(".design").hide();
        $(".web").hide();
    }
    $(".button-a").click(content01);
    $(".button-a").click(designBack);
    $(".button-a").click(webBack);
    
    