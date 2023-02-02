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
            current++;
        }
    }
    
    return items;
}

function shuffle(array) {

    let items = [...array];    
    let current = items.length;

    while (current !== 0) {
        
        let rand = Math.floor(Math.random() * current);
        current--;
        
        [items[current], items[rand]] = [items[rand], items[current]];
    }

    return items;
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
    
    suits: [
        'Club',
        'Diamond',  
        'Heart',
        'Spade',
    ],
};

let a = deck(game.cards, game.suits);
console.log('!', a);
a = shuffle(a);
console.log('@', a);

let b = [[], [], [], [], [], [], []];
let c = 1;

for (let i=0; i<b.length; i++) {
    for (let j=0; i<c; i++) {
        console.log(i, j, c);
    }
    c += 1;
}
