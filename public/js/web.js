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

$(".site03").hover(function(){   
    $(".site03 .text").stop().animate({"right":"0%"}, 500);
    $(".text .txt").show();
},
function(){
    $(".site03 .text").stop().animate({"right":"100%"}, 300);
    $(".text .txt").hide();

});

$(".site04").hover(function(){   
    $(".site04 .text").stop().animate({"right":"0%"}, 500);
    $(".text .txt").show();
},
function(){
    $(".site04 .text").stop().animate({"right":"100%"}, 300);
    $(".text .txt").hide();

});

/***************날씨 *****************/

$("#modal_open").click(function () {
	$("#modal").show()
});
$("#modal_close").click(function () {
	$("#modal").hide()
});
$.ajax({
	url: "../json/city.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var city = data.cities;
		var html = '';
		for (var i = 0; i < city.length; i++) {
			html = '<option value="' + city[i].id + '">' + city[i].name + '</option>';
			$("#area").append(html);
        }
        $("#area").trigger("change");
	},
	error: function (xhr, status, error) {
		console.log(xhr, status, error);
	}
});
$("#area").change(function () {
	var id = $(this).val();
	var city = $(this).find('option:selected').text();
	var appid = "02efdd64bdc14b279bc91d9247db4722";
	var units = "metric";
	var dt = new Date();
	var date = dt.getFullYear() + ". " + (dt.getMonth() + 1) + ". " + dt.getDate();
	$.ajax({
		url: "https://api.openweathermap.org/data/2.5/weather",
		type: "get",
		dataType: "json",
		data: {
			id: id,
			appid: appid,
			units: units
		},
		success: function (data) {
			$(".dl_icon").attr("src", "../images/web/" + data.weather[0].icon + ".png");
			$(".dl_area > p").html(city);
			$(".dl_date").html(date);
			$(".dl_temp").html(data.main.temp + '℃');
			$(".dl_temp2").html('최고:' + data.main.temp_max + '℃ / 최저:' + data.main.temp_min + '℃');
			$(".dl_desc").html(data.weather[0].description);
			$("#modal").hide();
		},
		error: function (xhr, status, error) {
			console.log(xhr, status, error);
		}
    });
});