'use strict';

import { fn_speak } from '../main/js/voice.js';
import { fn_exercises } from '../main/js/exercises.js';

function fn_image(div, selected) {

	let div1 = document.createElement('div');
	div.appendChild(div1);

	let img = document.createElement('img');
	img.classList.add('myImage');
	img.src = '/main/img/therapy/' + selected.image;
	div1.appendChild(img);
}

function fn_play_and_text(div, selected) {

	let container = document.createElement('div');
	container.classList.add('myExercisesContainer');
	div.appendChild(container);

	for (let i=0; i<selected.exercises.length; i++) {

		let grid1 = document.createElement('div');
		grid1.classList.add('myExercisesGrid');
		container.appendChild(grid1);

		let play = document.createElement('button');
		play.classList.add('myExercisesPlay');
		play.innerHTML = 'Play';
		play.addEventListener('click', () => {
			fn_speak(selected.exercises[i]);
		});
		grid1.appendChild(play);

		let grid2 = document.createElement('div');
		grid2.classList.add('myExercisesGrid');
		grid2.innerHTML = selected.exercises[i];
		container.appendChild(grid2);
	}
}

function fn_instructions(div, selected) {

	let container = document.createElement('div');
	container.classList.add('myInstructionsContainer');
	div.appendChild(container);

	let grid1 = document.createElement('div');
	grid1.classList.add('myInstructionsGrid');
	container.appendChild(grid1);

	let grid2 = document.createElement('div');
	grid2.classList.add('myInstructionsGridSpan');
	container.appendChild(grid2);

	let hr = document.createElement('hr');
	grid2.appendChild(hr);

	for (let i=0; i<selected.instructions.length; i++) {

		let grid3 = document.createElement('div');
		grid3.classList.add('myInstructionsGrid');
		container.appendChild(grid3);

		let grid4 = document.createElement('div');
		grid4.classList.add('myInstructionsGrid');
		grid4.innerHTML = selected.instructions[i][0];
		container.appendChild(grid4);

		let grid5 = document.createElement('div');
		grid5.classList.add('myInstructionsGrid');
		grid5.innerHTML = selected.instructions[i][1];
		container.appendChild(grid5);
	}
}

function fn_remove(div) {

	while (div.firstChild) {
		div.removeChild(div.firstChild);
	}
}

function fn_add(div, select, items) {

	let index = select.options.selectedIndex;
	let selected = items.exercises[index];

	if (selected.image !== undefined) {
		fn_image(div, selected);
	}
	if (selected.exercises !== undefined) {
		fn_play_and_text(div, selected);
	}
	if (selected.instructions !== undefined) {
		fn_instructions(div, selected);
	}
}

function fn_select(main, items) {

	let select = document.createElement('select');
	select.classList.add('mySelect');
	select.innerHTML = '';
	select.addEventListener('change', () => {
		fn_remove(main.children[1]);
		fn_add(main.children[1], select, items);
	});
	main.appendChild(select);

	for (let i=0; i<items.optgroup.length; i++) {
        const optgroup = document.createElement('optgroup');
        optgroup.label = items.optgroup[i].group;
        select.appendChild(optgroup);
        for (let j=0; j<items.optgroup[i].options.length; j++) {
            const option = document.createElement('option');
            option.textContent = items.optgroup[i].options[j].name;
            optgroup.appendChild(option);
        }
    }

	return select;
}

function fn_items_div(main, items, select) {

	let div = document.createElement('div');
	main.appendChild(div);

	fn_remove(div);
	fn_add(div, select, items);
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

function fn_app() {

	let optgroup = fn_exercises();

	let group = [];
	for (let i=0; i<optgroup.length; i++) {
		group = group.concat(optgroup[i].group)
	}

	let exercises = [];
	for (let i=0; i<optgroup.length; i++) {
		exercises = exercises.concat(optgroup[i].options);
	}

	let element = document.getElementById('main');

	fn_header(element, 'Exercises');
	fn_main(element, {
		optgroup: optgroup,
		group: group,
		exercises: exercises,
	});
}
fn_app();
