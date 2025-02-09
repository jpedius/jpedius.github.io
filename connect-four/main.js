'use strict';

function fn_restart(items) {

	items.turn = true;
	items.winner = 0;

    for (let i=0; i<items.levels.length; i++) {
        items.levels[i] = 0;
    }
}

function fn_game(target, num, idx, row, column, items) {

    const container = target.classList.contains('myContainer');
    const grid = target.classList.contains('myGrid');

	if (grid && !container && (items.winner === 0)) {

		console.log(row, column);

		console.log(num, idx, row, column);

	}
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

	let num = items.NUMBER_OF_ROWS * items.NUMBER_OF_COLUMNS;

	let main = document.createElement('main');
	element.appendChild(main);

	let div = document.createElement('div');
	main.appendChild(div);

	let button = document.createElement('button');
	button.classList.add('myButton');
	button.innerHTML = 'Restart';
	button.addEventListener('click', () => {

		div1.innerHTML = items.allow[0];

		for (let i=0; i<num; i++) {

			let grid = container.children[i];
			grid.classList.remove('disabled', 'whale', 'octopus');

			fn_restart(items);
		}
	});
	div.appendChild(button);

	let div1 = document.createElement('div');
	div1.classList.add('myDiv');
	div1.innerHTML = items.allow[0];
	div.appendChild(div1);

	let container = document.createElement('div');
	container.classList.add('myContainer');
	div.appendChild(container);

	for (let i=0; i<num; i++) {

		let row = (items.NUMBER_OF_ROWS - 1)
			- Math.floor(i / items.NUMBER_OF_COLUMNS);
		let column = i % items.NUMBER_OF_COLUMNS;

		let grid = document.createElement('div');
		grid.classList.add('myGrid');
		grid.addEventListener('click', event => {

    		const target = event.target;

    		fn_game(target, num, i, row, column, items);

			div1.innerHTML = items.allow[items.winner];
		});
		container.appendChild(grid);
	}
}

function fn_settings() {

	const items = {
		NUMBER_OF_ROWS: 6,
		NUMBER_OF_COLUMNS: 7,
		turn: true,
		winner: 0,
		allow: [
			'Playing...',
			'Whale Won',
			'Octopus Won',
			'A Draw',
		],

		levels: [0, 0, 0, 0, 0, 0, 0],
		positions: [
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, false],
			[false, false, false, false],
			[false, false, false, false],

			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, false],
			[false, false, false, false],
			[false, false, false, false],

			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, true ],
			[false, false, false, false],
			[false, false, false, false],
			[false, false, false, false],

			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[true,  true,  true,  true ],
			[true,  true,  false, false],
			[true,  true,  false, false],
			[true,  true,  false, false],

			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[true,  true,  true,  true ],
			[true,  true,  false, false],
			[true,  true,  false, false],
			[true,  true,  false, false],

			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[false, true,  true,  true ],
			[true,  true,  true,  true ],
			[true,  true,  false, false],
			[true,  true,  false, false],
			[true,  true,  false, false],
		],
	};

	return items;
}

function fn_app() {

	let element = document.getElementById('main');

	fn_header(element, 'Connect Four');
	fn_main(element, fn_settings());
}
fn_app();
