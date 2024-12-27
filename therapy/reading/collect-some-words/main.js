'use strict';

// console.log(words);

let idDiv = document.getElementById("idDiv");
let idSave = document.getElementById("idSave");

let NUMBER_OF_SMALL_WORDS = 3
let NUMBER_OF_SMALL_SLICES = 5;
let NUMBER_OF_LARGE_SLICES = 10;

let today = new Date();
let months = [
	"January", "February", "March", "April", "May", "June", "July",
	"August", "September", "October", "November", "December",
];
let day = today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();

let local_storage = "collect-some-words";
let json = localStorage.getItem(local_storage);
let pastWords = JSON.parse(json);
if (pastWords === null) { pastWords = []; }

let todaysWords = [];
let todaysNumberAlreadyDone = false;
let lastItemLength = pastWords.length - 1;

if (lastItemLength !== -1 && pastWords[lastItemLength].date === day) {

	todaysWords = pastWords[lastItemLength];
	todaysNumberAlreadyDone = true;
	idSave.disabled = true;
}
else {

	let past = [];
	for (let i=0; i<pastWords.length; i++) {
		let w = pastWords[i].words;
		past = past.concat(w);
	}

	let small = [];
	let large = [];
	for (let i=0; i<words.length; i++) {
		if (i <= NUMBER_OF_SMALL_WORDS) {
			small = small.concat(words[i]);
		}
		else {
			large = large.concat(words[i]);
		}
	}

	small = fn_difference(small, past);
	large = fn_difference(large, past);

	small = fn_shuffle(small).slice(0, NUMBER_OF_SMALL_SLICES);
	large = fn_shuffle(large).slice(0, NUMBER_OF_LARGE_SLICES);

	todaysWords = small.concat(large);
}

function fn_array(array) {

	for (let i=0; i<array.length; i++) {

	    let div = document.createElement('div');
	    div.classList.add('myDiv');

    	let span = document.createElement('span');
    	span.classList.add('mySpan');
    	span.innerHTML = ' ' + array[i] + ' ';

	    let play = document.createElement('button');
	    play.classList.add('myButton');
	    play.innerHTML = 'Play';
	    play.addEventListener('click', () => {
	        fn_speak(array[i]);
	    });

	    div.appendChild(play);
	    div.appendChild(span);

    	idDiv.appendChild(div);
	}
}
fn_array(todaysWords.words);

function fn_save() {

	if (todaysNumberAlreadyDone !== true) {
		pastWords.push({
			date: day,
			words: todaysWords,
		});
		localStorage.setItem(local_storage, JSON.stringify(pastWords));
	}
}
