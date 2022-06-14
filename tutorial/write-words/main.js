//jQuery(function($) {
//  'use strict';

  function words_push(words) {

    let items = [];
    for (const i of words) {
      for (const j of i) {
        items.push(j);
      }
    }
    return items;
  };

  let a = words_push(words);

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
  };

  let b = shuffle(a);

  let i = 0;
  let j = '-----';
  const inputTxt = document.querySelector(".txt");
  const one = document.querySelector("#one");
  inputTxt.value = j;

  function previous() {
    if (i <= 0) i = b.length;
    i--;
    return setText();
  }

  function next() {
    if (i >= b.length - 1) i = -1;
    i++;
    return setText();
  }

  function setText() {
    one.value = "";
    return inputTxt.value = j;
  }

  function show() {
    inputTxt.value = b[i].word;
  }

  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector("select");
  const pitch = document.querySelector("#pitch");
  const rate = document.querySelector("#rate");

  let voices = [];

  // "Microsoft Zira - English (United States)"
  // "Samantha (en-US)"
  let microsoftFemaleVoices = 0; //3;

  function populateVoiceList() {

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

    const selectedIndex =
      voiceSelect.selectedIndex < 0
        ? microsoftFemaleVoices
        : voiceSelect.selectedIndex;
    
    voiceSelect.innerHTML = "";
    for (let i = 0; i < voices.length; i++) {
      //if (voices[i].lang === "en-US") {
      //if (voices[i].name === "Microsoft Zira - English (United States)" || voices[i].name === "Samantha (en-US)") {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
      //}
    }
    voiceSelect.selectedIndex = selectedIndex;
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function speak() {

    if (synth.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (inputTxt.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(b[i].word);

      //utterThis.onend = function (event) {
      //  console.log("SpeechSynthesisUtterance.onend");
      //};

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

  function play() {

    speak();
    inputTxt.blur();
  }

//});
