'use strict';

let my_root = document.getElementById('my_root');

let my_read = document.getElementById('my_read');
let my_write = document.getElementById('my_write');
let my_previous = document.getElementById('my_previous');
let my_play = document.getElementById('my_play');
let my_show_hide = document.getElementById('my_show_hide');
let my_next = document.getElementById('my_next');
let my_label = document.getElementById('my_label');
let my_number = document.getElementById('my_number');

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

function my_all_words(words) {
	let w = [];
	words.forEach((event) => {
		event.forEach((item) => {
			w.push(item);
		});
	});
	w = my_shuffle(w);
	return w;
}

function my_number_of_letters(all, missing, num) {
	missing = [];
	all.forEach((event) => {
		if (event.length <= num) {
			missing.push('-'.repeat(event.length));
		}
		else {
			let n = [];
			for (let i=0; i<event.length; i++) {
				n.push(i)
			}
			n = my_shuffle(n);
			let m = event;
			for (let i=0; i<num; i++) {
				m = m.slice(0, n[i]) + '-' + m.slice(n[i]+1);
			}
			missing.push(m);
		}
	});

	return missing;
}

function my_read_and_write(tf) {
	if (my_show === true) {
		my_read.value = my_missing[my_length];
	} else {
		my_read.value = my_all[my_length];
	}
	if (tf === true) {
		my_write.value = '';
	}
}

function my_previous_button() {
	if (my_length <= 0) { my_length = my_all.length; }
	my_length--;
	my_read_and_write(true);
};

function my_play_button() {
    speak(my_all[my_length]);
};

function my_show_hide_button() {
	if (my_show_hide.innerHTML === 'Show') {
		my_show_hide.innerHTML = 'Hide';    		
 	}
	else if (my_show_hide.innerHTML === 'Hide') {
		my_show_hide.innerHTML = 'Show';
	}
	my_show = !my_show;
	my_read_and_write(false);
};

function my_next_button() {
	if (my_length >= my_all.length - 1) { my_length = -1; }
	my_length++;
	my_read_and_write(true);
};

function my_number_button() {
	my_label.innerHTML = 'Number: ' + my_number.value;
	my_missing = my_number_of_letters(my_all, my_missing, my_number.value);
	my_read_and_write(true);
};

function my_mode_button() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
	element.classList.toggle('lightModeButton');
	my_read.classList.toggle('darkModeButton');
	my_write.classList.toggle('darkModeButton');
};

let my_all = my_all_words(my_words);
let my_length = 0;
let my_show = true;
let my_missing = my_number_of_letters(my_all, [], my_number.value);
my_read_and_write(true);
