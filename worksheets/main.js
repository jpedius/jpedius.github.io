'use strict';

import { fn_speak } from '../main/js/voice.js';
import { fn_shuffle } from '../main/js/shuffle.js';
import { fn_worksheets } from '../main/js/worksheets.js';

function fn_show_or_hidden(selected, random, elements) {

	let a = elements.random.checked;

	elements.read.value = a
		? selected.random[items.length]
		: selected.alphabet[items.length];

	console.log(items);
	console.log(random);
	console.log(elements.random.checked);
}

function fn_add_read(div) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let read = document.createElement('input');
	read.classList.add('myInput');
	read.type = 'text';
	read.readOnly = "readonly";
	read.size = 14;
	div1.appendChild(read);

	return read;
}

function fn_add_write(div) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let write = document.createElement('input');
	write.classList.add('myInput');
	write.type = 'text';
	write.size = 14;
	div1.appendChild(write);

	return write;
}

function fn_add_random(div, select, items, elements) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let div2 = document.createElement('div');
	div2.classList.add('myRandom');
	div2.innerHTML = 'Random ';
	div1.appendChild(div2);

	let random = document.createElement('input');
	random.classList.add('myCheckbox');
	random.type = 'checkbox';
	random.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.worksheets[index];

		items.random = !items.random;

		if (items.show) {
			elements.read.value = items.hidden;
		}
		else if (items.random) {
			elements.read.value = selected.random[items.length];
		}
		else {
			elements.read.value = selected.alphabet[items.length];
		}

		elements.write.value = '';
	});
	div1.appendChild(random);

	return random;
}

function fn_add_buttons(div, select, items, elements) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let prev = document.createElement('button');
	prev.classList.add('myButtons');
	prev.innerHTML = 'Previous';
	prev.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.worksheets[index];

		if (items.length <= 0) {
			items.length = selected.alphabet.length;
		}
		items.length--;

		if (items.show) {
			elements.read.value = items.hidden;
		}
		else if (items.random) {
			elements.read.value = selected.random[items.length];
		}
		else {
			elements.read.value = selected.alphabet[items.length];
		}
	});
	div1.appendChild(prev);

	let play = document.createElement('button');
	play.classList.add('myButtons');
	play.innerHTML = 'Play';
	play.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.worksheets[index];

		fn_speak(selected.alphabet[items.length]);
	});
	div1.appendChild(play);

	let show = document.createElement('button');
	show.classList.add('myButtons');
	show.innerHTML = 'Show';
	show.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.worksheets[index];

		items.show = !items.show;
		show.innerHTML = items.show ? 'Hidden' : 'Show';

		if (items.show) {
			elements.read.value = items.hidden;
		}
		else if (items.random) {
			elements.read.value = selected.random[items.length];
		}
		else {
			elements.read.value = selected.alphabet[items.length];
		}
	});
	div1.appendChild(show);

	let next = document.createElement('button');
	next.classList.add('myButtons');
	next.innerHTML = 'Next';
	next.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.worksheets[index];

		if (items.length >= selected.alphabet.length - 1) {
			items.length = -1;
		}
		items.length++;

		if (items.show) {
			elements.read.value = items.hidden;
		}
		else if (items.random) {
			elements.read.value = selected.random[items.length];
		}
		else {
			elements.read.value = selected.alphabet[items.length];
		}
	});
	div1.appendChild(next);
}

function fn_add(div, select, items) {

	let read = fn_add_read(div);
	let write = fn_add_write(div);

	let random = fn_add_random(div, select, items, {
		read: read,
		write: write,
	});

	fn_add_buttons(div, select, items, {
		read: read,
		write: write,
		random: random,
	});
}

function fn_update(div, select, items) {

	let index = select.options.selectedIndex;
	let selected = items.worksheets[index];

	items.length = 0;

	let read = div.children[0].children[0];
	read.value = items.random
		? selected.random[items.length]
		: selected.alphabet[items.length];

	let write = div.children[1].children[0];
	write.value = '';
}

function fn_select(main, items) {

	let select = document.createElement('select');
	select.classList.add('mySelect');
	select.innerHTML = '';
	select.addEventListener('change', () => {
		fn_update(main.children[1], select, items);
	});
	main.appendChild(select);

	for (let i=0; i<items.worksheets.length; i++) {
		const option = document.createElement('option');
		option.textContent = items.worksheets[i].name;
		select.appendChild(option);
	}

	return select;
}

function fn_items_div(main, items, select) {

	let div = document.createElement('div');
	main.appendChild(div);

	fn_add(div, select, items);
	fn_update(div, select, items);
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

	let select = fn_select(main, items);

	fn_items_div(main, items, select);
}

function fn_worksheets_random(worksheets) {

	let items = [];

	let i=0;
	while (i<worksheets.length) {
		
		let random = fn_shuffle(worksheets[i].alphabet);
		items.push({
			name: worksheets[i].name,
			key: worksheets[i].key,
			alphabet: worksheets[i].alphabet,
			random: random,
		});
		
		i++;
	}

	return items;
}

function fn_app() {

	let worksheets = fn_worksheets();
	worksheets = fn_worksheets_random(worksheets);

	let element = document.getElementById('main');

	fn_header(element, 'Worksheets');
	fn_main(element, {
		worksheets: worksheets,
		length: 0,
		random: false,
		show: false,
		hidden: '----------',
	});
}
fn_app();
