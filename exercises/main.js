'use strict';

let exercises = fn_exercises();

function fn_options() {
	let select = document.getElementById('idSelect');
    select.innerHTML = '';
    for (let i = 0; i < exercises.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${exercises[i].name}`;
        select.appendChild(option);
    }
}
fn_options();

function fn_select() {

	let element = document.getElementById('idExercises');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}

	let select = document.getElementById('idSelect');
	let item = exercises[select.options.selectedIndex];

	if (item.image !== undefined) {

		let div = document.createElement('div');
		div.classList.add('myImageDiv');

		let img = document.createElement('img');
		img.classList.add('myImage');
		img.src = '/main/img/therapy/pt/' + item.image;

		div.appendChild(img);

		element.appendChild(div);
	}

	if (item.exercises !== undefined) {

		let div = document.createElement('div');
		div.classList.add('myExercisesContainer');

		for (let i=0; i<item.exercises.length; i++) {

			let play = document.createElement('button');
			play.classList.add('myExercisesPlay');
			play.innerHTML = 'Play';
			play.addEventListener('click', () => {
				fn_speak(item.exercises[i]);
			});

			let div1 = document.createElement('div');
			div1.classList.add('myExercisesGrid');
			div1.appendChild(play);

			let div2 = document.createElement('div');
			div2.classList.add('myExercisesGrid');
			div2.innerHTML = item.exercises[i];

			div.appendChild(div1);
			div.appendChild(div2);
		}

		element.appendChild(div);
	}

	if (item.instructions !== undefined) {

		let div = document.createElement('div');
		div.classList.add('myInstructionsContainer');

		let div3 = document.createElement('div');
		div3.classList.add('myInstructionsGrid');

		let div4 = document.createElement('div');
		div4.classList.add('myInstructionsGridSpan');

		let hr = document.createElement('hr');
		div4.appendChild(hr);

		div.appendChild(div3);
		div.appendChild(div4);

		for (let i=0; i<item.instructions.length; i++) {

			let div1 = document.createElement('div');
			div1.classList.add('myInstructionsGrid');

			let first = document.createElement('div');
			first.classList.add('myInstructionsGrid');
			first.innerHTML = item.instructions[i][0];

			let two = document.createElement('div');
			two.classList.add('myInstructionsGrid');
			two.innerHTML = item.instructions[i][1];

			div.appendChild(div1);
			div.appendChild(first);
			div.appendChild(two);
		}

		element.appendChild(div);
	}
}
fn_select();
