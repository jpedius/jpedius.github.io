'use strict';

let idMain  = document.getElementById("idMain");
let idRead  = document.getElementById("idRead");
let idWrite = document.getElementById("idWrite");

let howMany = null;
let previousOrNext = 0;
let showHide = true;
let numberOfWords = 50;
let numberOfLetters = 3;

let arrayOfWords = [];

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

            w.push({ show: item, hide: hide, random: rand });
        });
    });
    w = my_shuffle(w);
    w = w.slice(0, numberOfWords);

    for (let i=0; i<w.length; i++) {
    	arrayOfWords.push({
    		spelled: w[i].show,
    		my_way: "",
    	});
    }

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
	fn_mark();
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    return fn_read_and_write(true);
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
	fn_mark();
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    return fn_read_and_write(true);
}

function fn_mark() {
	if (idWrite.value !== "") {
		arrayOfWords[previousOrNext].my_way = idWrite.value;
	}
}

function fn_time() {
	
	let now = Date.now();

	let n = new Date(Date.now());
	let d = n.getDay();
	let t = n.getDate();
	let m = n.getMonth();

	let a = days_of_the_week[d];
	a = a + "_" + String(t).toString();
	a = a + "_" + months_of_the_year[m];

	return a;
}

function fn_clipboard() {
	let time = "let " + fn_time() + " = ";
	let text = time + JSON.stringify(arrayOfWords, null, "\t");
	writeClipboardText(text);
}

async function writeClipboardText(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error.message);
	}
}
