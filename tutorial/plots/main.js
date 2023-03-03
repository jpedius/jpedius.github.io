'use strict';

let sentences = document.getElementById('sentences');
sentences.addEventListener('change', setText, false);

let text = document.getElementById('text');
text.addEventListener('change', setText, false);

let words = document.getElementById('words');
words.addEventListener('change', setText, false);

let previous = document.getElementById('previous');
previous.addEventListener('click', setPrevious, false);

let play = document.getElementById('play');
play.addEventListener('click', setPlay, false);

let next = document.getElementById('next');
next.addEventListener('click', setNext, false);

let src = {

    sentences: (sentences.dataset.files
        + sentences.value
        + sentences.dataset.txt),
        
    text:'',
    words: words.value,
};

let howMany = [];
let previousOrNext = 0;

function setText() {

    src.sentences = (sentences.dataset.files
        + sentences.value
        + sentences.dataset.txt);

    fetch(new Request(src.sentences))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {

            let reWhole = /[^\.!\?]+[\.!\?]+/g;
            let reComma = /[^\.!\?,]+[\.!\?,]+/g;

            src.text = data.trim().match(reWhole).map(function (x) {
                return x.trim().match(reComma).map(function (y) {
                    return y.trim().split(' ');
                });
            });
            
            src.words = words.value;
            if ('whole' === words.value) {
                howMany = src.text.map(function (x) {
                    return x.map(function (y) {
                        return y.join(' ');
                    }).join(' ');
                });
            }
            else if ('comma' === words.value) {
                howMany = src.text.flat(1).map(function (x) {
                    return x.join(' ');
                });
            }
            else if ('words' === words.value) {
                howMany = src.text.flat(2);
            }
            previousOrNext = 0;
            
            text.value = howMany[previousOrNext];
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}
setText();

function setPrevious() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    text.value = howMany[previousOrNext];
}

function setPlay() {
    if (text.value !== '') {
        speak(howMany[previousOrNext]);
        text.blur();
    }
}

function setNext() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    text.value = howMany[previousOrNext];
}
