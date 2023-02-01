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

    let a = [];
    let d = 0;
    for (let i=0; i<suits.length; i++) {
        for (let j=0; j<cards.length; j++) {
            //let num = a.length - 1;
            a[d] = {
                cards: cards[j],
                suits: suits[i],
                num: d
            };
            //console.log(num);
            d++;
        }
    }
    console.log(a, d);
    return a;
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
