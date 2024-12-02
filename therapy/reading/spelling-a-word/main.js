'use strict';

let idMain  = document.getElementById("idMain");
let idRead  = document.getElementById("idRead");
let idWrite = document.getElementById("idWrite");

let howMany = null;
let previousOrNext = 0;
let showHide = true;
let numberOfWords = 50;
let numberOfLetters = 3;

let arrayOfWords = [];

function fn_words() {

    let w = [];
    words.forEach((event) => {
        event.forEach((item) => {

            let hide = item;

            let rand = [];
            for (let i=0; i<hide.length; i++) {
                rand.push(i);
            }
            rand = my_shuffle(rand);

            if (item.length <= numberOfLetters) {
                hide = '-'.repeat(item.length);
            }
            else {
                for (let i=0; i<numberOfLetters; i++) {
                    hide = hide.slice(0, rand[i]) + '-' + hide.slice(rand[i]+1);
                }
            }

            w.push({ show: item, hide: hide, random: rand });
        });
    });
    w = my_shuffle(w);
    w = w.slice(0, numberOfWords);

    for (let i=0; i<w.length; i++) {
    	arrayOfWords.push(w[i].show);
    }

    return w;
}
howMany = fn_words();

function fn_read_and_write(tf) {
    idRead.value = showHide
        ? howMany[previousOrNext].hide
        : howMany[previousOrNext].show;
    if (tf) { idWrite.value = ''; }
}
fn_read_and_write(true);

function fn_previous() {
    if (previousOrNext <= 0) {
        previousOrNext = howMany.length;
    }
    previousOrNext--;
    return fn_read_and_write(true);
}

function fn_play() {
    my_speak(howMany[previousOrNext].show);
}

function fn_show_hide() {
    idShowHide.innerHTML = showHide ? 'Hide' : 'Show';
    showHide = !showHide;
    fn_read_and_write(false);
}

function fn_next() {
    if (previousOrNext >= howMany.length - 1) {
        previousOrNext = -1;
    }
    previousOrNext++;
    return fn_read_and_write(true);
}

function fn_clipboard() {
	let text = "";
    for (let i=0; i<arrayOfWords.length; i++) {
    	text += arrayOfWords[i] + "\n";
    }
	writeClipboardText(text);
}

async function writeClipboardText(text) {
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error.message);
	}
}
