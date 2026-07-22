"use strict";

const synth = window.speechSynthesis;
let voice = null;

function populateVoiceList() {

  let voices = synth.getVoices().sort(function (a, b) {
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

  for (let i=0; i<voices.length; i++) {
    if (voices[i].name === "Samantha") {
      voice = voices[i];
      break;
    }
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

export class MySpeak {

  talk(text, rate=0.7, pitch=1) {

    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (text.trim() !== "") {

      const utterThis = new SpeechSynthesisUtterance(text);

      utterThis.onend = function (event) {
        console.log("SpeechSynthesisUtterance.onend");
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
      };

      utterThis.voice = voice;
      utterThis.pitch = pitch;
      utterThis.rate = rate;
      synth.speak(utterThis);
    }
  }
}
