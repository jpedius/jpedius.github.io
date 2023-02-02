'use strict';

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

function deck(cards, suits) {

    let items = [];
    let len = 0;
    
    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<cards.length; j++) {
            
            items[len] = {
                cards: cards[j],
                suits: suits[i],
                num: len,
            };
            len++;
        }
    }
    
    return items;
}

function shuffle(items) {
/*
    let items = array; //JSON.parse(JSON.stringify(array));
    
    console.log(array);
    console.log(JSON.stringify(array));
    console.log(JSON.parse(JSON.stringify(array)));
*/    
    let current = items.length;
    //let rand;

    // While there remain elements to shuffle...
    while (current !== 0) {

        // Pick a remaining element...
        let rand = Math.floor(Math.random() * current);
        current--;

        // And swap it with the current element.
        [items[current], items[rand]] = [items[rand], items[current]];
    }

    return items;
}
