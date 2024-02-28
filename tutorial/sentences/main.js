'use strict';

let kind = document.getElementById('kind');
let read = document.getElementById('read');
let write = document.getElementById('write');

let previousOrNext = 0;
let howMany = sentences[previousOrNext].key;
howMany = my_shuffle(howMany);
for (let i=0; i<howMany.length; i++) {
    howMany[i] = my_shuffle(howMany[i]);
}

function my_kind() {
    previousOrNext = 0;
    howMany = sentences[kind.options.selectedIndex].key;
    howMany = my_shuffle(howMany);
    for (let i=0; i<howMany.length; i++) {
        howMany[i] = my_shuffle(howMany[i]);
    }
    return my_values();
}

function my_options() {
    kind.innerHTML = '';
    for (let i=0; i<sentences.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${sentences[i].name}`;
        kind.appendChild(option);
    }
}
my_options();

function my_values() {
    let value = '';
    for (let i=0; i<howMany[previousOrNext].length; i++) {
        value += howMany[previousOrNext][i] + ' ';
    }
    read.value = value.trim();
    write.value = '';
}
my_values();

function my_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    my_values();
}

function my_play() {
    if (howMany[previousOrNext].length === 1) {
        my_speak(read.value + ' ' + write.value);
    } else if (write.value !== '') {
        my_speak(write.value);
    }
}

function my_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    my_values();
}
