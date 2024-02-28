'use strict';

let state = [];
let abbreviation = [];
let capital = [];
for (let i=0; i<states.length; i++) {
	state.push(states[i].state);
	abbreviation.push(states[i].abbreviation);
	capital.push(states[i].capital);
}
let arr = [state, abbreviation, capital];

let read = document.getElementById('read');
let write = document.getElementById('write');
let kind = document.getElementById('kind');
let show_hide = document.getElementById('show_hide');

let previousOrNext = 0;
let howMany = arr[previousOrNext];
let showHide = true;
let randomCheck = false;

function my_values() {
	read.value = showHide
		? howMany[previousOrNext]
		: '-----';
	write.value = '';
	return howMany[previousOrNext];
}
my_values();

function my_kind() {
	howMany = arr[kind.options.selectedIndex];
	previousOrNext = 0;
	if (randomCheck == true) {
		howMany = my_shuffle(howMany);
	}
	return my_values();
}

function my_random() {
	randomCheck = !randomCheck;
	return my_kind();
}

function my_previous() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	return my_values();
}

function my_play() {
	my_speak(howMany[previousOrNext]);
}

function my_show_hide() {
	show_hide.innerHTML = showHide ? 'Show' : 'Hide';
	showHide = !showHide;
	read.value = showHide
		? howMany[previousOrNext]
		: '-----';
}

function my_next() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return my_values();
}
