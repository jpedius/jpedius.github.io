'use strict';

const synth = window.speechSynthesis;
let voices = [];
let she_voice = null;

let my_text = document.getElementById('my_text');
let my_plot = document.getElementById('my_plot');

let src = {

    plot: (my_plot.dataset.files
        + my_plot.value
        + my_plot.dataset.txt),

    array: [],
    length: 0,
};

my_plots_change();

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

    if (talk.trim() !== '') {

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

function my_plots_change() {

    src.plot = (my_plot.dataset.files
        + my_plot.value
        + my_plot.dataset.txt);

    fetch(new Request(src.plot))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {

            src.array = [];
            src.length = 0;

            let arr = data.replaceAll('\n', ' ').split(' ').filter((t) => t !== '');
            let txt = '';
            for (let i=0; i<arr.length; i++) {
                txt += arr[i];
                if (arr[i].match(/^([^\.!\?]+)$/g) || arr[i].match(/^([A-Z\.!,'\?]+)$/g)) {
                    txt += ' ';
                }
                else {
                    src.array.push(txt);
                    txt = '';
                }
            }
            if (txt !== '') { src.array.push(txt) }

            my_text.value = src.array[src.length];
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });
}

function my_previous_button() {
    if (src.length <= 0) { src.length = src.array.length; }
    src.length--;
    my_text.value = src.array[src.length];
}

function my_play_button() {

    let start = my_text.selectionStart;
    let finish = my_text.selectionEnd;
    let sel = my_text.value.substring(start, finish);
    if (sel !== 0) {
        my_speak(sel);
    }
}

function my_play_all_button() {
    my_speak(src.array[src.length]);
}

function my_next_button() {
    if (src.length >= src.array.length - 1) { src.length = -1; }
    src.length++;
    my_text.value = src.array[src.length];
}
