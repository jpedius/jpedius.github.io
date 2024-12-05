'use strict';

let idInput = document.getElementById("idInput");
let idSelect = document.getElementById("idSelect");

let local_storage = "reading-five-times";

let days_of_the_week = [
	{ item: "sunday",    mini: "sun" },
	{ item: "monday",    mini: "mon" },
	{ item: "tuesday",   mini: "tue" },
	{ item: "wednesday", mini: "wed" },
	{ item: "thursday",  mini: "thu" },
	{ item: "friday",    mini: "fri" },
	{ item: "saturday",  mini: "sat" },
];

let months_of_the_year = [
	{ item: "January",   mini: "jan" },
	{ item: "February",  mini: "feb" },
	{ item: "March",     mini: "mar" },
	{ item: "April",     mini: "apr" },
	{ item: "May",       mini: "may" },
	{ item: "June",      mini: "jun" },
	{ item: "July",      mini: "jul" },
	{ item: "August",    mini: "aug" },
	{ item: "September", mini: "sep" },
	{ item: "October",   mini: "oct" },
	{ item: "November",  mini: "nov" },
	{ item: "December",  mini: "dec" },
];

let selections = [
	"The Cost of Speed",
	"Ancient Song",
];

function fn_options() {
    idSelect.innerHTML = '';
    for (let i=0; i<selections.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${selections[i]}`;
        idSelect.appendChild(option);
    }
}
fn_options();

function fn_start(num) {
	document.getElementById("idStartInput" + num).value = Date.now();
}

function fn_stop(num) {

	let startInput = document.getElementById("idStartInput" + num);
	let stopInput  = document.getElementById("idStopInput" + num);
	let timeInput  = document.getElementById("idTimeInput" + num);

	stopInput.value = Date.now();

	let duration = stopInput.value - startInput.value;
	let minutes = Math.floor(duration / 60000);
	let seconds = ((duration % 60000) / 1000).toFixed(0);
	let time = minutes + "_" + (seconds < 10 ? '0' : '') + seconds;
	let now = new Date(Date.now());

	let title = idInput.value !== "" ? idInput.value : idSelect.value;
	title = title.replaceAll(" ", "_");
	title = title.toLowerCase();
	title = title + "_" + String(num).toString();
	title = title + "_" + time;
	title = title + "_" + days_of_the_week[now.getDay()].mini;
	title = title + "_" + String(now.getDate()).toString();
	title = title + "_" + months_of_the_year[now.getMonth()].mini;

	timeInput.value = title;
}

function fn_write() {

	let words = [];
	for (let i=1; i<=5; i++) {

		let startInput = document.getElementById("idStartInput" + i);
		let stopInput  = document.getElementById("idStopInput" + i);
		let timeInput  = document.getElementById("idTimeInput" + i);

		let item = i;
		item += "," + startInput.value;
		item += "," + stopInput.value;
		item += "," + timeInput.value;
		words.push(item);
	}

	let json = localStorage.getItem(local_storage);
	let settings = JSON.parse(json);
	let day = (new Date(Date.now())).getDay();

	settings[days_of_the_week[day].item] = words;
	localStorage.setItem(local_storage, JSON.stringify(settings));
}

function fn_copy() {

	let json = localStorage.getItem(local_storage);
	let settings = JSON.parse(json);

	let text = JSON.stringify(settings, null, "\t");
	fn_write_clipboard_text(text);
}

async function fn_write_clipboard_text(text) {

	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error.message);
	}
}

function fn_clear() {

	const settings = {
		sunday: [],
		monday: [],
		tuesday: [],
		wednesday: [],
		thursday: [],
		friday: [],
		saturday: [],
	};

	localStorage.removeItem(local_storage);
	localStorage.setItem(local_storage, JSON.stringify(settings));
}
