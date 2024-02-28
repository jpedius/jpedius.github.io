'use strict';

let kind = document.getElementById('kind');
let read = document.getElementById('read');

let play = 0;
let howMany = exercises[play].exercise;

function my_options() {
    kind.innerHTML = '';
    for (let i = 0; i < exercises.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${exercises[i].name}`;
        kind.appendChild(option);
    }
}
my_options();

function my_kind() {
    play = kind.options.selectedIndex;
    howMany = exercises[play].exercise;
    read.value = howMany;
}
my_kind();

function my_play() {
    my_speak(exercises[play].exercise);
}
