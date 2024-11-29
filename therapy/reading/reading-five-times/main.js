'use strict';

let title = document.getElementById("myTitle");

let days_of_the_week = [
	"sun", // "Sunday",
	"mon", // "Monday",
	"tue", // "Tuesday",
	"wed", // "Wednesday",
	"thu", // "Thursday",
	"fri", // "Friday",
	"sat", // "Saturday",
];

let months_of_the_year = [
	"jan", // "January",
	"feb", // "February",
	"mar", // "March",
	"apr", // "April",
	"may", // "May",
	"jun", // "June",
	"jul", // "July",
	"aug", // "August",
	"sep", // "September",
	"oct", // "October",
	"nov", // "November",
	"dec", // "December",
];

function fn_time(time, num) {
	
	let now = Date.now();
	document.getElementById(time + "Input" + num).value = now;

	let n = new Date(Date.now());
	let d = n.getDay();
	let t = n.getDate();
	let m = n.getMonth();

	// console.log(days_of_the_week[d]);
	// console.log(months_of_the_year[m]);

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
		// a = a + "_" + String(now).toString();
		a = a + "_" + days_of_the_week[d];
		a = a + "_" + String(t).toString();
		a = a + "_" + months_of_the_year[m];
		timeInput.value = a;

		console.log("----------------");
		console.log(now);
		console.log(time);
		console.log(num);
		console.log(elapsed);
		console.log(seconds);
		console.log(min);
		console.log(sec);
		console.log(d);
		console.log(t);
		console.log(m);
	}
}
