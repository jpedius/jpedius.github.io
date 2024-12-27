'use strict';

// console.log(words);

let idDiv = document.getElementById("idDiv");
let idShow = document.getElementById("idShow");
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

	todaysWords = pastWords[lastItemLength].words;
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

let spans = [];
let show = false;
for (let i=0; i<todaysWords.length; i++) {

    let div = document.createElement('div');
    div.classList.add('myDiv');

	let span = document.createElement('span');
	span.classList.add('mySpan');
	span.innerHTML = ' ' + todaysWords[i] + ' ';
	span.style.display = 'none';
	spans.push(span);

    let play = document.createElement('button');
    play.classList.add('myButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        fn_speak(todaysWords[i]);
    });

    div.appendChild(play);
    div.appendChild(span);

	idDiv.appendChild(div);
}

function fn_show_or_hidden() {

    show = !show;
    for (let i=0; i<spans.length; i++) {
        spans[i].style.display = show ? 'inline' : 'none';
    }
    idShow.innerHTML = show ? 'Hide' : 'Show';
}

function fn_save() {

	if (todaysNumberAlreadyDone !== true) {
		pastWords.push({ date: day, words: todaysWords });
		localStorage.setItem(local_storage, JSON.stringify(pastWords));
		idSave.disabled = true;
	}
}
