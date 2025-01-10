'use strict';

let idSelection = document.getElementById("idSelection");
let idStart = document.getElementById("idStart");
let idStop = document.getElementById("idStop");
let idInput = document.getElementById("idInput");
let idRead = document.getElementById("idRead");
let idNumberParagraph = document.getElementById("idNumberParagraph")
let idNumberSentence = document.getElementById("idNumberSentence");
let idPreviousWord = document.getElementById("idPreviousWord");
let idPlayWord = document.getElementById("idPlayWord");
let idNextWord = document.getElementById("idNextWord");
let idNumberWord = document.getElementById("idNumberWord");

let local_storage = "one-word-at-a-time";

let selections = [{
	name: "I Don't Feel Like It",
	key:  "i-dont-feel-like-it",
	words: 128, // [9, 4, 6, 9, 4, 4, 12, 7, 3, 13, 4, 4, 4, 1, 8, 3, 11, 6, 5, 6],
}, {
	name: "Tug of War",
	key:  "tug-of-war",
	words: 120, // [11, 13, 13, 12, 9, 9, 6, 6, 15, 9, 14],
}, {
	name: "Coloring Time",
	key:  "coloring-time",
	words: 132, // [6, 9, 4, 7, 7, 8, 7, 7, 7, 6, 8, 8, 8, 6, 8, 6, 7, 11],
}, {
    name: "Ancient Song",
    key:  "ancient-song",
	words: 136, // [11, 10, 11, 6, 15, 11, 9, 16, 12, 11, 10, 12],
}, {
	name: "Step Right Up",
	key:  "step-right-up",
	words: 145, // [11, 15, 13, 9, 9, 7, 8, 5, 8, 11, 10, 12, 6, 6, 11],
}, {
	name: "The Cost of Speed",
	key:  "the-cost-of-speed",
	words: 136, // [6, 5, 6, 7, 12, 7, 12, 5, 7, 11, 6, 4, 10, 10, 12, 12],
}, {
	name: "How to Scare a Bear",
	key:  "how-to-scare-a-bear",
	words: 159, // [12, 10, 7, 12, 7, 8, 7, 11, 5, 9, 3, 13, 15, 7, 6, 22],
}];

let start_time = null;
let req = {
    selection: (idSelection.dataset.files
         + idSelection.value
         + idSelection.dataset.txt),
    array: [],
    length: 0,
    words: "",
};

function fn_options() {
    idSelection.innerHTML = '';
    for (let i=0; i<selections.length; i++) {
        const option = document.createElement('option');
        option.textContent = selections[i].name;
        option.value = selections[i].key;
        option.dataset.words = selections[i].words;
        idSelection.appendChild(option);
    }
}
fn_options();

function fn_selection() {

    req.selection = (
          idSelection.dataset.files
        + idSelection.value
        + idSelection.dataset.txt);

    let idx = idSelection.options.selectedIndex;
    req.words = idSelection.options[idx].dataset.words + ' words';

    fetch(new Request(req.selection))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
        	fn_request(data);
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
fn_selection();

function fn_request(data) {

    req.array = [];
    req.length = 0;

    let array = data;
    array = array.replaceAll('\n', ' ');
    array = array.split(' ');
    for (let i=0; i<array.length; i++) {
		array[i] = array[i].trim();
    }
    array = array.filter((t) => t !== '' );

	let showHidden = [];
    for (let i=0; i<array.length; i++) {

    	showHidden.push({
			show: array[i],
			hidden: '_'.repeat(array[i].length),
    	});

    	let end = array[i];
    	if (end.endsWith('.') || end.endsWith('!') || end.endsWith('?')) {

			let text1 = '';
			let text2 = '';
			for (let j=0; j<showHidden.length; j++) {
				text1 += showHidden[j].show + ' ';
				text2 += showHidden[j].hidden + ' ';
			}

    		req.array.push({
    			arrays: showHidden,
    			show: text1.trim(),
    			hidden: text2.trim(),
    			words: showHidden.length,
    			number: 0,

    		});

    		showHidden = [];
		}
    }

    fn_sentence_text();
}

function fn_sentence_text() {

	idStart.disabled = false;
	idStop.disabled = true;
	idInput.value = '';
	start_time = null;

    idRead.value = req.array[req.length].hidden;
    idNumberParagraph.innerHTML = req.words;
    idNumberSentence.innerHTML = req.length + 1;
    idNumberWord.innerHTML = req.array[req.length].words;
    req.array[req.length].number = 0;
    idPreviousWord.disabled = true;
    idPlayWord.disabled = false;
    idNextWord.disabled = false;
}

function fn_start() {

	idStart.disabled = true;
	idStop.disabled = false;
	start_time = Date.now();
}

function fn_stop() {

	idStop.disabled = true;
	let stop_time = Date.now();

	let duration = stop_time - start_time;

	let minutes = Math.floor(duration / 60000);
	let seconds = ((duration % 60000) / 1000).toFixed(0);
	seconds = (seconds < 10 ? '0' : '') + seconds

	idInput.value = minutes + ':' + seconds;
}

function fn_previous_sentence() {
    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;

    fn_sentence_text();
}

function fn_play_sentence() {
    fn_speak(req.array[req.length].show);
}

function fn_play_slow_sentence() {
    fn_speak(req.array[req.length].show, -0.2);
}

function fn_next_sentence() {
    if (req.length >= req.array.length - 1) {
        req.length = -1;
    }
    req.length++;

    fn_sentence_text();
}

function fn_previous_word() {

	req.array[req.length].number -= 1;
	let text = '';
	for (let i=0; i<req.array[req.length].arrays.length; i++) {
		if (i < req.array[req.length].number) {
			text += req.array[req.length].arrays[i].show + ' ';
		}
		else {
			text += req.array[req.length].arrays[i].hidden + ' ';
		}
	}
	idRead.value = text.trim();

	req.array[req.length].number <= 0
		? idPreviousWord.disabled = true
		: idPreviousWord.disabled = false;

	req.array[req.length].number >= req.array[req.length].words
		? idPlayWord.disabled = true
		: idPlayWord.disabled = false;

	req.array[req.length].number >= req.array[req.length].words
		? idNextWord.disabled = true
		: idNextWord.disabled = false;
}

function fn_play_word() {

	let arr = req.array[req.length];
	let num = arr.number;

	if (num < req.array[req.length].words) {
		let show = arr.arrays[num].show;
		fn_speak(show);
	}
}

function fn_next_word() {

	req.array[req.length].number += 1;
	let text = '';
	for (let i=0; i<req.array[req.length].arrays.length; i++) {
		if (i < req.array[req.length].number) {
			text += req.array[req.length].arrays[i].show + ' ';
		}
		else {
			text += req.array[req.length].arrays[i].hidden + ' ';
		}
	}
	idRead.value = text.trim();

	req.array[req.length].number <= 0
		? idPreviousWord.disabled = true
		: idPreviousWord.disabled = false;

	req.array[req.length].number >= req.array[req.length].words
		? idPlayWord.disabled = true
		: idPlayWord.disabled = false;

	req.array[req.length].number >= req.array[req.length].words
		? idNextWord.disabled = true
		: idNextWord.disabled = false;
}
