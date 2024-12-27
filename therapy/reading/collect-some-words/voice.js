'use strict';

const synth = window.speechSynthesis;
let voices = [];
let she_voice = null;

function populateVoiceList() {

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

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function fn_speak(talk) {

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
