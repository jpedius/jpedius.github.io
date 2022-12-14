'use strict';

(function($) {

    let special = [
        'zeroth', 'first', 'second', 'third', 'fourth', 'fifth',
        'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh',
        'twelfth', 'thirteenth', 'fourteenth', 'fifteenth',
        'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'
    ];
    let deca = [
        'twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent',
        'eight', 'ninet'
    ];

    function stringifyNumber(n) {
        if (n < 20) return special[n];
        if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
        return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
    }

    let title = 'Words';
    document.title = title;

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
    
    let multiple = document.createElement('select');
    multiple.innerHTML = '';
    multiple.multiple = 'multiple';
    multiple.hasAttribute('multiple');
    for (let i = 0; i < words.length; i++) {
        //for (let j=0; j<99; j++) {
        console.log(words[i][0].length);
        const option = document.createElement('option');
        option.textContent = `${i} word (${words[i].length})`;
        option.defaultValue = `${i}-${words[i].length}`;
        option.value = option.defaultValue;
        multiple.appendChild(option);
    }
    multiple.addEventListener('change', function() {

    }, false); 
    multiple.classList.add('q02');
    console.log('multiple', multiple);


// TEST LOOP SHOWING RESULTS
for (var i=0; i<100; i++) console.log(stringifyNumber(i));
    
    let previousOrNext = 0;
    let howMany = [];
    //console.log(words); 
    for (let i=0; i<words.length; i++) {
        howMany = howMany.concat(words[i]);
    }
    //console.log(howMany);
    howMany = shuffle(howMany);
    console.log('howMany', howMany);
    setText();

    function setText() {
        let b = howMany[previousOrNext];
        let a = '';
        for (let i=0; i<b.length; i++) {
            a += b[i] + ' ';
        }
        console.log('b', b, b.length);
        readonly.value = b; //a.trim();
        text.value = '';
    }

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
            speak(readonly.value);
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

    let root = document.querySelector('#root');
    root.classList.add('q11');

    let h1Title = document.createElement('h1');
    h1Title.innerHTML = title;
    h1Title.classList.add('q12');
    root.appendChild(h1Title);

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
    
    let divMultiple = document.createElement('div');
    divMultiple.classList.add('q18');
    divMultiple.appendChild(multiple);
    root.appendChild(divMultiple); 

})(jQuery);

