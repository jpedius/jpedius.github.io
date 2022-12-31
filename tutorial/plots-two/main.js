'use strict';

(function($) {

    let sentences = document.getElementById('sentences');
    sentences.addEventListener('change', setSentences, false);
    
    let text = document.getElementById('text');
    text.addEventListener('change', setText, false);
    
    let previous = document.getElementById('previous');
    previous.addEventListener('click', setPrevious, false);
    
    let play = document.getElementById('play');
    play.addEventListener('click', setPlay, false);
    
    let next = document.getElementById('next');
    next.addEventListener('click', setNext, false);
    
    let words = document.getElementById('words');
    words.addEventListener('change', setWords, false);
    
    let src = {

        sentences: (sentences.dataset.tutorial
            + sentences.value
            + sentences.dataset.txt),
            
        text:'',
        
        words: words.value,
    };
    
    console.log('src', src);
    
    let howMany = [];
    let previousOrNext = 0;
        
    function setSentences() {
        src.sentences = (sentences.dataset.tutorial
            + sentences.value
            + sentences.dataset.txt);
        text.value = howMany[previousOrNext];
    }

    function setText() {
        $.get(src.sentences, function(data) {
            
            src.text = data.match( /[^\.!\?]+[\.!\?]+/g ).map((x) => (
                x.trim().match( /[^\.!\?,]+[\.!\?,]+/g ).map((y) => (
                    y.trim().split(' ')
                ))
            ));
            
            if ('whole' === words.value) {
                console.log('whole', words.value);
                console.log('src.text.join', src.text.map((x) => {
                    x.map((y) => {
                        console.log('as', y.join(' '))
                    })
                }));
                //howMany = '';
                //for (let i=0; i<src.text; i++) {
                    //console.log('[i]', src.text[i]);
                    //for (let j=0; j<i.length; j++) {
                    //    console.log('[i][j]', src.text[i][j]);
                    //    howMany += src.text[i][j] + ' ';
                    //} 
                //}
                //console.log('howMany', howMany);
            }
            else if ('comma' === words.value) {
                console.log('comma', words.value);
                howMany = src.text.map((x) => {
                    x.map((y) => { y.join(' ') })
                })
            }
            else if ('words' === words.value) {
                console.log('words', words.value);
                howMany = src.text.flat(2);
            }
            previousOrNext = 0;
            
            console.log('src text', src, howMany);
        }, 'text');
        
        //text.value = howMany[previousOrNext];
    }
    setText();

    function setPrevious() {
        if (previousOrNext <= 0) {
            previousOrNext = howMany.length;
        }
        previousOrNext--;
        text.value = howMany[previousOrNext];
    }
    
    function setPlay() {
        if (text.value !== '') {
            speak(howMany[previousOrNext]);
            text.blur();
        }
    }
    
    function setNext() {
        if (previousOrNext >= howMany.length - 1) {
            previousOrNext = -1;
        }
        previousOrNext++;
        text.value = howMany[previousOrNext];
    }
    
    function setWords() {
        src.words = words.value;
        text.value = howMany[previousOrNext];
    } 
 
    // "Microsoft Zira - English (United States)"
    // "Samantha"
    // "Daniel"
    // "Tessa"

    let pitch = document.getElementById('pitch');
    let rate = document.getElementById('rate');
    let voice = document.getElementById('voice');

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
 
})(jQuery);
