'use strict';

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let root = document.querySelector('#root');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    root.appendChild(h1);
    
    let div01 = document.createElement('div');
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    div01.appendChild(previous);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    div01.appendChild(play);
    
    let next = document.createElement('button');
    next.innerHTML = 'Next';
    div01.appendChild(next);

    root.appendChild(div01);
        
    let div02 = document.createElement('div');
    
    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
    forRate.innerHTML = 'Rate';
    div02.appendChild(forRate);
    
    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.defaultValue = '1';
    rate.step = 0.1;
    div02.appendChild(rate);
    
    let forPitch = document.createElement('label');
    forPitch.htmlFor = 'pitch';
    forPitch.innerHTML = 'Pitch';
    div02.appendChild(forPitch);
    
    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.defaultValue = '1';
    pitch.step = 0.1;
    div02.appendChild(pitch);
    
    root.appendChild(div02);
    
    let voice = document.createElement('select');
    root.appendChild(voice);
      
    console.log(title, root, h1, previous, next, play);
    console.log(forRate, rate, forPitch, pitch, voice);
    console.log(rate.value, pitch.value);

    // "Microsoft Zira - English (United States)"
    // "Samantha"
    // "Daniel"

    const synth = window.speechSynthesis;
    let voices = [];
    let speaking = voice;

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

        if (speaking !== '') {
            
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
