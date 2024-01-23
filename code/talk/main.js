'use strict';

const synth = window.speechSynthesis;
let voices = [];
let she_voice = null;

let my_copy = document.getElementById('my_copy');
let my_paste = document.getElementById('my_paste');

let my_text = '';
let my_array = [];

function my_populateVoiceList() {

    // Sorted by
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();
        if (aname < bname) {
            return -1;
        } else if (aname == bname) {
            return 0;
        } else {
            return +1;
        }
    });

    let voice = null;
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === 'Samantha') {
            voice = voices[i];
            break;
        }
    }

    she_voice = voice
}

my_populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = my_populateVoiceList;
}

function my_speak(talk) {

    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        return;
    }

    if (talk !== '') {

        const utterThis = new SpeechSynthesisUtterance(talk);

        utterThis.onend = function (event) {
            console.log("SpeechSynthesisUtterance.onend");
        };

        utterThis.onerror = function (event) {
            console.error("SpeechSynthesisUtterance.onerror");
        };

        utterThis.voice = she_voice;
        utterThis.pitch = 1;
        utterThis.rate = 0.7;
        synth.speak(utterThis);
    }
}

function my_clipboard_button() {

    my_text = (my_copy.value).trim();
    my_copy.value = '';
    my_array = [];

    let arr = my_text.split(' ').filter((w) => w !== '');
    let re1 = /^([^\.!\?]+)$/g;
    let re2 = /^([A-Z\.!,'\?]+)$/g;
    let txt = '';

    for (let i=0; i<arr.length; i++) {
        txt += arr[i];
        if (arr[i].match(re1) || arr[i].match(re2)) {
            txt += ' ';
        }
        else {
            my_array.push(txt);
            txt = '';
        }
    }
    if (txt !== '') {
        my_array.push(txt);
    }

    my_paste.replaceChildren();

    my_array.forEach((event) => {

        let item = event.toString().trim();

        let div = document.createElement('div');
        div.classList.add('modeDiv');

        let word = document.createElement('span');
        word.classList.add('modeDiv');
        word.innerHTML = item;

        let play = document.createElement('button');
        play.classList.add('modeButton');
        play.innerHTML = 'Play';
        play.addEventListener('click', () => {
            my_speak(item);
        });

        div.appendChild(play);
        div.appendChild(word);
        my_paste.appendChild(div);
    });
}

function my_wipe_button() {
    my_copy.value = '';
}
