'use strict';

// Version 6.20

let root = document.querySelector('#root');
let items = root.children[0].children;

//console.log(items);
    
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
        //let j = Number(target.dataset.column);
        
        if (game.connect[i] < 6) {
            
            let b = null;
            
            for (let a=0; a<items.length; a++) {
                
                let c = Number(items[a].dataset.row);
                let d = Number(items[a].dataset.column);
                
                if (c === i && d === game.connect[i]) {
                    b = items[a];
                }
            }

            if (b === null) {
                
                //let cell = b;
                
                b.classList.add('disabled');
                b.classList.add(game.turn ? 'whale' : 'octopus');
                
                game.connect[i] += 1;
                game.turn = !game.turn;
            }
            
            console.log('b', b);
        }
    } 
    
    //const isCell = target.classList.contains('grid-container');
    //const isCell2 = target.classList.contains('grid-item'); // item
    
    //const isDisabled = target.classList.contains('disabled');
    
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
