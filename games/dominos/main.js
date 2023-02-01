'use strict';

const root = document.querySelector('#root');

const game = {

    tiles: [
        [1,1],
        [2,1],[2,2],
        [3,1],[3,2],[3,3],
        [4,1],[4,2],[4,3],[4,4],
        [5,1],[5,2],[5,3],[5,4],[5,5],
        [6,1],[6,2],[6,3],[6,4],[6,5],[6,6],
        [7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],
        [8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8],
        [9,1],[9,2],[9,3],[9,4],[9,5],[9,6],[9,7],[9,8],[9,9],
        
        [10,1],[10,2],[10,3],[10,4],[10,5],[10,6],[10,7],[10,8],[10,9],[10,10],
        [11,1],[11,2],[11,3],[11,4],[11,5],[11,6],[11,7],[11,8],[11,9],[11,10],[11,11],
        [12,1],[12,2],[12,3],[12,4],[12,5],[12,6],[12,7],[12,8],[12,9],[12,10],[12,11],[12,12],
    ],
    
    set: [55, 91],
};

document.querySelector('.start-game').addEventListener('click', () => {

    let g = true ? game.set[55] : game.set[91];
    
    
    //g = shuffle(g);
    
    console.log(g);
});

function shuffle(array) {

    let items = JSON.parse(JSON.stringify(array));
    let currentIndex = items.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [items[currentIndex],items[randomIndex]] = [
            items[randomIndex],items[currentIndex]];
    }

    return items;
}
