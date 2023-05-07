'use strict';

const root = document.querySelector('#root');

const game = {

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

const text = root.children[1].children[0];
text.innerText = game.allow[game.winner];

document.addEventListener('click', event => {

    const target = event.target;

    const container = target.classList.contains('grid-container');
    const item = target.classList.contains('grid-item');

    if (item && !container && game.winner === 0) {
    
        if (!target.classList.contains('disabled')) {
            
            let turn = game.turn ? 'x' : 'o';
            
            target.classList.add('disabled');
            target.classList.add(turn);
            
            let a = Number(target.dataset.pos);
            game.position[a] = 1;
            game.xo[a] = turn;
            
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

    text.innerText = game.allow[game.winner];
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'x', 'o');
    });

    game.turn = true;
    game.winner = 0;
    for (let i=0; i<game.position.length; i++) {
        game.position[i] = 0;
        game.xo[i] = null;
    }
});
