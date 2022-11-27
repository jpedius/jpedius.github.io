'use strict';

function shuffle(array) {

  let items = JSON.parse(JSON.stringify(array));
  let currentIndex = items.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [items[currentIndex], items[randomIndex]] = [
      items[randomIndex], items[currentIndex]];
  }

  return items;
}

// "Microsoft Zira - English (United States)"
// "Samantha"
// "Daniel"

const synth = window.speechSynthesis;
let voices = [];

const pitch = document.querySelector("#pitch");
const rate = document.querySelector("#rate");
const voiceSelect = document.querySelector("#voice");

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

  voiceSelect.innerHTML = "";
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].lang === "en-US" || voices[i].lang === "en-GB") {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      if (voices[i].name === "Microsoft Zira - English (United States)") {
        option.defaultSelected = true;
      }
      else if (voices[i].name === "Samantha") {
        option.defaultSelected = true;
      }
      else if (voices[i].name === "Daniel") {
        option.defaultSelected = true;
      }
      voiceSelect.appendChild(option);
    }
  }
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(talk) {

  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  if (inputTxt.value !== "") {
    const utterThis = new SpeechSynthesisUtterance(talk);

    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }

    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);
  }
}
