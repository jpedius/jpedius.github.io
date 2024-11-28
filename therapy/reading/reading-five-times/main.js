'use strict';

let myTitle = document.getElementById("myTitle");

function fn_time(t, num) {
	
	let now = Date.now();
	let doc = document.getElementById(t + "Input" + num).value = now;
	
	if (t === "stop") {
		let title = myTitle.value.replaceAll(" ", "_").toLowerCase() + "_" + now;
		document.getElementById("timeInput" + num).value = title;
	}
}
