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
    
    levels: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        
        [0, 4, 8],
        [2, 4, 8],    
    ],
};

const text = root.children[1].children[0];
text.innerText = game.allow[game.winner];

document.addEventListener('click', event => {

    const target = event.target;

    const container = target.classList.contains('grid-container');
    const items = target.classList.contains('grid-item');

    if (items && !container && game.winner === 0) {
    
        if (!(Number(target.dataset.pos))) {
        //[items.dataset.pos]
        //items.classList.add('disabled');
        //items.classList.add(game.turn ? 'x' : 'o');
            console.log(items, target, Number(target.dataset.pos));
        }
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
    }
});

/*    
    
    
    all: 0, 
    
    number: Number(root.children[0].dataset.length),
    
    connect: root.children[0].children,
    
    level: [0, 0, 0, 0, 0, 0, 0],
    
    position: [
        
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],

        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false],
        
        [false, false, false, true],
        [false, false, false, true],
    ],
};

const text = root.children[1].children[0];
text.innerText = game.draw[game.all];

function game_items() {

    let all = 0;
    for (let i=0; i<game.connect.length; i++) {
        
        if (game.connect[i].classList.contains('disabled')) {
        
            all += 1;

            let turn = game.turn ? 'whale' : 'octopus';
            if (game.connect[i].classList.contains(turn)) {

                let pos = game.position[i];
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
                            let y = game.connect[x].classList.contains(turn);
                            if (y === true) { step += 1; }
                        }
                        if (step === 4) {
                            return [turn, (game.turn ? 1 : 2)];
                        }
                    }
                }
            }
        }
    }
    
    if (all === 42) { return [null, 3]; }
    return [null, 0];
}

document.addEventListener('click', event => {

    const target = event.target;

    const container = target.classList.contains('grid-container');
    const items = target.classList.contains('grid-item');

    if (items && !container && game.winner === null) {

        let targetRow = Number(target.dataset.row);
        if (game.level[targetRow] < game.number) {

            let cell = null;
            for (let i=0; i<game.connect.length; i++) {
                let row = Number(game.connect[i].dataset.row);
                let column = Number(game.connect[i].dataset.column);
                if (row === targetRow && column === game.level[targetRow]) {
                    cell = game.connect[i];
                }
            }

            if (cell !== null) {
                cell.classList.add('disabled');
                cell.classList.add(game.turn ? 'whale' : 'octopus');
                game.level[targetRow] += 1;
                [game.winner, game.all] = game_items();
                if (game.winner === null) {
                    game.turn = !game.turn;
                }
            }
        }
    }

    text.innerText = game.draw[game.all];
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    game.winner = null;
    game.all = 0;
    for (let i=0; i<game.level.length; i++) {
        game.level[i] = 0;
    }
});
*/

