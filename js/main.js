
/**** About me ****/
$(".about").hover(function(){
    $(".hat").stop().animate({"bottom":"160%"}, 500);
    $(".hat-cont .gear1").stop().animate({"top":"-5%"});
    $(".hat-cont .gear2").stop().animate({"top":"-100%"}, 500);
    $(".hat-cont .gear3").stop().animate({"bottom":"55%"}, 800);
    $(".hat-cont .gear4").stop().animate({"top":"-70%"}, 800);
    $(".hat-cont").show();
},
function(){$(".hat").stop().animate({"bottom":"100%"}, 500);
$(".hat-cont .gear1").stop().animate({"top":"2%"});
$(".hat-cont .gear2").stop().animate({"top":"2%"}, 500);
$(".hat-cont .gear3").stop().animate({"bottom":"1%"}, 500);
$(".hat-cont .gear4").stop().animate({"top":"5%"}, 500);
$(".hat-cont").hide();


});  
/**** My design ****/
$(".design").hover(function(){
    $(".ear-left").stop().animate({"left":"-63%"}, 500);
    $(".ear-1-left").stop().animate({"left":"-70%"}, 500);
    $(".ear-right").stop().animate({"right":"-63%"}, 500);
    $(".ear-1-right").stop().animate({"right":"-70%"}, 500);
},
function(){
    $(".ear-left").stop().animate({"left":"-13%"}, 500);
    $(".ear-1-left").stop().animate({"left":"-15%"}, 500);
    $(".ear-right").stop().animate({"right":"-13%"}, 500);
    $(".ear-1-right").stop().animate({"right":"-15%"}, 500);
});  


$(".web").hover(function(){
    $(".arm_bot02").stop().style({"transform":"rotate(90deg)"}, 500);
},
function(){$(".arm_bot02").stop().style({"transform":"rotate(0deg)"}, 500);
});  