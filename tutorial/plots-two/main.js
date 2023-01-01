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
    
    let howMany = [];
    let previousOrNext = 0;
        
    function setSentences() {
    
        src.sentences = (sentences.dataset.tutorial
            + sentences.value
            + sentences.dataset.txt);
        
         //text.value = howMany[previousOrNext];
        setText();
    }

    function setText() {
    
        $.get(src.sentences, function(data) {

            let reWhole = /[^\.!\?]+[\.!\?]+/g;
            let reComma = /[^\.!\?,]+[\.!\?,]+/g;

            src.text = data.trim().match(reWhole).map(function (x) {
                return x.trim().match(reComma).map(function (y) {
                    return y.trim().split(' ');
                });
            });
            
            setWords();

        }, 'text');
    }
    setText();
    
    const myRequest = new Request('files/klaus.txt');

    console.log('myRequest', myRequest);

    fetch(myRequest)
        .then((response) => {
            console.log('response', response);
            if (!response.ok) {
                throw new Error(`HTTP error, status = ${response.status}`);
            }
            return response.text();
        })
        .then((data) => {
            console.log('data', data);
        })
        .catch((error) => {
            console.error(`Error: ${error.message}`);
        });

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
        
        if ('whole' === words.value) {
            howMany = src.text.map(function (x) {
                return x.map(function (y) {
                    return y.join(' ');
                }).join(' ');
            });
        }
        else if ('comma' === words.value) {
            howMany = src.text.flat(1).map(function (x) {
                return x.join(' ');
            });
        }
        else if ('words' === words.value) {
            howMany = src.text.flat(2);
        }
        previousOrNext = 0;
        
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
