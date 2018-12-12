$(".navs_mo > ul").slideUp();
$(".navs_mo > i").click(function(){
	$(".navs_mo > ul").slideToggle(100);
});
function ab (){
$(".wrap").hide();
$(".about-me").show();
$("body").css({"background-color":"#fff"});
};
$(".about").click(ab);

function Close (){
$(".about-me").hide();
$(".wrap").show();
$("body").css({"background-color":"#8ce0cd"});

};
$(".btn").click(Close);