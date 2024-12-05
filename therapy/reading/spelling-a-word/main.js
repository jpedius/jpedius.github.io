'use strict';

let idRead  = document.getElementById("idRead");
let idWrite = document.getElementById("idWrite");
let idShowHide = document.getElementById("idShowHide");

let numberOfWords = 50;
let numberOfLetters = 3;
let howMany = null;
let previousOrNext = 0;
let showHide = true;

let local_storage = "spelling-a-word";

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

function fn_words() {

    let w = [];
    words.forEach((event) => {
        event.forEach((item) => {

            let hide = item;

            let rand = [];
            for (let i=0; i<hide.length; i++) {
                rand.push(i);
            }
            rand = my_shuffle(rand);

            if (item.length <= numberOfLetters) {
                hide = '-'.repeat(item.length);
            }
            else {
                for (let i=0; i<numberOfLetters; i++) {
                    hide = hide.slice(0, rand[i]) + '-' + hide.slice(rand[i]+1);
                }
            }

            w.push({ show: item, hide: hide, random: rand, write: '' });
        });
    });
    w = my_shuffle(w);
    w = w.slice(0, numberOfWords);

    return w;
}
howMany = fn_words();

function fn_read_and_write(tf) {

	idRead.value = showHide
	    ? howMany[previousOrNext].hide
	    : howMany[previousOrNext].show;
	if (tf) { idWrite.value = ''; }
}
fn_read_and_write(true);

function fn_previous() {

	if (idWrite.value !== '') {
		howMany[previousOrNext].write = idWrite.value;
	}

    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;

    fn_read_and_write(true);
}

function fn_play() {
    my_speak(howMany[previousOrNext].show);
}

function fn_show_hide() {

    idShowHide.innerHTML = showHide ? 'Hide' : 'Show';
    showHide = !showHide;

    fn_read_and_write(false);
}

function fn_next() {

	if (idWrite.value !== '') {
		howMany[previousOrNext].write = idWrite.value;
	}

    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;

    fn_read_and_write(true);
}

function fn_write() {

	let words = [];
	for (let i=0; i<howMany.length; i++) {
		let item = howMany[i].show + "," + howMany[i].write;
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
