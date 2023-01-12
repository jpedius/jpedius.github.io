'use strict';

// Version 6.20

const game = {

    turn: true,
    whale: [],
    octopus: [],
}
 
let a = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

let b = [0, 0, 0, 0, 0, 0, 0];

console.log('a', a);

document.addEventListener('click', event => {

    const target = event.target;
    const isCell = target.classList.contains('grid-item');
    const isDisabled = target.classList.contains('disabled');

    if (isCell && !isDisabled) {
    
        console.log('target', target);
        console.log('class list', target.classList);
        console.log('b', b);
        console.log('row/column', target.dataset.row, target.dataset.column);
        
        let c = Number(target.dataset.row);
        b[c] = b[c] + 1;
        
        console.log('b[c]', b[c]);
        
        target.classList.add('disabled');
        target.classList.add(game.turn ? 'whale' : 'octopus');

        game.turn = !game.turn;
    } 
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelector('.grid-over').classList.remove('visible');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    for (let i=0; i<b.length; i++) {
        b[i] = 0;
    }
    game.whale = [];
    game.octopus = [];
});
