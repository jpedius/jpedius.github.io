'use strict';

let game = {

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
    
    xo: [
        null, null, null,
        null, null, null,
        null, null, null,
    ],
    
    levels: [
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

let grid = document.getElementById('grid');
grid.addEventListener('click', event => {

    const target = event.target;

    const container = target.classList.contains('gridContainer');
    const item = target.classList.contains('gridItem');

    if (item && !container && (game.winner === 0)) {

        if (!target.classList.contains('disabled')) {
            
            let turn = game.turn ? 'x' : 'o';
            
            target.classList.add('disabled');
            target.classList.add(turn);
            
            let col = Number(target.dataset.column);
            let row = Number(target.dataset.row);
            let pos = (row * 3) + col;
            
            game.position[pos] = 1;
            game.xo[pos] = turn;
            
            game.turn = !game.turn;
        }
 
        let xo = 0;
        for (let i=0; i<game.position.length; i++) {
            xo += game.position[i];
        }

        for (let i=0; i<game.levels.length; i++) {
            
            let x = game.levels[i][0];
            let y = game.levels[i][1];
            let z = game.levels[i][2];
            
            let a = game.position[x]
                  + game.position[y]
                  + game.position[z];

            if (a === 3) {
                let r = game.xo[x] + game.xo[y] + game.xo[z];
                if (r === 'xxx' || r === 'ooo') {
                    game.winner = game.turn ? 2 : 1;
                    break;
                }
            } 
        }
        
        if (xo === 9 && game.winner === 0) { game.winner = 3; }
    }
            
    over.innerHTML = game.allow[game.winner];

}, false);

let restart = document.getElementById('restart');
restart.addEventListener('click', () => {

    grid.querySelectorAll('.gridItem').forEach(item => {
        item.classList.remove('disabled', 'x', 'o');
    });

    game.turn = true;
    game.winner = 0;
    for (let i=0; i<game.position.length; i++) {
        game.position[i] = 0;
        game.xo[i] = null;
    }

    over.innerHTML = game.allow[0];
}, false);

let over = document.getElementById('over');
over.innerHTML = game.allow[0];

let mode = document.getElementById('mode');
mode.addEventListener('click', () => {

    let element = document.body;
    element.classList.toggle('buttonModeDark');
    element.classList.toggle('buttonModeLight');
}, false);
