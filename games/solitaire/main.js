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

function deck(cards, suits) {

    let d = [];
    for (let i=0; i<cards.length; i++) {
        for (let j=0; j<suits.length; j++) {
            console.log(d[i * j]);
            d[i * j]++;
        }
    }
    console.log(d);
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
