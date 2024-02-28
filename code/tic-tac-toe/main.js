'use strict';

let container = document.getElementById('container');
let restart = document.getElementById('restart');
let game = document.getElementById('game');

let turn = true;
let winner = 0;

let allow = [
    'Playing...',
    'X Won',
    'O Won',
    'A Draw',
];

let position = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0,
];

let xo = [
    null, null, null,
    null, null, null,
    null, null, null,
];

let levels = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
];

function my_game_over() {

    container.querySelectorAll('.myGrid').forEach(item => {
        item.classList.remove('disabled', 'x', 'o');
    });

    turn = true;
    winner = 0;

    for (let i=0; i<position.length; i++) {
        position[i] = 0;
        xo[i] = null;
    }

    my_game_over.innerHTML = allow[0];
}
my_game_over();

container.addEventListener('click', event => {

    const target = event.target;

    const crate = target.classList.contains('myContainer');
    const item = target.classList.contains('myGrid');

    if (item && !crate && (winner === 0)) {

        if (!target.classList.contains('disabled')) {
            
            let t = turn ? 'x' : 'o';
            
            target.classList.add('disabled');
            target.classList.add(t);
            
            let col = Number(target.dataset.column);
            let row = Number(target.dataset.row);
            let pos = (row * 3) + col;
            
            position[pos] = 1;
            xo[pos] = t;
            
            turn = !turn;
        }

        let b = 0;
        for (let i=0; i<position.length; i++) {
            b += position[i];
        }

        for (let i=0; i<levels.length; i++) {
            
            let x = levels[i][0];
            let y = levels[i][1];
            let z = levels[i][2];
            
            let a = position[x]
                  + position[y]
                  + position[z];

            if (a === 3) {
                let r = xo[x] + xo[y] + xo[z];
                if (r === 'xxx' || r === 'ooo') {
                    winner = turn ? 2 : 1;
                    break;
                }
            } 
        }

        if (b === 9 && winner === 0) { winner = 3; }
    }

    game.innerHTML = allow[winner];

}, false);
