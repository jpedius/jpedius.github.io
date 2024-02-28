'use strict';

let container = document.getElementById('container');
let restart = document.getElementById('restart');
let game = document.getElementById('game');

let turn = true;
let winner = null;
let all = 0;

let draw = [
    'Playing...',
    'Whale Won',
    'Octopus Won',
    'A Draw',
];

let number = Number(container.dataset.length);

let connect = container.children;

let level = [0, 0, 0, 0, 0, 0, 0];

let position = [
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],

    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],

    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],

    [false, true,  true,  true],
    [false, true,  true,  true],
    [false, true,  true,  true],
    [true,  true,  true,  true],
    [true,  true,  false, false],
    [true,  true,  false, false],
    [true,  true,  false, false],

    [false, true,  true,  true],
    [false, true,  true,  true],
    [false, true,  true,  true],
    [true,  true,  true,  true],
    [true,  true,  false, false],
    [true,  true,  false, false],
    [true,  true,  false, false],

    [false, true,  true,  true],
    [false, true,  true,  true],
    [false, true,  true,  true],
    [true,  true,  true,  true],
    [true,  true,  false, false],
    [true,  true,  false, false],
    [true,  true,  false, false],
];

function my_game_over() {

    container.querySelectorAll('.myGrid').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    turn = true;
    winner = null;
    all = 0;

    for (let i=0; i<level.length; i++) {
        level[i] = 0;
    }

    game.innerHTML = draw[0];
}
my_game_over();

container.addEventListener('click', event => {

    const target = event.target;

    const crate = target.classList.contains('myContainer');
    const items = target.classList.contains('myGrid');

    if (items && !crate && (winner === null)) {

        let row = Number(target.dataset.row);
        if (level[row] < number) {

            let cell = null;
            for (let i=0; i<connect.length; i++) {
                let r = Number(connect[i].dataset.row);
                let c = Number(connect[i].dataset.column);
                if (r === row && c === level[row]) {
                    cell = connect[i];
                    break;
                }
            }

            if (cell !== null) {
                cell.classList.add('disabled');
                cell.classList.add(turn ? 'whale' : 'octopus');
                level[row] += 1;
                [winner, all] = my_game_items();
                if (winner === null) {
                    turn = !turn;
                }
            }
        }
    }

    game.innerText = draw[all];

}, false);

function my_game_items() {

    let a = 0;
    for (let i=0; i<connect.length; i++) {

        if (connect[i].classList.contains('disabled')) {

            a += 1;

            let t = turn ? 'whale' : 'octopus';
            if (connect[i].classList.contains(t)) {

                let pos = position[i];
                let idx = [
                    [0, -8, -16, -24],
                    [0, -7, -14, -21],
                    [0, -6, -12, -18],
                    [0,  1,   2,   3],
                ];

                for (let j=0; j<pos.length; j++) {
                    if (pos[j] === true) {
                        let step = 0;
                        for (let k=0; k<idx[j].length; k++) {
                            let x = i + idx[j][k];
                            let y = connect[x].classList.contains(t);
                            if (y === true) {
                                step += 1;
                            }
                        }
                        if (step === 4) {
                            return [t, (turn ? 1 : 2)];
                        }
                    }
                }
            }
        }
    }

    return (a === 42) ? [null, 3] : [null, 0];
}
