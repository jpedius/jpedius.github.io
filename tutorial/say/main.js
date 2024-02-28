'use strict';

let kind = document.getElementById('kind');

let verbs = document.getElementById('verbs');
let nouns = document.getElementById('nouns');
let adjectives = document.getElementById('adjectives');
let adverbs = document.getElementById('adverbs');

let arr = [verbs, nouns, adjectives, adverbs];
let len = 0;

function my_sentence(sentence, count) {

    let area1 = sentence.children[0];
    let sel   = sentence.children[1].children[0].children[0];
    let play  = sentence.children[1].children[1].children[0];
    let area2 = sentence.children[2];

    sel.innerHTML = '';
    for (let i=0; i<say[len][count].length; i++) {
        const option = document.createElement('option');
        option.textContent = say[len][count][i];
        sel.appendChild(option);
    }

    let s = sel.length ? false : true;

    area1.value    = '';
    area1.disabled = s
    sel.disabled   = s;
    play.disabled  = s;
    area2.value    = '';
    area2.disabled = s;
}
my_sentence(verbs, 0);
my_sentence(nouns, 1);
my_sentence(adjectives, 2);
my_sentence(adverbs, 3);

function my_play(count) {

    let sentence = arr[count];

    let area1 = sentence.children[0];
    let sel   = sentence.children[1].children[0].children[0];
    let area2 = sentence.children[2];

    let words = '';
    if (area1.value !== '' && area2.value !== '') {
        words = `${area1.value} ${sel.value} ${area2.value}.`;
    }
    words === '' ? my_speak(sel.value) : my_speak(words);
}

function my_previous() {
    if (len <= 0) { len = say.length; }
    len--;
    my_sentence(verbs, 0);
    my_sentence(nouns, 1);
    my_sentence(adjectives, 2);
    my_sentence(adverbs, 3);
}

function my_next() {
    if (len >= say.length - 1) { len = -1; }
    len++;
    my_sentence(verbs, 0);
    my_sentence(nouns, 1);
    my_sentence(adjectives, 2);
    my_sentence(adverbs, 3);
}
