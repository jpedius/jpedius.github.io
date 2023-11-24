'use strict';

let my_root = document.getElementById('my_root');

let my_clipboard = document.getElementById('my_clipboard');
let my_copy = document.getElementById('my_copy');
let my_paste = document.getElementById('my_paste');

function my_clipboard_button() {

    my_text = (my_copy.value).trim();
    my_copy.value = '';

    //console.log(my_text);

    let line = /[^\.!\?]+[\.!\?]/g;
    my_array = [...my_text.matchAll(line)];

    my_paste.replaceChildren();

    my_array.forEach((event) => {

        let div = document.createElement('div');
        div.classList.add('modeDiv');

        let word = document.createElement('span');
        word.classList.add('wordSpan');
        word.innerHTML = event;

        let play = document.createElement('button');
        play.classList.add('modeButton');
        play.innerHTML = 'Play';
        play.addEventListener('click', () => {
            speak(event);
        });

        div.appendChild(play);
        div.appendChild(word);
        my_paste.appendChild(div);
    });
}

function my_mode_button() {
    let element = document.body;
    element.classList.toggle('darkModeButton');
    element.classList.toggle('lightModeButton');
    my_copy.classList.toggle('darkModeButton');
}

let my_text = '';
let my_array = [];
