'use strict';

import { fn_speak } from '../main/js/voice.js';
import { fn_shuffle } from '../main/js/shuffle.js';
import { fn_medicine } from '../main/js/medicine.js';

function fn_show_or_hidden(items, elements) {

	elements.name.innerHTML = items.name
		? items.medicine[items.length].name
		: items.hidden;

	elements.description.innerHTML = items.description
		? items.medicine[items.length].description
		: items.hidden;

	elements.image.src = items.image
		? '/main/img/medicine/' + items.medicine[items.length].image
		: '/main/img/medicine/blank-black.jpg';
}

function fn_name(container, items) {

	let grid1 = document.createElement('div');
	grid1.classList.add('myGrid');
	container.appendChild(grid1);

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Name';
	btn.addEventListener('click', () => {
		items.name = !items.name;
		grid2.innerHTML = items.name
			? items.medicine[items.length].name
			: items.hidden;
	});
	grid1.appendChild(btn);

	let grid2 = document.createElement('div');
	grid2.classList.add('myGrid');
	grid2.innerHTML = items.medicine[items.length].name;
	container.appendChild(grid2);

	return grid2;
}

function fn_description(container, items) {
	
	let grid1 = document.createElement('div');
	grid1.classList.add('myGrid');
	container.appendChild(grid1);

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Description';
	btn.addEventListener('click', () => {
		items.description = !items.description;
		grid2.innerHTML = items.description
			? items.medicine[items.length].description
			: items.hidden;
	});
	grid1.appendChild(btn);

	let grid2 = document.createElement('div');
	grid2.classList.add('myGrid');
	grid2.innerHTML = '----------';
	container.appendChild(grid2);

	return grid2;
}

function fn_image(container, items) {

	let grid1 = document.createElement('div');
	grid1.classList.add('myGrid');
	container.appendChild(grid1);

	let btn = document.createElement('button');
	btn.classList.add('myButton');
	btn.innerHTML = 'Image';
	btn.addEventListener('click', () => {
		items.image = !items.image;
		img.src = items.image
			? '/main/img/medicine/' + items.medicine[items.length].image
			: '/main/img/medicine/blank-black.jpg';
	});
	grid1.appendChild(btn);

	let grid2 = document.createElement('div');
	grid2.classList.add('myGrid');
	container.appendChild(grid2);

	let img = document.createElement('img');
	img.classList.add('myImage');
	img.src = '/main/img/medicine/blank-black.jpg';
	grid2.appendChild(img);

	return img;
}

function fn_buttons(div, items, elements) {
	
	let grid1 = document.createElement('div');
	grid1.classList.add('myGrid');
	grid1.innerHTML = '';
	div.appendChild(grid1);

	let grid2 = document.createElement('div');
	grid2.classList.add('myGrid');
	div.appendChild(grid2);

	let prev = document.createElement('button');
	prev.classList.add('myButtons');
	prev.innerHTML = 'Previous';
	prev.addEventListener('click', () => {
		if (items.length <= 0) {
			items.length = items.medicine.length;
		}
		items.length--;
		fn_show_or_hidden(items, elements);
	});
	grid2.appendChild(prev);

	let play = document.createElement('button');
	play.classList.add('myButtons');
	play.innerHTML = 'Play';
	play.addEventListener('click', () => {
		fn_speak(items.medicine[items.length].name);
	});
	grid2.appendChild(play);

	let next = document.createElement('button');
	next.classList.add('myButtons');
	next.innerHTML = 'Next';
	next.addEventListener('click', () => {
		if (items.length >= items.medicine.length - 1) {
			items.length = -1;
		}
		items.length++;
		fn_show_or_hidden(items, elements);
	});
	grid2.appendChild(next);
}

function fn_add(div, items) {

	let container = document.createElement('div');
	container.classList.add('myContainer');
	div.appendChild(container);

	let name = fn_name(container, items);
	let description = fn_description(container, items);
	let image = fn_image(container, items);

	fn_buttons(container, items, {
		name: name,
		description: description,
		image: image,
	});
}

function fn_items_div(main, items) {

	let div = document.createElement('div');
	main.appendChild(div);

	fn_add(div, items);
}

function fn_header(element, title) {

	document.title = title;

	let header = document.createElement('header');
	header.classList.add('myHeader');
	element.appendChild(header);

	let div = document.createElement('div');
	div.innerHTML = title;
	header.appendChild(div);

	let hr = document.createElement('hr');
	header.appendChild(hr);
}

function fn_main(element, items) {

	let main = document.createElement('main');
	element.appendChild(main);

	fn_items_div(main, items);
}

function fn_app() {

	let medicine = fn_medicine();
	medicine = fn_shuffle(medicine);

	let element = document.getElementById('main');

	fn_header(element, 'Medicine');
	fn_main(element, {
		medicine: medicine,
		length: 0,
		name: true,
		description: false,
		image: false,
		hidden: '----------',
	});
}
fn_app();
