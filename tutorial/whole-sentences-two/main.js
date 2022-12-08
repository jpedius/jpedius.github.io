'use strict';

//import { voice } from "/tutorial/whole-sentences/speech.js";

(function($) {

    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
    forRate.innerHTML = 'Rate';
    
    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.defaultValue = '1';
    rate.step = 0.1;
    
    let forPitch = document.createElement('label');
    forPitch.htmlFor = 'pitch';
    forPitch.innerHTML = 'Pitch';
    
    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.defaultValue = '1';
    pitch.step = 0.1;
             
    // "Microsoft Zira - English (United States)"
    // "Samantha"
    // "Daniel"
    // "Tessa"

    let voice = document.createElement('select');
        
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



    let title = 'Whole Sentences';
    document.title = title;

    let root = document.querySelector('#root');

    let h1 = document.createElement('h1');
    h1.innerHTML = title;
    root.appendChild(h1);
    
    let divButton = document.createElement('div');
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    divButton.appendChild(previous);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    divButton.appendChild(play);
    
    let next = document.createElement('button');
    next.innerHTML = 'Next';
    divButton.appendChild(next);

    root.appendChild(divButton);
        
    let divRatePitch = document.createElement('div');
    
    let spanRate = document.createElement('span');
    
    spanRate.appendChild(forRate);
    
    spanRate.appendChild(rate);
    
    divRatePitch.appendChild(spanRate);
    
    let spanPitch = document.createElement('span');
    
    spanPitch.appendChild(forPitch);
    
    spanPitch.appendChild(pitch);
    
    divRatePitch.appendChild(spanPitch); 
    
    root.appendChild(divRatePitch);
    
    let divVoice = document.createElement('div');

    divVoice.appendChild(voice);
    
    root.appendChild(divVoice);
   
    console.log(title, root, h1, previous, next, play);
    console.log(forRate, rate, forPitch, pitch, voice);

})(jQuery);
