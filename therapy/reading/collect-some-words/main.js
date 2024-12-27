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

let showHidden = [];
let textArea = [];

for (let i=0; i<todaysWords.length; i++) {

    let div = document.createElement('div');
    div.classList.add('myDiv');

    let write = document.createElement('textarea');
    write.classList.add('myTextarea');
    write.rows = 4;
    write.cols = 40;

	let span = document.createElement('span');
	span.classList.add('mySpan');
	span.innerHTML = ' ' + todaysWords[i] + ' ';
	span.style.display = 'none';

    let play = document.createElement('button');
    play.classList.add('myButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        fn_speak(todaysWords[i]);
    });

    let show = document.createElement('button');
    show.classList.add('myButton');
    show.innerHTML = 'Show';
    show.addEventListener('click', () => {
        showHidden[i] = !showHidden[i];
        show.innerHTML = showHidden[i] ? 'Hide' : 'Show';
        span.style.display = showHidden[i] ? 'inline' : 'none';
    });

    let div1 = document.createElement('div');
    div1.appendChild(write);
    div.appendChild(div1);

    let div2 = document.createElement('div');
    div2.appendChild(play);
    div2.appendChild(show);
    div2.appendChild(span);
    div.appendChild(div2);

    let hr = document.createElement('hr');
    div.appendChild(hr);

	idDiv.appendChild(div);

	showHidden.push(false);

	let texts = pastWords[lastItemLength].text;
	write.innerHTML = texts[i];

	textArea.push(write);
}

function fn_save() {

	if (todaysNumberAlreadyDone !== true) {

		let text = [];
		for (let i=0; i<textArea.length; i++) {
			text.push(textArea[i].value);
		}

		pastWords.push({ date: day, words: todaysWords, text: text });
		localStorage.setItem(local_storage, JSON.stringify(pastWords));
		idSave.disabled = true;
	}
}
