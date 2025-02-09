'use strict';

function fn_restart(items) {

	items.turn = true;
	items.winner = 0;

	for (let i=0; i<items.position.length; i++) {
		items.position[i] = 0;
	}

	for (let i=0; i<items.x_or_o.length; i++) {
		items.x_or_o[i] = null;
	}
}

function fn_game(target, num, idx, items) {

    const container = target.classList.contains('myContainer');
    const grid = target.classList.contains('myGrid');

    if (grid && !container && (items.winner === 0)) {

		if (!target.classList.contains('disabled')) {

			let t = items.turn ? 'x' : 'o';

			target.classList.add('disabled');
			target.classList.add(t);

			items.position[idx] = 1;
			items.x_or_o[idx] = t;

			items.turn = !items.turn;
		}

		let pos = 0;
		for (let i=0; i<items.position.length; i++) {
			pos += items.position[i];
		}

		for (let i=0; i<items.winning_levels.length; i++) {

			let x = items.winning_levels[i][0];
			let y = items.winning_levels[i][1];
			let z = items.winning_levels[i][2];

			let a = items.position[x]
				  + items.position[y]
				  + items.position[z];

			if (a === 3) {
				let r = items.x_or_o[x] + items.x_or_o[y] + items.x_or_o[z];
				if (r === 'xxx' || r === 'ooo') {
					items.winner = items.turn ? 2 : 1;
					break;
				}
			} 
		}

		if (pos === num && items.winner === 0) { items.winner = 3; }
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
			grid.classList.remove('disabled', 'x', 'o');

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

		let grid = document.createElement('div');
		grid.classList.add('myGrid');
		grid.addEventListener('click', event => {

    		const target = event.target;

    		fn_game(target, num, i, items);

			div1.innerHTML = items.allow[items.winner];
		});
		container.appendChild(grid);
	}
}

function fn_settings() {

	const items = {
		NUMBER_OF_ROWS: 3,
		NUMBER_OF_COLUMNS: 3,
		turn: true,
		winner: 0,
		allow: [
			'Playing...',
			'X Won',
			'O Won',
			'A Draw',
		],

		position: [
			0, 0, 0,
			0, 0, 0,
			0, 0, 0,
		],
		x_or_o: [
			null, null, null,
			null, null, null,
			null, null, null,
		],
		winning_levels: [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		],
	};

	return items;
}

function fn_app() {

	let element = document.getElementById('main');

	fn_header(element, 'Tic-Tac-Toe');
	fn_main(element, fn_settings());
}
fn_app();
