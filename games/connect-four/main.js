'use strict';

const root = document.querySelector('#root');

const game = {

    turn: true,
    
    winner: null,
    
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
};

function game_items(cell) {

    for (let i=0; i<game.connect.length; i++) {
        
        if (game.connect[i].classList.contains('disabled')) {
        
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
                        
                            console.log(idx[j][k]);
                        
                        
                            //let w = i + idx[j][k];
                            //console.log(w);
                            //let x = game.connect[w].classList.contains(turn);
                            //console.log(x);
                            //if (x) { y += 1; }
                            //console.log(y);
                        }
                        if (step === 4) { game.winner = turn; }
                    }
                }
                /*
                if (pos[0] === true) {
                
                    let x = [0, -8, -16, -24];
                    let y = 0;
                    for (let j=0; j<x.length; j++) {
                        if (game.connect[i + x[j]].classList.contains(turn)) {
                            //console.log(i + x[j], i, j, x[j]);
                            y += 1;
                        }
                    }
                    if (y === 4) {
                        game.winner = turn;
                        return turn;
                    }
                    
                    //console.log(turn, pos[0], x);
                }
                
                if (pos[1] === true) {
                
                    let x = [0, -7, -14, -21];
                    let y = 0;
                    for (let j=0; j<x.length; j++) {
                        if (game.connect[i + x[j]].classList.contains(turn)) {
                            //console.log(i + x[j], i, j, x[j]);
                            y += 1;
                        }
                    }
                    if (y === 4) {
                        game.winner = turn;
                        return turn;
                    }
                    
                    //console.log(turn, pos[1], x);
                }
                
                if (pos[2] === true) {
                
                    let x = [0, -6, -12, -18];
                    let y = 0;
                    for (let j=0; j<x.length; j++) {
                        if (game.connect[i + x[j]].classList.contains(turn)) {
                            //console.log(i + x[j], i, j, x[j]);
                            y += 1;
                        }
                    }
                    if (y === 4) {
                        game.winner = turn;
                        return turn;
                    }
                    
                    //console.log(turn, pos[2], x);
                }
                
                if (pos[3] === true) {
                
                    let x = [0, 1, 2, 3];
                    let y = 0;
                    for (let j=0; j<x.length; j++) {
                        if (game.connect[i + x[j]].classList.contains(turn)) {
                            //console.log(i + x[j], i, j, x[j]);
                            y += 1;
                        }
                    }
                    if (y === 4) {
                        game.winner = turn;
                        return turn;
                    }
                    
                    //console.log(turn, pos[3], x);
                }
                */
            }
        }
    } 
    
    return null;
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
                
                game.winner = game_items(cell);
                
                if (game.winner === null) {
                    game.turn = !game.turn;
                } 
            } 
        } 
    }
});

document.querySelector('.restart').addEventListener('click', () => {

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    game.winner = null;
    for (let i=0; i<game.level.length; i++) {
        game.level[i] = 0;
    }
});

    


/*    
    

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
        
            if (game.a[i][0] === true) {
            
            
                let x = [0, 6, 12, 18];
                let y = 0;
                let z = game.turn ? 'whale' : 'octopus';
                
                for (let l=0; l<x.length; l++) {
                    if (
                    
                    
                    === x[l]    x[0] === x[l]) {
                        y += 1;
                    }
                }

                if (y === 4) {
                    game.winner = z;
                }
            }
            if (game.a[i][1] === true) {
            
                let y = 0;
                let x = [0, 7, 14, 21];
                for (let l=0; l<x.length; l++) {
                    if (x[0] === x[l]) {
                        y += 1;
                    }
                }

                if (y === 4) {
                    game.winner = game.turn ? 'whale' : 'octopus';
                }
            }
            if (game.a[i][2] === true) {
            
                let y = 0;
                let x = [0, 8, 16, 24];
                for (let l=0; l<x.length; l++) {
                    if (x[0] === x[l]) {
                        y += 1;
                    }
                }
                
                if (y === 4) {
                    game.winner = game.turn ? 'whale' : 'octopus';
                }
            }
            if (game.a[i][3] === true) {
            
                let y = 0;
                let x = [0, 1, 2, 3];
                for (let l=0; l<x.length; l++) {
                    if (x[0] === x[l]) {
                        y += 1;
                    }
                }
                
                if (y === 4) {
                    game.winner = game.turn ? 'whale' : 'octopus';
                }
            }
            
            for (let k=0; k<4; k++) {
                if (game.a[i][k] === true) {
                    console.log('i', 'k', game.a[i][k], k);
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
                
                winning_game(cellItem, cellLen, game.turn);

                if (game.winner === null) {
                    game.turn = !game.turn;
                } 
            }
        }
    }
});

document.yquerySelector('.restart').addEventListener('click', () => {

    //document.querySelector('.grid-over').classList.remove('visible');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.classList.remove('disabled', 'whale', 'octopus');
    });

    game.turn = true;
    
    game.winner = null;
    
    
    
    for (let i=0; i<game.connect.length; i++) {
        game.connect[i] = 0;
    }
});

*/