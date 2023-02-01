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

deck(game.cards, game.suits);

function deck(cards, suits) {

    let d = 0;
    let a = [];
    console.log(cards, suits);
    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<cards.length; j++) {
        
            let b = { cards: cards[j], suits: suits[i], len: d };
            //console.log('!', i, j, d);
            a[d] = b;
            console.log(b);
            d++;
        }
    }
    console.log(a, d);
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
        [items[currentIndex],items[randomIndex]] = [
            items[randomIndex],items[currentIndex]];
    }

    return items;
}
