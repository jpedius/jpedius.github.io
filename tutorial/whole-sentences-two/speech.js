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

export { voice };
