'use strict';

//import { voice } from "/tutorial/whole-sentences-two/speech.js";

(function($) {

    let title = 'Partial Sentences';
    document.title = title;

    let sentences = [{
        name: "Sentence One",
        key: [
            ["I wish I was"],
            ["I ate everything on my"],
            ["I'm in no particular"],
            ["Must you go"],
            ["At 5:30 we eat"],
            ["His goal in life was to write a"],
            ["On Saturday he bought a new"],
            ["The movie started at"],
            ["They took a walk around the"],
            ["She wore the ring on her"],
            ["He took a picture with his"],
            ["He lit the fire with a"],
            ["The car was out of"],
            ["It is illegal to"],
            ["For her birthday, he bought a"],
            ["They were followed by two"],
            ["Tyler and Joe went swimming at the"],
            ["Please turn on the"],
            ["Maria went running every"],
            ["He mows the lawn on"],
            ["It has been snowing for three"],
            ["He put salt and pepper on his"],
            ["The boy took his dog for a"],
            ["They went to London for their"],
            ["I like butter on my"],
        ],
    }, { 
        name: "Sentence Two",
        key: [ 
            ["She went"],
            ["They bought a"],
            ["I ate"],
            ["For three years, I have been"],
            ["The boat sailed"],
            ["He sang"],
            ["Yesterday I saw"],
            ["We barbecued"],
            ["Golfing is"],
            ["The children were"],
            ["In the summer, they go"],
            ["Tom and Jessica were"],
            ["The old man and his wife"],
            ["They found"],
            ["He watched"],
            ["Sometimes I like"],
            ["It was"],
            ["We've been"],
            ["The dog ran"],
            ["What are"],
            ["Fourteen geese were"],
            ["The music was"],
            ["It took"],
            ["Hunting is"],
            ["Maybe we should"],
        ],
    }];

    let readonly = document.createElement('input');
    readonly.classList.add('q02a');
    readonly.type = 'text';
    readonly.readonly = 'readonly';
    readonly.autocomplete = 'off';
    readonly.autocorrect = 'off';
    readonly.autocapitalize = 'off';

    let text = document.createElement('input');
    text.classList.add('q02');
    text.type = 'text';
    text.autocomplete = 'off';
    text.autocorrect = 'off';
    text.autocapitalize = 'off';
    
    let previousOrNext = 0;
    let howMany = sentences[0].key;
    howMany = shuffle(howMany);
    setText();

    let words = document.createElement('select');
    words.innerHTML = '';
    for (let i = 0; i < sentences.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${sentences[i].name}`;
        words.appendChild(option);
    }
    words.addEventListener('change', function() {
        previousOrNext = 0;
        howMany = sentences[words.options.selectedIndex].key;
        howMany = shuffle(howMany);
        setText();
    }, false); 
    words.classList.add('q01');

    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    previous.classList.add('q03');
    previous.addEventListener('click', function() {
        if (previousOrNext <= 0) {
            previousOrNext = howMany.length;
        }
        previousOrNext--;
        setText();
    }, false);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    play.classList.add('q04');
    play.addEventListener('click', function() {
        if (text.value !== '') {
            speak(readonly.value + ' ' + text.value);
            text.blur();
        }
    }, false);

    let next = document.createElement('button');
    next.innerHTML = 'Next';
    next.classList.add('q05');
    next.addEventListener('click', function() {
        if (previousOrNext >= howMany.length - 1) {
            previousOrNext = -1;
        }
        previousOrNext++;
        setText();
    }, false);

    function setText() {
        readonly.value = howMany[previousOrNext];
        text.value = '';
    }

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
                voice.selectedOptions[0].getAttribute("data-name");

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

    let divReadonly = document.createElement('div');
    divReadonly.classList.add('q13a');
    divReadonly.appendChild(readonly);
    root.appendChild(divReadonly);
    
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

    //console.log(sentences);
    //console.log(words, words.className, words.classList);   
    //console.log(title, root, h1, previous, next, play);
    //console.log(forRate, rate, forPitch, pitch, voice);
    
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