'use strict';

let root = document.querySelector('#root');
let items = root.children[0].children;
let num = Number(root.children[0].dataset.length);

const game = {
 
    turn: true,
    winner: null,
    connect: [0, 0, 0, 0, 0, 0, 0],
}

function winning_game() {

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

            for (let i=0; i<items.length; i++) {

                let cellRow = Number(items[i].dataset.row);
                let cellColumn = Number(items[i].dataset.column);

                if (cellRow === targetRow) {
                    if (cellColumn === game.connect[targetRow]) {
                        cellItem = items[i];
                    } 
                }
            }

            if (cellItem !== null) {

                cellItem.classList.add('disabled');
                cellItem.classList.add(game.turn ? 'whale' : 'octopus');

                game.turn = !game.turn;
                game.winner = winning_game();
                game.connect[targetRow] += 1;
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
