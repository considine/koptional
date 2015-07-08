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
	console.log("Hello World");
}

var add = function () {

	
	$(".Slider").on("click", function () {
		sliders+=1;
		if (sliders === 1) {
			$(".orderlist").append('<div class="item slider"> <li> Slider- $3 x'+sliders+'</li> <button class="x"> x </button> </div>');
		}
		else {
			$('.slider').html('<li> Slider- $3 x'+sliders+'</li> <button class="x"> x </button> </div>');
		}


	});

	$(".Megan").on("click", function () {
		whoppers+=1;
		if (whoppers ===1) {
			$(".orderlist").append('<div class="item whopper"> <li> Megan- $4 x'+whoppers+' </li> <button class="x"> x </button> </div>');
		}
		else {
			$('.whopper').html('<li> whopper- $4 x'+whoppers+'</li> <button class="x"> x </button> </div>');
		}
	});
	$(".Double").on("click", function () {
		doubles+=1;
		if (doubles ===1) {
			$(".orderlist").append('<div class="item double"> <li> Double- $5 x'+doubles+'</li> <button class="x"> x </button> </div>');
		}
		else {
			$('.double').html('<li> double- $5 x'+doubles+'</li> <button class="x"> x </button> </div>');
		}
	});

}

var clear = function () {
	$(".clearitems").on("click", function () {
		$("empty").remove();
		$("*").css("background", "gray");

	});
}


$(document).ready(main);
$(document).ready(add);
$(document).ready(clear);
// $(document).ready(date);
