'use strict';

let my_root = document.getElementById('my_root');

let my_who   = document.getElementById('my_who');
let my_verb  = document.getElementById('my_verb');
let my_what  = document.getElementById('my_what');
let my_where = document.getElementById('my_where');
let my_when  = document.getElementById('my_when');
let my_why   = document.getElementById('my_why');

let my_previous = document.getElementById('my_previous');
let my_play = document.getElementById('my_play');
let my_next = document.getElementById('my_next');

let my_verbs = verbs;

function my_shuffle(array) {

	let items = JSON.parse(JSON.stringify(array));
	let currentIndex = items.length, randomIndex;

	// While there remain elements to shuffle...
	while (currentIndex !== 0) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[items[currentIndex], items[randomIndex]] = [
			items[randomIndex], items[currentIndex]];
	}

	return items;
}  

my_verbs = my_shuffle(my_verbs);

let my_length = 0;

function my_first_and_word(my_verbs) {

	let all = [];
	my_verbs.forEach((element) => {
		let words = [];
		const counts = {};
		for (const num of element) {
			counts[num] = counts[num] ? counts[num] + 1 : 1;
			if (counts[num] == 1) {
				words.push(num);
			}
		}
		all.push({
			id: element[0],
			arr: words,
		});
	});

	return all;
}

let my_words = my_first_and_word(my_verbs);

function my_verb_select() {

	my_verb.innerHTML = '';

	let id = my_words[my_length].id;
	let arr = my_words[my_length].arr;

	for (let i=0; i<arr.length; i++) {
	    const option = document.createElement('option');
	    option.textContent = `${arr[i]}`;
		if (arr[i] === id) {
			option.defaultSelected = true;
		}
		my_verb.appendChild(option);
	}

	return my_verb;
}

my_verb_select()

function my_previous_button() {

	if (my_length <= 0) { my_length = my_words.length; }
	my_length--;

	my_verb_select();

	my_who.value = '';
	my_what.value = '';
	my_where.value = '';
	my_when.value = '';
	my_why.value = '';
}

function my_who_and_what() {

	let words = '';

	words += my_who.value;
	words += ' ';
	words += my_verb.value;
	words += ' ';
	words += my_what.value;

	if (my_where.value !== '') {
		words += ', ';
		words += my_where.value;
	}

	if (my_when.value !== '') {
		words += ', ';
		words += my_when.value;
	}

	if (my_why.value !== '') {
		words += ', ';
		words += my_why.value;
	}

	return words += '.';
}

function my_play_button() {

	let my = my_who.value !== '' && my_what.value !== '';

	let words = '';
	if (my) { words = my_who_and_what(); }

	my ? speak(words) : speak(my_verb.value);
};

function my_next_button() {

	if (my_length >= my_words.length - 1) { my_length = -1; }
	my_length++;

	my_verb_select();

	my_who.value = '';
	my_what.value = '';
	my_where.value = '';
	my_when.value = '';
	my_why.value = '';
}

function my_copy_button() {

	let my = my_who.value !== '' && my_what.value !== '';

	let words = '';
	if (my) { words = my_who_and_what(); }

	my ? words : my_verb.value;
}

function my_mode_button() {
    let element = document.body;
    element.classList.toggle('darkModeButton');
    element.classList.toggle('lightModeButton');
	my_who.classList.toggle('darkModeButton');
	my_what.classList.toggle('darkModeButton');
	my_where.classList.toggle('darkModeButton');
	my_when.classList.toggle('darkModeButton');
	my_why.classList.toggle('darkModeButton');
}
