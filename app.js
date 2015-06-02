var sliders=0;
var whoppers=0;
var doubles=0;


var main = function () {
	$(".appear").on("click", function() {
		$(".begin").css("visibility", "visible");
		$("button").removeClass("huge");
		$(".outside").remove();
		$("ol").empty();
		sliders=0;
		whoppers=0;
		doubles=0;
	});
}

var add = function () {

	
	$(".Slider").on("click", function () {
		sliders+=1;
		$(".slider").remove();
		$(".orderlist").append('<div class="item slider"> <li> Slider- $3 x'+sliders+' </li> <button class="x"> x </button> </div>');

	});

	$(".Megan").on("click", function () {
		whoppers+=1;
		$(".whopper").remove();
		$(".orderlist").append('<div class="item whopper"> <li> Megan- $4 x'+whoppers+' </li> <button class="x"> x </button> </div>');
	});
	$(".Double").on("click", function () {
		doubles+=1;
		$(".double").remove();
		$(".orderlist").append('<div class="item double"> <li> Double- $5 x'+doubles+'</li> <button class="x"> x </button> </div>');
	});

}

var clear = function () {
	$(".clearitems").on("click", function () {
		$("empty").remove();
		$("*").css("background", "gray");

	});
}

var date = function () {
	$("h2").html( today.toDateString().substring(0,3));
}

$(document).ready(main);
$(document).ready(add);
$(document).ready(clear);
$(document).ready(date);