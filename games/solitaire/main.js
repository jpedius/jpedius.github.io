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
a = shuffle(a);

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

function shuffle(array) {

    let items = JSON.parse(JSON.stringify(array));
    
    console.log(array);
    console.log(JSON.stringify(array));
    console.log(JSON.parse(JSON.stringify(array)));
    
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
