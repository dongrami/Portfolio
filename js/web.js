$(".site01").hover(function(){   
    $(".site01 .text").stop().animate({"right":"0%"}, 500);
    $(".text .txt").show();
},
function(){
    $(".site01 .text").stop().animate({"right":"100%"}, 300);
    $(".text .txt").hide();

});

$(".site02").hover(function(){   
    $(".site02 .text").stop().animate({"right":"0%"}, 500);
    $(".text .txt").show();
},
function(){
    $(".site02 .text").stop().animate({"right":"100%"}, 300);
    $(".text .txt").hide();

});