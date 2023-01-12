'use strict';

// Version 6.20

function game_item() {

    let root = document.querySelector('#root');
    
    let container = root.children[0];
    
    let items = container.children;
    
    let row_column = [];
    
    for (let i=0; i<items; i++) {
        console.log(item[i]);
    }
    
    return row_column;
}

game_item();

const game = {
    turn: true,
    connect: [0, 0, 0, 0, 0, 0, 0],
}
 
document.addEventListener('click', event => {

    const target = event.target;
    
    const container = target.classList.contains('grid-container');
    const item = target.classList.contains('grid-item');
    
    if (item && !container) {
    
        let i = Number(target.dataset.row);
        let j = Number(target.dataset.column);
        
        if (game.connect[i] < 6) {

            console.log('q', i);
            
            game.connect[i] += 1;
            game.turn = !game.turn;
        }

        console.log('i/j', i, j, game.connect[i]);
    } 
    
    //const isCell = target.classList.contains('grid-container');
    //const isCell2 = target.classList.contains('grid-item'); // item
    
    const isDisabled = target.classList.contains('disabled');
    
    //console.log('isCell', isCell);
    
    //  && !isDisabled
    //console.log('target', target);
    //console.log('cell', isCell, isCell2);
    
    /*
    if (isCell) {
        
        let i = Number(target.dataset.row);
        
        if (game.connect[i] < 6) {

            target.classList.add('disabled');
            target.classList.add(game.turn ? 'whale' : 'octopus');

            game.connect[i] = game.connect[i] + 1;

            game.turn = !game.turn;
        }
    }
    */
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
