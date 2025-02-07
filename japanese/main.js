'use strict';

import { fn_speak } from '../main/js/voice.js';
import { fn_shuffle } from '../main/js/shuffle.js';
import { fn_japanese } from '../main/js/japanese.js';

function fn_add_english(div) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let english = document.createElement('div');
	english.classList.add('myDiv');
	div1.appendChild(english);

	return english;
}

function fn_add_gif(div) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let img = document.createElement('img');
	img.classList.add('myImage');
	div1.appendChild(img);

	return img;
}

function fn_add_png(div) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let img = document.createElement('img');
	img.classList.add('myImage');
	div1.appendChild(img);

	return img;
}

function fn_add_random(div, select, items) {

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
		items.random = !items.random;
		fn_update(div, select, items);
	});
	div1.appendChild(random);

	return random;
}

function fn_add_buttons(div, select, items) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let prev = document.createElement('button');
	prev.classList.add('myButtons');
	prev.innerHTML = 'Previous';
	prev.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.container[index];

		if (items.length <= 0) {
			items.length = selected.characters.length;
		}
		items.length--;

		fn_update(div, select, items);
	});
	div1.appendChild(prev);

	let show = document.createElement('button');
	show.classList.add('myButtons');
	show.innerHTML = 'Show';
	show.addEventListener('click', () => {
		items.show = !items.show;
		show.innerHTML = items.show ? 'Show' : 'Hidden';
		fn_update(div, select, items);
	});
	div1.appendChild(show);

	let next = document.createElement('button');
	next.classList.add('myButtons');
	next.innerHTML = 'Next';
	next.addEventListener('click', () => {

		let index = select.options.selectedIndex;
		let selected = items.container[index];

		if (items.length >= selected.characters.length - 1) {
			items.length = -1;
		}
		items.length++;

		fn_update(div, select, items);
	});
	div1.appendChild(next);
}

function fn_add(div, select, items) {

	let english = fn_add_english(div);
	let gif = fn_add_gif(div);
	let png = fn_add_png(div);
	let random = fn_add_random(div, select, items);

	fn_add_buttons(div, select, items);
}

function fn_update(div, select, items) {

	let index = select.options.selectedIndex;
	let selected = items.container[index];

	let english = div.children[0].children[0];
	if (items.show) {
		english.innerHTML = items.hidden;
	}
	else if (items.random) {
		english.innerHTML = selected.random[items.length].english;
	}
	else {
		english.innerHTML = selected.characters[items.length].english;
	}

	let gif = div.children[1].children[0];
	gif.src = '/main/img/japanese/'
		+ selected.key + '/'
		+ selected.characters[items.length].gif;

	let png = div.children[2].children[0];
	png.src = '/main/img/japanese/'
		+ selected.key + '/'
		+ selected.characters[items.length].png;
}

function fn_select(main, items) {

	let select = document.createElement('select');
	select.classList.add('mySelect');
	select.innerHTML = '';
	select.addEventListener('change', () => {
		items.length = 0;
		fn_update(main.children[1], select, items);
	});
	main.appendChild(select);

	for (let i=0; i<items.container.length; i++) {
		const option = document.createElement('option');
		option.textContent = items.container[i].name;
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

function fn_japanese_random(container) {

	let items = [];

	let i=0;
	while (i<container.length) {
		
		let random = fn_shuffle(container[i].characters);
		items.push({
			name: container[i].name,
			key: container[i].key,
			characters: container[i].characters,
			random: random,
		});
		
		i++;
	}

	return items;
}

function fn_app() {

	let container = fn_japanese();
	container = fn_japanese_random(container);

	let element = document.getElementById('main');

	fn_header(element, 'Japanese');
	fn_main(element, {
		container: container,
		length: 0,
		random: false,
		show: true,
		hidden: '----',
	});
}
fn_app();
