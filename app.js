var sliders=0;
var whoppers=0;
var doubles=0;


var main = function () {
	$(".appear").on("click", function() {
		$(".begin").css("visibility", "visible");
		$("button").removeClass("huge");
		$(".outside").remove();
		$("ol").empty();
	});
}

var add = function () {

	
	$(".Slider").on("click", function () {
		sliders+=1;
		$(".orderlist").append('<div class="item"> <li> Slider- $3 x'+sliders+' </li> <button class="x"> x </button> </div>');
	});

	$(".Megan").on("click", function () {
		$(".orderlist").append('<div class="item"> <li> Megan- $4 </li> <button class="x"> x </button> </div>');
	});
	$(".Double").on("click", function () {
		$(".orderlist").append('<div class="item"> <li> Double- $5 </li> <button class="x"> x </button> </div>');
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