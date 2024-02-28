'use strict';

let text = document.getElementById('text');
let image = document.getElementById('image');
let description = document.getElementById('description');

let howMany = medicine;
howMany = my_shuffle(howMany);
let previousOrNext = 0;

let textShowHide = true;
let imageShowHide = false;
let descriptionShowHide = false;

function my_values() {
    text.value = textShowHide
        ? howMany[previousOrNext].name
        : '-----';
    image.src = imageShowHide
        ? howMany[previousOrNext].image
        : '/files/img/medicine/blank-black.jpg';
    description.value = descriptionShowHide
        ? howMany[previousOrNext].description
        : '-----';
    return howMany[previousOrNext];
}
my_values();

function my_text() {
	textShowHide = !textShowHide;
	text.value = textShowHide
		? howMany[previousOrNext].name
		: '-----';
}

function my_image() {
	imageShowHide = !imageShowHide;
	image.src = imageShowHide
		? howMany[previousOrNext].image
		: '/files/img/medicine/blank-black.jpg';
}

function my_description() {
	descriptionShowHide = !descriptionShowHide;
	description.value = descriptionShowHide
		? howMany[previousOrNext].description
		: '-----';
}

function my_previous() {
	if (previousOrNext <= 0) {
		previousOrNext = howMany.length;
	}
	previousOrNext--;
	return my_values();
}

function my_play() {
	my_speak(howMany[previousOrNext].name);
}

function my_next() {
	if (previousOrNext >= howMany.length - 1) {
		previousOrNext = -1;
	}
	previousOrNext++;
	return my_values();
}
