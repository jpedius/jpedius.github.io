'use strict';

document.title = 'Talk';

let root = document.getElementById('root');
let main = document.getElementById('main');

function my_copy() {

    let div = document.createElement('div');
    div.classList.add('myCopy');

    let txt = document.createElement('input');
    txt.type = 'text';
    txt.size = 30;
    txt.classList.add('myTxt');

    let btn = document.createElement('button');
    btn.classList.add('myBtn');
    btn.innerHTML = 'Clipboard';
    btn.addEventListener('click', (event) => {
        myText = txt.value;
        my_text(main, myText);
        txt.value = '';
    });

    div.appendChild(btn);
    div.appendChild(txt);
    main.appendChild(div);

    return div
}

function my_text(main, words) {

    if (main.firstChild !== main.lastChild) {
        main.removeChild(main.lastChild);
    }

    let reWhole = /[^\.!\?]+[\.!\?]+/g;
    let a = words.trim().match(reWhole) || [];
    let b = [];
    a.forEach((element, index) => {
        b.push(element.trim())
    });

    let div = document.createElement('div');
    div.classList.add('myText');

    b.forEach((element, index) => {

        let c = document.createElement('div');
        c.classList.add('myWord');

        let word = document.createElement('span');
        word.classList.add('myWord');
        word.innerHTML = element;

        let play = document.createElement('button');
        play.classList.add('myPlay');
        play.innerHTML = 'Play';
        play.addEventListener('click', () => {
            speak(element);
        });

        c.appendChild(play);
        c.appendChild(word);
        div.appendChild(c);
    });

    main.appendChild(div);

    return div
}

let myText = '';
let myCopy = my_copy()
