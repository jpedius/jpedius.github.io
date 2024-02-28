'use strict';

let arr = [hiragana, katakana];

let romaji = document.getElementById('romaji');
let gif = document.getElementById('gif');
let png = document.getElementById('png');
let kind = document.getElementById('kind');
let show_hide = document.getElementById('show_hide');

let previousOrNext = 0;
let howMany = arr[previousOrNext];
let showHide = true;
let randomCheck = false;

function my_values() {
	romaji.value = showHide
		? howMany[previousOrNext].text
		: '-----';
	gif.src = howMany[previousOrNext].gif;
	png.src = howMany[previousOrNext].png;
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

function my_show_hide() {
	show_hide.innerHTML = showHide ? 'Show' : 'Hide';
	showHide = !showHide;
	romaji.value = showHide
		? howMany[previousOrNext].text
		: '-----';
}

function my_next() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return my_values();
}
