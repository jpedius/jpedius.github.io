'use strict';

// Version 6.20

const game = {
    turn: true,
    connect: [0, 0, 0, 0, 0, 0, 0],
}
 
document.addEventListener('click', event => {

    const target = event.target;
    
    const isCell = target.classList.contains('grid-container'); // item
    
    const isDisabled = target.classList.contains('disabled');
    
    //console.log('isCell', isCell);
    
    //  && !isDisabled

    if (isCell) {
        
        let i = Number(target.dataset.row);
        
        if (game.connect[i] < 6) {

            target.classList.add('disabled');
            target.classList.add(game.turn ? 'whale' : 'octopus');
            
            console.log('target', target);

            game.connect[i] = game.connect[i] + 1;

            game.turn = !game.turn;
        }
    }
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelector('.grid-over').classList.remove('visible');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    for (let i=0; i<game.connect.length; i++) {
        game.connect[i] = 0;
    }
});
