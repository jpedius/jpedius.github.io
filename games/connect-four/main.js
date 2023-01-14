'use strict';

let root = document.querySelector('#root');
let items = root.children[0].children;
let num = Number(root.children[0].dataset.length);

const game = {
 
    turn: true,
    winner: null,
    connect: [0, 0, 0, 0, 0, 0, 0],
    
    a: [
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],
        
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],

        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false],
        [false, false, false, false],

        [false, true,  true,  true],
        [false, true,  true,  true],
        [false, true,  true,  true],
        [true,  true,  true,  true],
        [true,  true,  false, false],
        [true,  true,  false, false],
        [true,  true,  false, false],

        [false, true,  true,  true],
        [false, true,  true,  true],
        [false, true,  true,  true],
        [true,  true,  true,  true],
        [true,  true,  false, false],
        [true,  true,  false, false],
        [true,  true,  false, false],

        [false, true,  true,  true],
        [false, true,  true,  true],
        [false, true,  true,  true],
        [true,  true,  true,  true],
        [true,  true,  false, false],
        [true,  true,  false, false],
        [true,  true,  false, false],
    ],
}

function winning_game(cell, len) {

    //game.a[]
    console.log(cell, len, game.turn);
    for (let i=0; i<game.a.length; i++) {
        if (items[i].classList.contains('disabled')) {
            for (let k=0; k<4; k++) {
                if (game.a[i][k] === true) {
                    console.log('true', game.a[i][k], k);
                }
            }
        } 
    }
    
    return null;
}

document.addEventListener('click', event => {

    const target = event.target;

    const container = target.classList.contains('grid-container');
    const item = target.classList.contains('grid-item');

    if (item && !container && game.winner === null) {

        let targetRow = Number(target.dataset.row);

        if (game.connect[targetRow] < num) {

            let cellItem = null;
            let cellLen = -1;
            
            for (let i=0; i<items.length; i++) {

                let cellRow = Number(items[i].dataset.row);
                let cellColumn = Number(items[i].dataset.column);

                if (cellRow === targetRow) {
                    if (cellColumn === game.connect[targetRow]) {
                        cellItem = items[i];
                        cellLen = i;
                    } 
                }
            }

            if (cellItem !== null) {

                cellItem.classList.add('disabled');
                cellItem.classList.add(game.turn ? 'whale' : 'octopus');

                game.connect[targetRow] += 1;
                
                game.winner = winning_game(cellItem, cellLen, game.turn);

                if (game.winner === null) {
                    game.turn = !game.turn;
                } 
            }
        }
    }
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelector('.grid-over').classList.remove('visible');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    game.winner = null;
    for (let i=0; i<game.connect.length; i++) {
        game.connect[i] = 0;
    }
});
