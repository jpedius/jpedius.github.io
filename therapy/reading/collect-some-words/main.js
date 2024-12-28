'use strict';

let id_collect = document.getElementById("idCollect");
let id_save_words = document.getElementById("idSaveWords");
let id_input = document.getElementById("idInput");

let local_storage = "collect-some-words";
let json = localStorage.getItem(local_storage);
let past_words = JSON.parse(json);
if (past_words === null) { past_words = []; }

let NUMBER_OF_SMALL_WORDS = 3
let NUMBER_OF_SMALL_SLICES = 5;
let NUMBER_OF_LARGE_SLICES = 10;

function fn_select_set(previous) {

	let past = [];
	for (let i=0; i<previous.length; i++) {
		let w = previous[i].words;
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

	return small.concat(large);
}

function fn_day() {

	let today = new Date();
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let day = today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();

	return day;
}

function fn_todays_words(previous) {

	let day = fn_day();
	let last = previous.length - 1;

	let the_words = [];
	let the_text = [];
	if (last !== -1 && previous[last].date === day) {
		the_words = previous[last].words;
		the_text = previous[last].text;
		id_save_words.disabled = true;
	}
	else {
		the_words = fn_select_set(previous);
		for (let i=0; i<the_words.length; i++) {
			the_text.push('');
		}
	}

	return [the_words, the_text];
}

function fn_create_single_sentence(the_word, the_text, the_show) {

	let div = document.createElement('div');
	div.classList.add('myDiv');

	let write = document.createElement('textarea');
	write.classList.add('myTextarea');
	write.value = the_text;
	write.rows = 4;
	write.cols = 40;

	let playWord = document.createElement('button');
	playWord.classList.add('myButton');
	playWord.innerHTML = 'Play Word';
	playWord.addEventListener('click', () => {
		fn_speak(the_word);
	});

	let playText = document.createElement('button');
	playText.classList.add('myButton');
	playText.innerHTML = 'Play Text';
	playText.addEventListener('click', () => {
		if (write.value !== '') {
			fn_speak(write.value);
		}
	});

	let show = document.createElement('button');
	show.classList.add('myButton');
	show.innerHTML = 'Show';
	show.addEventListener('click', () => {
		the_show = !the_show;
		show.innerHTML = the_show ? 'Hide' : 'Show';
		span.style.display = the_show ? 'inline' : 'none';
	});

	let span = document.createElement('span');
	span.classList.add('mySpan');
	span.innerHTML = ' ' + the_word + ' ';
	span.style.display = 'none';

	let div1 = document.createElement('div');
	div1.appendChild(write);
	div.appendChild(div1);

	let div2 = document.createElement('div');
	div2.appendChild(playWord);
	div2.appendChild(playText);
	div2.appendChild(show);
	div2.appendChild(span);
	div.appendChild(div2);

	let hr = document.createElement('hr');
	div.appendChild(hr);

	id_collect.appendChild(div);

	return write;
}

let [todays_words, today_text] = fn_todays_words(past_words);
let show_hidden = [];
let save_writes = []

for (let i=0; i<todays_words.length; i++) { 
	show_hidden.push(false);
	let save = fn_create_single_sentence(todays_words[i], today_text[i], show_hidden[i]);
	save_writes.push(save);
}

function fn_save_words() {

	if (id_save_words.disabled === false) {

		let text = [];
		for (let i=0; i<save_writes.length; i++) {
			text.push(save_writes[i].value);
		}

		past_words.push({
			date: fn_day(),
			words: todays_words,
			text: text 
		});
		
		localStorage.setItem(local_storage, JSON.stringify(past_words));

		id_save_words.disabled = true;
	}
}

function fn_delete_words() {

	if (id_input.value.toLowerCase() === 'delete') {
		localStorage.removeItem(local_storage);
		id_input.value = '';
	}
}
