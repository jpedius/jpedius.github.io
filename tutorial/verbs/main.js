'use strict';

let who   = document.getElementById('who');
let kind  = document.getElementById('kind');
let what  = document.getElementById('what');
let where = document.getElementById('where');
let when  = document.getElementById('when');
let why   = document.getElementById('why');

let howMany = verbs;
howMany = my_shuffle(howMany);
let previousOrNext = 0;

function my_values() {

    who.value   = '';
    what.value  = '';
    where.value = '';
    when.value  = '';
    why.value   = '';

    kind.innerHTML = '';
    for (let i=0; i<howMany[previousOrNext].length; i++) {
        const option = document.createElement('option');
        option.textContent = `${howMany[previousOrNext][i]}`;
        kind.appendChild(option);
    }
}
my_values();

function my_words() {
    let words = `${who.value} ${kind.value} ${what.value}`;
    if (where.value !== '') { words += `, ${where.value}`; }
    if (when.value  !== '') { words += `, ${when.value}`; }
    if (why.value   !== '') { words += `, ${why.value}`; }
    return words += '.';
}

function my_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    return my_values();
}

function my_play() {
    let my = who.value !== '' && what.value !== '';
    let words = '';
    if (my) { words = my_words(); }
    my ? my_speak(words) : my_speak(kind.value);
}

function my_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    return my_values();
}
