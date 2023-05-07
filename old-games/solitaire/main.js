'use strict';

function deck(cards, suits) {

    let items = [];
    let current = 0;
    
    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<cards.length; j++) {
            
            items[current] = {
                cards: cards[j],
                suits: suits[i],
                num: current,
            };
            current += 1;
        }
    }
    
    return items;
}

function shuffle(array) {

    let items = [...array];    
    let current = items.length;
    let rand = 0;

    while (current !== 0) {
        
        rand = Math.floor(Math.random() * current);
        current--;
        
        [items[current], items[rand]] = [items[rand], items[current]];
    }

    return items;
}

function rows(array, stack) {

    let number = 1;
    
    for (let i=0; i<array.length; i++) {
        for (let j=0; j<number; j++) {
            array[i][j] = stack.pop();
        }
        number += 1;
    }
    
    return array;
}

const root = document.querySelector('#root');

const game = {

    cards: [
        'Ace',
        'Two',
        'Three',
        'Four',
        'Five',
        'Six',
        'Seven',
        'Eight',
        'Nine',
        'Ten',
        'Jack',
        'Queen',
        'King',
    ],
    
    suits: [{
        name: 'Club',
        num: 0,
    }, { 
        name: 'Diamond',
        num: 0,
    }, { 
        name: 'Heart',
        num: 0,
    }, { 
        name: 'Spade',
        num: 0,
    }],
    
    rows: [[], [], [], [], [], [], []],
    
    player: [],
    repeat: [],
    
    function q() {
        return 0;
    }
};

let a = deck(game.cards, game.suits);
a = shuffle(a);
let b = rows(game.rows, a);

console.log(game.q());

console.log(a, b);
