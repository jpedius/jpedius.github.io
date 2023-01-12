'use strict';

// Version 6.20

const game = {
    turn: true,
    connect: [0, 0, 0, 0, 0, 0, 0],
}
 
document.addEventListener('click', event => {

    const target = event.target;
    
    const isCell = target.classList.contains('grid-item');
    const isDisabled = target.classList.contains('disabled');
    
    //console.log('isCell', isCell);
    
    //  && !isDisabled

    if (isCell) {
        
        let i = Number(target.dataset.row);
        
        if (game.connect[i] < 5) {
            console.log('game:', game.connect[i]);
        }
        else {
            console.log('well:', i, game.connect[i]);
        }
        
        game.connect[i] = game.connect[i] + 1;
        
        
        
        // console.log('row/column', target.dataset.row, target.dataset.column, game.connect[i]);
        
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
    for (let i=0; i<game.connect.length; i++) {
        game.connect[i] = 0;
    }
});
