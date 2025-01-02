'use strict';

// python3 -m http.server 3000

let id_select = document.getElementById("idSelect");
let id_clear_screen = document.getElementById("idClearScreen");
let id_collection = document.getElementById("idCollection");
let id_save_words = document.getElementById("idSaveWords");
let id_input = document.getElementById("idInput");

let local_storage = "collect-some-words";
let json = localStorage.getItem(local_storage);
let past_words = JSON.parse(json);
if (past_words === null) { past_words = []; }

let NUMBER_OF_SMALL_WORDS = 3
let NUMBER_OF_SMALL_SLICES = 5;
let NUMBER_OF_LARGE_SLICES = 10;
let NUMBER_OF_SELECTION = NUMBER_OF_SMALL_SLICES + NUMBER_OF_LARGE_SLICES;

function fn_select_words(previous_words) {

	id_select.innerHTML = '';

	for (let i=0; i<previous_words.length; i++) {
		const option = document.createElement('option');
		option.textContent = `${previous_words[i].date}`;
		id_select.appendChild(option);
	}

	if (id_select.options.length !== 0) {
		const last = id_select.options.length - 1;
		id_select.options[last].selected = true;
	}

	const add = document.createElement('option');
	add.textContent = "Add Words ...";
	id_select.appendChild(add);
}
fn_select_words(past_words);

function fn_clear_screen() {
	for (let i=0; i<NUMBER_OF_SELECTION; i++) {
		item_collection[i].write.value = '';
	}
}

function fn_remaining_words(previous_words) {

	let past = [];
	for (let i=0; i<previous_words.length; i++) {
		let w = previous_words[i].words;
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

function fn_new_selection(previous_words) {

	let the_words = fn_remaining_words(previous_words);

	let the_text = [];
	for (let i=0; i<the_words.length; i++) {
		the_text.push('');
	}

	return {
		date: fn_day(),
		words: the_words,
		text: the_text,
	};
}
let new_selection = fn_new_selection(past_words);

function fn_item_selection(previous_words, new_words) {

	let item = id_select.options.selectedIndex;
	let add_words = id_select.options.length - 1;

	if (add_words === item) {
		return new_words;
	}

	return previous_words[item];
}
let item_selection = fn_item_selection(past_words, new_selection);

function fn_create() {

	let create = [];

	for (let i=0; i<NUMBER_OF_SELECTION; i++) {

		let div0 = document.createElement('div');
		div0.classList.add('myDiv');

		let start = document.createElement('button');
		let stop = document.createElement('button');
	    let input = document.createElement('input');

		start.classList.add('myButton');
		start.innerHTML = 'Start';

		stop.classList.add('myButton');
		stop.innerHTML = 'Stop';
		stop.disabled = true;

	    input.classList.add('myInputTime');
	    input.type = 'text';
    	input.size = 5;
    	input.readOnly = true;

		start.addEventListener('click', () => {
			start.time_value = Date.now();
			start.disabled = true;
			stop.disabled = false;
		});
		stop.addEventListener('click', () => {
			stop.time_value = Date.now();
			stop.disabled = true;
			fn_add_event_listener_stop(i, start, stop, input);
		});

		let write = document.createElement('textarea');
		write.classList.add('myTextarea');
		write.value = fn_create_element_text(i);
		write.rows = 4;
		write.cols = 40;

		let span = document.createElement('span');
		span.classList.add('mySpan');
		span.innerHTML = '-'.repeat(8);

		let word = document.createElement('button');
		word.classList.add('myButton');
		word.innerHTML = 'Play Word';
		word.addEventListener('click', () => {
			fn_add_event_listener_word(i);
		});

		let text = document.createElement('button');
		text.classList.add('myButton');
		text.innerHTML = 'Play Text';
		text.addEventListener('click', () => {
			fn_add_event_listener_text(i, write);
		});

		let show = document.createElement('button');
		show.classList.add('myButton');
		show.innerHTML = 'Show';
		show.addEventListener('click', () => {
			create[i].tf = !create[i].tf;
			show.innerHTML = create[i].tf ? 'Hide' : 'Show';
			fn_add_event_listener_show(i, create[i].tf, span);
		});

		create.push({
			start: start,
			input: input,
			write: write,
			span: span,
			tf: false,
			show: show,
		});

		let div1 = document.createElement('div');
		div1.appendChild(start);
		div1.appendChild(stop);
		div1.appendChild(input);
		div0.appendChild(div1);

		let div2 = document.createElement('div');
		div2.appendChild(write);
		div0.appendChild(div2);

		let div3 = document.createElement('div');
		div3.appendChild(word);
		div3.appendChild(text);
		div3.appendChild(show);
		div3.appendChild(span);
		div0.appendChild(div3);

		let hr = document.createElement('hr');
		div0.appendChild(hr);

		id_collection.appendChild(div0);
	}

	return create;
}
let item_collection = fn_create();

function fn_add_event_listener_stop(num, start, stop, input) {

	let duration = stop.time_value - start.time_value;

	let minutes = Math.floor(duration / 60000);
	let seconds = ((duration % 60000) / 1000).toFixed(0);
	seconds = (seconds < 10 ? '0' : '') + seconds

	input.value = minutes + ':' + seconds;
}

function fn_add_event_listener_word(num) {
	let event = (item_selection.words)[num];
	fn_speak(event);
}

function fn_create_element_text(num) {
	let event = (item_selection.text)[num];
	return event;	
}

function fn_add_event_listener_text(num, write) {
	let event = (item_selection.text)[num];
	if (write.value !== '') {
		fn_speak(write.value);
	}
}

function fn_add_event_listener_show(num, show, span) {
	let event = (item_selection.words)[num];
	let repeat = '-'.repeat(8); // event.length
	span.innerHTML = show ? event : repeat;
}

function fn_change_words() {

	item_selection = fn_item_selection(past_words, new_selection);

	for (let i=0; i<NUMBER_OF_SELECTION; i++) {
		let item = item_collection[i];
		item.start.disabled = false;
		item.input.value = '';
		item.write.value = (item_selection.text)[i];
		item.span.innerHTML = '-'.repeat(8);
		item.tf = false;
		item.show.innerHTML = 'Show';
	}
}

function fn_save_words() {

	let the_date = fn_day();

	let the_times = [];
	for (let i=0; i<NUMBER_OF_SELECTION; i++) {
		let item = item_collection[i];
		let time = item.input.value;
		the_times.push(time)
	}

	let the_words = [];
	for (let i=0; i<NUMBER_OF_SELECTION; i++) {
		let item = (item_selection.words)[i];
		the_words.push(item);
	}

	let the_texts = [];
	for (let i=0; i<NUMBER_OF_SELECTION; i++) {
		let item = item_collection[i];
		let write = item.write.value;
		the_texts.push(write);
	}

	past_words.push({
		date: the_date,
		times: the_times,
		words: the_words,
		text: the_texts,
	});

	localStorage.setItem(local_storage, JSON.stringify(past_words));

	id_save_words.disabled = true;
}
//if (item_selection.date === fn_day()) {
//	id_save_words.disabled = true;
//}

function fn_delete_words() {

	if (id_input.value.toLowerCase() === 'delete') {
		localStorage.removeItem(local_storage);
		id_input.value = '';
	}
}
