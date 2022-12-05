'use strict';

(function($) {

  function plot() {
    let src = "/tutorial/storage/plot/" + letSelectPlot.value + ".txt";
    $.get(src, function(data) {

      if (word.checked) {
        howMany = data.split(' ').map(x => x.trim());
      }
      else {
        let p = period.checked ? '\\.' : '';
        let e = explanation.checked ? '!' : '';;
        let q = question.checked ? '\\?' : '';;
        let c = comma.checked ? ',' : '';;
        let all = p + e + q + c;
        let re = new RegExp("[^" + all + "]+[" + all + "]+", 'g')
        //howMany = data.match( /[^\.!\?,]+[\.!\?,]+/g ).map(x => x.trim());
        howMany = data.match( re ).map(x => x.trim());
      }

      if (random.checked) {
        howMany = shuffle(howMany);
      }

      previousOrNext = 0;        
      letSelectText.value = howMany[previousOrNext];
    }, "text");
  };

  function setText() {
    return letSelectText.value = howMany[previousOrNext];
  }

  function play() {
    speak(howMany[previousOrNext]);
    letSelectText.blur();
  }

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

  let letSelectText = document.querySelector("#selectText");
  let previousOrNext = 0;
  let howMany = ["Hello", "World"];
  letSelectText.value = howMany[previousOrNext];
  
  let letButtonPrev = document.querySelector("#buttonPrev");
  letButtonPrev.addEventListener("click", function() { previous() }, false);

  let letButtonPlay = document.querySelector("#buttonPlay");
  letButtonPlay.addEventListener("click", function() { play() }, false);

  let letButtonNext = document.querySelector("#buttonNext");
  letButtonNext.addEventListener("click", function() { next() }, false);

  let period = document.querySelector("#period");
  period.disable = true;
  period.addEventListener("change", function() { plot() }, false);
  
  console.log(period, period.disable);  
  
  let explanation = document.querySelector("#explanation");
  explanation.addEventListener("change", function() { plot() }, false);
  
  let question = document.querySelector("#question");
  question.addEventListener("change", function() { plot() }, false);
  
  let comma = document.querySelector("#comma");
  comma.addEventListener("change", function() { plot() }, false);
  
  let word = document.querySelector("#word");
  word.addEventListener("change", function() { plot() }, false);
  
  let random = document.querySelector("#random");
  random.addEventListener("change", function() { plot() }, false);
  
        let p1 = period.checked ? '\\.' : '';
        let e1 = explanation.checked ? '!' : '';;
        let q1 = question.checked ? '\\?' : '';;
        let c1 = comma.checked ? ',' : '';;
        let all1 = p1 + e1 + q1 + c1;
        let all2 = "[^" + all1 + "]+[" + all1 + "]+";
        let re1 = new RegExp(all2, 'g');
        console.log(p1, e1, q1, c1, all1, all2, re1);
        //let re = new RegExp(, 'g')
        //howMany = data.match( /[^\.!\?,]+[\.!\?,]+/g ).map(x =>

  console.log(period, explanation, question, comma, word, random);

  let letSelectPlot = document.querySelector("#selectPlot");
  letSelectPlot.addEventListener("change", function() { plot() }, false);
  plot();

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
      if (voices[i].lang.slice(0, 3) === "en-") {
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
        else if (voices[i].name === "Tessa") { //Daniel") {
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

    if (letSelectText.value !== "") {
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
 
})(jQuery);
