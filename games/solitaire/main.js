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
    
    console.log(items);
    return items;
}

function shuffle(array) {

    let items = JSON.parse(JSON.stringify(array));
    let currentIndex = items.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [items[currentIndex], items[randomIndex]] = [
            items[randomIndex], items[currentIndex]];
    }

    return items;
}

function shuffle2(array) {

    let items = [...array];    
    let current = items.length;
    let rand = 0;

    while (current !== 0) {
        
        rand = Math.floor(Math.random() * current);
        current--;
        
        [items[current], items[rand]] = [items[rand], items[current]];
        
        //console.log(items[current], items[rand], current, rand);
    }

    console.log(items);
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

for (let i=0; i<7; i++) {
    for (let j=0; j<c; j++) {
        b[i][j] = a.shift();
        console.log('!', i, j, c, a);
    }
    c += 1;
}
