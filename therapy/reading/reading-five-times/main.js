'use strict';

let title = document.getElementById("myTitle");

function fn_time(time, num) {
	
	let now = Date.now();
	document.getElementById(time + "Input" + num).value = now;

	if (time === "stop") {

		let startInput = document.getElementById("startInput" + num);
		let stopInput  = document.getElementById("stopInput" + num);
		let timeInput  = document.getElementById("timeInput" + num);

		let elapsed = stopInput.value - startInput.value;
		let seconds = Math.floor(elapsed / 1000);

		let min = Math.floor(seconds / 60);
		let sec = seconds - min * 60;

		let a = title.value;
		a = a.replaceAll(" ", "_");
		a = a.toLowerCase();
		a = a + "_" + String(num).toString();
		a = a + "_" + String(min).toString();
		a = a + "_" + String(sec).toString();
		a = a + "_" + now;
		timeInput.value = a;

		console.log("----------------");
		console.log(now);
		console.log(time);
		console.log(num);
		console.log(elapsed);
		console.log(seconds);
		console.log(min);
		console.log(sec);
	}
}
