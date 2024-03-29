'use strict';

let read = document.getElementById('read');
let number = document.getElementById('number');

let howMany = null;
let previousOrNext = 0;

function my_words() {
    let w = [];
    words.forEach((event) => {
        event.forEach((item) => {
            w.push(item);
        });
    });
    w = my_shuffle(w);
    return w;
}
howMany = my_words();
read.value = howMany[previousOrNext];

function my_play() {
    my_speak(howMany[previousOrNext]);
}

function my_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    read.value = howMany[previousOrNext];
    number.innerHTML = previousOrNext + 1;
}

function my_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    read.value = howMany[previousOrNext];
    number.innerHTML = previousOrNext + 1;
}
