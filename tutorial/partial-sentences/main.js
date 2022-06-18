'use strict';

let previousOrNext = 0;
let howMany = read_sentences(partial_sentences);
howMany = shuffle(howMany);

const inputTxt = document.querySelector(".txt");
inputTxt.value = (howMany.length === 0) ? "" : howMany[previousOrNext];

const one = document.querySelector("#one");

function setText() {
  one.value = "";
  return inputTxt.value = howMany[previousOrNext];
}

function play() {

  let a = "";
  a = howMany[previousOrNext];
  a = a + " ";
  a = a + one.value;

  speak(a);
  inputTxt.blur();
}

function read_sentences(rs) {

  let url = new URL(document.location);
  let items = [];

  const paramsString = url.search;
  const searchParams = new URLSearchParams(paramsString);

  if (searchParams.get("id")) {

    let searchId = searchParams.get("id");

    for (let i=0; i<rs.length; i++) {
      if (searchId === i.toString()) {
        items = rs[i];
      }
    }
  }

  return items;
}

// This is all the same down here

function previous() {
  if (previousOrNext <= 0) {
    previousOrNext = howMany.length;
  }
  previousOrNext--;
  return setText();
}

function next() {
  if (previousOrNext >= howMany.length - 1) {
    previousOrNext = -1;
  }
  previousOrNext++;
  return setText();
}

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

const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
let voices = [];

const pitch = document.querySelector("#pitch");
const rate = document.querySelector("#rate");

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
    if (voices[i].lang === "en-US") {
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
