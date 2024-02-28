'use strict';

let copy = document.getElementById('copy');
let paste = document.getElementById('paste');

function my_clip() {

    let text = (copy.value).trim();
    copy.value = '';
    let batch = [];

    let arr = text.split(' ').filter((w) => w !== '');
    let re1 = /^([^\.!\?]+)$/g;
    let re2 = /^([A-Z\.!,'\?]+)$/g;
    let txt = '';

    for (let i=0; i<arr.length; i++) {
        txt += arr[i];
        if (arr[i].match(re1) || arr[i].match(re2)) {
            txt += ' ';
        }
        else {
            batch.push(txt);
            txt = '';
        }
    }
    if (txt !== '') { batch.push(txt); }

    paste.replaceChildren();

    batch.forEach((event) => {

        let item = event.toString().trim();

        let div = document.createElement('div');
        div.classList.add('myDisplay');

        let word = document.createElement('span');
        word.classList.add('mySpan');
        word.innerHTML = item;

        let play = document.createElement('button');
        play.classList.add('myButton');
        play.innerHTML = 'Play';
        play.addEventListener('click', () => {
            my_speak(item);
        });

        div.appendChild(play);
        div.appendChild(word);
        paste.appendChild(div);
    });
}

function my_wipe() {
    copy.value = '';
    paste.replaceChildren();
}
