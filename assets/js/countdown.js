function makeTimer1() {
	var endTime = new Date("March 28, 2022 16:30:00 UTC");
	var endTime = Date.parse(endTime) / 1000;

	var now = new Date();
	var now = Date.parse(now) / 1000;

	var timeLeft = endTime - now;
	if (timeLeft > 0) {
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
	} else {
		var days = 0;
		var hours = 0;
		var minutes = 0;
		var seconds = 0;
	}

	if (hours < "10") {
		hours = "0" + hours;
	}
	if (minutes < "10") {
		minutes = "0" + minutes;
	}
	if (seconds < "10") {
		seconds = "0" + seconds;
	}

	$("#daysPre").html(days + '<span class="timerSpanPre" >Days</span>');
	$("#hoursPre").html(hours + '<span class="timerSpanPre" >Hours</span>');
	$("#minutesPre").html(minutes + '<span class="timerSpanPre" >Minutes</span>');
	$("#secondsPre").html(seconds + '<span class="timerSpanPre" >Seconds</span>');
}

setInterval(function () {
	makeTimer1();
}, 1000);

function makeTimer() {
	var endTime = new Date("April 7, 2022 05:30:00 UTC");
	var endTime = Date.parse(endTime) / 1000;

	var now = new Date();
	var now = Date.parse(now) / 1000;

	var timeLeft = endTime - now;

	if (timeLeft > 0) {
		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
	} else {
		var days = 0;
		var hours = 0;
		var minutes = 0;
		var seconds = 0;
	}

	if (hours < "10") {
		hours = "0" + hours;
	}
	if (minutes < "10") {
		minutes = "0" + minutes;
	}
	if (seconds < "10") {
		seconds = "0" + seconds;
	}

	$("#daysFinal").html(days + '<span class="timerSpan" >Days</span>');
	$("#hoursFinal").html(hours + '<span class="timerSpan" >Hours</span>');
	$("#minutesFinal").html(minutes + '<span class="timerSpan" >Minutes</span>');
	$("#secondsFinal").html(seconds + '<span class="timerSpan" >Seconds</span>');
}

setInterval(function () {
	makeTimer();
}, 1000);
