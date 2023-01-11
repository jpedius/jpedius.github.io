'use strict';

const game = {

    turn: true,
}
 
let a = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
];

console.log('a', a);

document.addEventListener('click', event => {

    const target = event.target;
    const isCell = target.classList.contains('grid-item');
    const isDisabled = target.classList.contains('disabled');

    if (isCell && !isDisabled) {
    
        console.log('target', target);
        console.log('class list', target.classList);
        
        target.classList.add('disabled');
        target.classList.add(game.turn ? 'whale' : 'octopus');

        game.turn = !game.turn;
    } 
});
