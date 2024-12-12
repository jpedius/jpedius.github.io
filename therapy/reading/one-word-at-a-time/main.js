'use strict';

let idSelection = document.getElementById("idSelection");
let idRead = document.getElementById("idRead");
let idNumberSentence = document.getElementById("idNumberSentence");
let idPreviousWord = document.getElementById("idPreviousWord");
let idPlayWord = document.getElementById("idPlayWord");
let idNextWord = document.getElementById("idNextWord");
let idNumberWord = document.getElementById("idNumberWord");

let local_storage = "one-word-at-a-time";

let selections = [{
	name: "Tug of War",
	key:  "tug-of-war",
}, {
	name: "Coloring Time",
	key:  "coloring-time",
}, {
    name: "Ancient Song",
    key:  "ancient-song",
}, {
	name: "Step Right Up",
	key:  "step-right-up",
}, {
	name: "The Cost of Speed",
	key:  "the-cost-of-speed",
}, {
	name: "How to Scare a Bear",
	key:  "how-to-scare-a-bear",
}];

let req = {
    selection: (idSelection.dataset.files
         + idSelection.value
         + idSelection.dataset.txt),
    array: [],
    length: 0,
};

function fn_options() {
    idSelection.innerHTML = '';
    for (let i=0; i<selections.length; i++) {
        const option = document.createElement('option');
        option.textContent = selections[i].name;
        option.value = selections[i].key;
        idSelection.appendChild(option);
    }
}
fn_options();

function fn_selection() {

    req.selection = (
          idSelection.dataset.files
        + idSelection.value
        + idSelection.dataset.txt);

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

    idRead.value = req.array[req.length].hidden;
    idNumberSentence.innerHTML = req.length + 1;
    idNumberWord.innerHTML = req.array[req.length].words;
    req.array[req.length].number = 0;
    idPreviousWord.disabled = true;
    idPlayWord.disabled = false;
    idNextWord.disabled = false;
}

function fn_previous_sentence() {
    if (req.length <= 0) {
        req.length = req.array.length;
    }
    req.length--;

    fn_sentence_text();
}

function fn_play_sentence() {
    my_speak(req.array[req.length].show);
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
		my_speak(show);
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

// function fn_write() {

//     let words = [];
//     for (let i=0; i<req.array.length; i++) {
//         let item = req.array[i].show + "," + req.array[i].write;
//         words.push(item);
//     }

//     let json = localStorage.getItem(local_storage);
//     let settings = JSON.parse(json);
//     let day = (new Date(Date.now())).getDay();

//     settings[days_of_the_week[day].item] = words;
//     localStorage.setItem(local_storage, JSON.stringify(settings));
// }

// function fn_copy() {

//     let json = localStorage.getItem(local_storage);
//     let settings = JSON.parse(json);

//     let text = JSON.stringify(settings, null, "\t");
//     fn_write_clipboard_text(text);
// }

// async function fn_write_clipboard_text(text) {

//     try {
//         await navigator.clipboard.writeText(text);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// function fn_clear() {

//     const settings = {
//         sunday: [],
//         monday: [],
//         tuesday: [],
//         wednesday: [],
//         thursday: [],
//         friday: [],
//         saturday: [],
//     };

//     localStorage.removeItem(local_storage);
//     localStorage.setItem(local_storage, JSON.stringify(settings));
// }
