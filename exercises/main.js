'use strict';

function fn_select(items) {

	let element = document.getElementById('idMain');

	let select = document.createElement('select');
	select.classList.add('mySelect');
	select.innerHTML = '';
	select.addEventListener('change', () => {
		fn_container({
			exercises: items.exercises,
			select: select,
			div: element.children[1],
		})
	});

	for (let i = 0; i < items.exercises.length; i++) {
		const option = document.createElement('option');
		option.textContent = items.exercises[i].name;
		select.appendChild(option);
	}

	element.appendChild(select);

	return select;
}

function fn_container_image(items, selected) {

	let div = document.createElement('div');
	div.classList.add('myImageDiv');

	let img = document.createElement('img');
	img.classList.add('myImage');
	img.src = '/main/img/therapy/pt/' + selected.image;

	div.appendChild(img);

	items.div.appendChild(div);
}

function fn_container_exercises(items, selected) {

	let div = document.createElement('div');
	div.classList.add('myExercisesContainer');

	for (let i=0; i<selected.exercises.length; i++) {

		let play = document.createElement('button');
		play.classList.add('myExercisesPlay');
		play.innerHTML = 'Play';
		play.addEventListener('click', () => {
			fn_speak(selected.exercises[i]);
		});

		let div1 = document.createElement('div');
		div1.classList.add('myExercisesGrid');
		div1.appendChild(play);

		let div2 = document.createElement('div');
		div2.classList.add('myExercisesGrid');
		div2.innerHTML = selected.exercises[i];

		div.appendChild(div1);
		div.appendChild(div2);
	}

	items.div.appendChild(div);
}

function fn_container_instructions(items, selected) {

	let div = document.createElement('div');
	div.classList.add('myInstructionsContainer');

	let div1 = document.createElement('div');
	div1.classList.add('myInstructionsGrid');

	let div2 = document.createElement('div');
	div2.classList.add('myInstructionsGridSpan');

	let hr = document.createElement('hr');
	div2.appendChild(hr);

	div.appendChild(div1);
	div.appendChild(div2);

	for (let i=0; i<selected.instructions.length; i++) {

		let div3 = document.createElement('div');
		div3.classList.add('myInstructionsGrid');

		let div4 = document.createElement('div');
		div4.classList.add('myInstructionsGrid');
		div4.innerHTML = selected.instructions[i][0];

		let div5 = document.createElement('div');
		div5.classList.add('myInstructionsGrid');
		div5.innerHTML = selected.instructions[i][1];

		div.appendChild(div3);
		div.appendChild(div4);
		div.appendChild(div5);
	}

	items.div.appendChild(div);
}

function fn_container(items) {

	while (items.div.firstChild) {
		items.div.removeChild(items.div.firstChild);
	}

	let index = items.select.options.selectedIndex;
	let selected = items.exercises[index];

	if (selected.image !== undefined) {
		fn_container_image(items, selected);
	}
	if (selected.exercises !== undefined) {
		fn_container_exercises(items, selected);
	}
	if (selected.instructions !== undefined) {
		fn_container_instructions(items, selected);
	}
}

function fn_main() {

	let exercises = fn_exercises();

	let select = fn_select({ exercises: exercises });

	let element = document.getElementById('idMain');
	let div = document.createElement('div');
	fn_container({
		exercises: exercises,
		select: select,
		div: div,
	});
	element.appendChild(div);
}
fn_main();
