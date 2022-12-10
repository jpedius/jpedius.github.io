'use strict';

//import { voice } from "/tutorial/whole-sentences-two/speech.js";

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let sentences = [{
        name: "Sentence One",
        key: [
            ["I", "feel", "great"],
            ["she", "was", "late"],
            ["is", "dinner", "ready"],
            ["he", "will", "call"],
            ["light", "the", "fire"],
            ["eat", "your", "lunch"],
            ["it", "is", "late"],
            ["drink", "your", "milk"],
            ["how", "are", "you"],
            ["wash", "your", "hair"],
            ["that's", "very", "nice"],
            ["I", "am", "hungry"],
            ["who", "are", "you"],
            ["sit", "over", "there"],
            ["the", "dog", "ran"],
            ["we", "ate", "lunch"],
            ["tie", "your", "shoe"],
            ["we", "went", "downtown"],
            ["open", "the", "door"],
            ["ride", "the", "bike"],
            ["do", "not", "hurry"],
            ["pass", "the", "salt"],
            ["we", "left", "early"],
            ["open", "the", "window"],
            ["pitch", "the", "tent"],  
        ],
    }, { 
        name: "Sentence Two",
        key: [
            ["the", "lion", "roared"],
            ["brush", "your", "hair"],
            ["it's", "snowing", "outside"],
            ["don't", "look", "back"],
            ["he", "played", "baseball"],
            ["rang", "the", "alarm"],
            ["what", "is", "dripping"],
            ["he", "delivers", "mail"],
            ["wear", "your", "coat"],
            ["have", "times", "changed"],
            ["time", "for", "lunch"],
            ["where", "were", "you"],
            ["thanks", "for", "coming"],
            ["cross", "the", "bridge"],
            ["turn", "it", "down"],
            ["John", "left", "town"],
            ["rang", "the", "phone"],
            ["close", "the", "gate"],
            ["watch", "the", "movie"],
            ["please", "wait", "outside"],
            ["water", "the", "plant"],
            ["butter", "the", "toast"],
            ["drive", "the", "car"],
            ["the", "woman", "tripped"],
            ["climb", "the", "tree"],   
        ],
    }];
    
    let previousOrNext = 0;
    let howMany = sentences[0].key;
    // ["Hello", "World"];
    howMany = shuffle(howMany);

    let words = document.createElement('select');
    words.innerHTML = '';
    for (let i = 0; i < sentences.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${sentences[i].name}`;
        words.appendChild(option);
    }
    words.classList.add('q01');

    let text = document.createElement('input');
    text.classList.add('q02');
    text.type = 'text';
    text.value = howMany[previousOrNext];
      
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    previous.classList.add('q03');
    previous.addEventListener('click', function() {
        if (previousOrNext <= 0) {
            previousOrNext = howMany.length;
        }
        previousOrNext--;
        return text.value = howMany[previousOrNext]; 
    }, false);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    play.classList.add('q04');
    play.addEventListener('click', function() {
        speak(howMany[previousOrNext]);
        text.blur();
    }, false);

    let next = document.createElement('button');
    next.innerHTML = 'Next';
    next.classList.add('q05');
    next.addEventListener('click', function() {
        if (previousOrNext >= howMany.length - 1) {
            previousOrNext = -1;
        }
        previousOrNext++;
        return text.value = howMany[previousOrNext];
    }, false);

    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
    forRate.innerHTML = 'Rate';
    forRate.classList.add('q06');

    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.defaultValue = '1';
    rate.step = 0.1;
    rate.classList.add('q07');

    let forPitch = document.createElement('label');
    forPitch.htmlFor = 'pitch';
    forPitch.innerHTML = 'Pitch';
    forPitch.classList.add('q08');

    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.defaultValue = '1';
    pitch.step = 0.1;
    pitch.classList.add('q09');

    // "Microsoft Zira - English (United States)"
    // "Samantha"
    // "Daniel"
    // "Tessa"

    let voice = document.createElement('select');
    voice.classList.add('q10');

    const synth = window.speechSynthesis;
    let voices = [];

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

        voice.innerHTML = "";

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
                else if (voices[i].name === "Tessa") {
                    option.defaultSelected = true;
                }

                voice.appendChild(option);
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

        if (voice !== '') {

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

    let root = document.querySelector('#root');
    root.classList.add('q11');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    h1.classList.add('q12');
    root.appendChild(h1);

    let divWords = document.createElement('div');
    divWords.classList.add('q19');
    divWords.appendChild(words);
    root.appendChild(divWords);

    let divText = document.createElement('div');
    divText.classList.add('q13');
    divText.appendChild(text);
    root.appendChild(divText);

    let divButton = document.createElement('div');    
    divButton.classList.add('q14');
    divButton.appendChild(previous);
    divButton.appendChild(play);
    divButton.appendChild(next);
    root.appendChild(divButton);

    let divRatePitch = document.createElement('div');
    divRatePitch.classList.add('q15');

    let spanRate = document.createElement('span');
    spanRate.classList.add('q16');
    spanRate.appendChild(forRate);
    spanRate.appendChild(rate);
    divRatePitch.appendChild(spanRate);

    let spanPitch = document.createElement('span');
    spanPitch.classList.add('q17');
    spanPitch.appendChild(forPitch);
    spanPitch.appendChild(pitch);
    divRatePitch.appendChild(spanPitch); 

    root.appendChild(divRatePitch);

    let divVoice = document.createElement('div');
    divVoice.classList.add('q18');
    divVoice.appendChild(voice);
    root.appendChild(divVoice);

    console.log(sentences);
    console.log(words, words.className, words.classList);   
    console.log(title, root, h1, previous, next, play);
    console.log(forRate, rate, forPitch, pitch, voice);
    
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

})(jQuery);
