'use strict';

(function($) {

    let title = 'Medicine';
    document.title = title;

    let medicine = [{
        "name": "labetalol",
        "image": "file/labetalol.jpg",
        "description": "Labetalol HCL 300 mg tablet",
        "pronunciation": {
            "ipa": "/ləˈbɛtəlɔːl/",
            "google": "luh·/bay/·tuh·laal"
        }
    }, {
        "name": "lisinopril", 
        "image": "file/lisinopril.jpg", 
        "description": "Lisinopril 20 mg tablet",
        "pronunciation": {
            "ipa": "/laɪˈsɪnəprɪl/",
            "google": "luh·/si/·nuh·pruhl"
        }
    }, {
        "name": "amlodipine besylate",
        "image": "file/amlodipine-besylate.jpg",
        "description": "Amlodipine Besylate 10 mg tablet",
        "pronunciation": {
            "ipa": "/æmˈloʊdɪˌpiːn/", // besylate
            "google": "am·/low/·duh·peen" // besylate
        }
    }, { 
        "name": "spironolactone",
        "image": "file/spironolactone.jpg",
        "description": "Spironolactone 25 mg tablet",
        "pronunciation": {
            "ipa": "/ˌspaɪroʊnoʊˈlæktoʊn/",
            "google": "spai·ruh·now·/lak/·town"
        }
    }, { 
        "name": "tamsulosin",
        "image": "file/tamsulosin.jpg",
        "description": "Tamsulosin HCL 0.4 mg capsule",
        "pronunciation": {
            "ipa": "/tæmˈsuːləsɪn/",
            "google": "tam·suh·/low/·sn"
        }
    }, { 
        "name": "rosuvastatin calcium",
        "image": "file/rosuvastatin-calcium.jpg",
        "description": "Rosuvastatin Calcium 5 mg tablet",
        "pronunciation": { 
            "ipa": "/roʊˈsuːvəstætɪn/", // calcium kˈælsi͡əm 
            "google": "ruh·/soo/·vuh·sta·tuhn /kal/·see·uhm"
        }
    }];
 
    let previousOrNext = 0;
    let howMany = medicine;
    howMany = shuffle(howMany);
 
    let name = document.createElement('input');
    name.classList.add('q01');
    name.value = howMany[previousOrNext].name;
    name.type = 'text';
    name.readonly = 'readonly';
    name.autocomplete = 'off';
    name.autocorrect = 'off';
    name.autocapitalize = 'off';

    let image = document.createElement('img');
    image.classList.add('q02');
    image.src = 'file/blank.jpg';
    
    let description = document.createElement('input');
    description.classList.add('q03');
    description.value = '-----';
    description.type = 'text';
    description.readonly = 'readonly';
    description.autocomplete = 'off';
    description.autocorrect = 'off';
    description.autocapitalize = 'off';

    console.log('010', name, image, description);
    console.log(name.value, image.src, description.value);
 
    let inputName = true;
    let inputImage = false;
    let inputDescription = false;

    function setText() {
        name.value = inputName
            ? howMany[previousOrNext].name
            : '-----';
        image.src = inputImage
            ? howMany[previousOrNext].image
            : 'file/blank.jpg';
        description.value = inputDescription
            ? howMany[previousOrNext].description
            : '-----';
            
        return howMany[previousOrNext];
    }
    setText();
    
    let previous = document.createElement('button');
    previous.innerHTML = 'Previous';
    previous.classList.add('q04');
    previous.addEventListener('click', function() {
        if (previousOrNext <= 0) {
            previousOrNext = howMany.length;
        }
        previousOrNext--;
        return setText();
    }, false);
    
    let play = document.createElement('button');
    play.innerHTML = 'Play';
    play.classList.add('q05');
    play.addEventListener('click', function() {
        speak(howMany[previousOrNext].name);
        name.blur(); 
    }, false);

    let next = document.createElement('button');
    next.innerHTML = 'Next';
    next.classList.add('q06');
    next.addEventListener('click', function() {
        if (previousOrNext >= howMany.length - 1) {
            previousOrNext = -1;
        }
        previousOrNext++;
        return setText();
    }, false);

    let showName = document.createElement('button');
    showName.innerHTML = 'Name';
    showName.classList.add('q07');
    showName.addEventListener('click', function() {
        inputName = !inputName;
        name.value = inputName
            ? howMany[previousOrNext].name
            : '-----';
    }, false);
    
    let showImage = document.createElement('button');
    showImage.innerHTML = 'Image';
    showImage.classList.add('q08');
    showImage.addEventListener('click', function() {
        inputImage = !inputImage;
        image.src = inputImage
            ? howMany[previousOrNext].image
            : 'file/blank.jpg'; 
    }, false);
    
    let showDescription = document.createElement('button');
    showDescription.innerHTML = 'Description';
    showDescription.classList.add('q08');
    showDescription.addEventListener('click', function() {
        inputDescription = !inputDescription;
        description.value = inputDescription
            ? howMany[previousOrNext].description
            : '-----';
    }, false);

    let forRate = document.createElement('label');
    forRate.htmlFor = 'rate';
    forRate.innerHTML = 'Rate';
    forRate.classList.add('q09');

    let rate = document.createElement('input');
    rate.type = 'range';
    rate.min = 0.5;
    rate.max = 2;
    rate.defaultValue = '1';
    rate.step = 0.1;
    rate.classList.add('q10');

    let forPitch = document.createElement('label');
    forPitch.htmlFor = 'pitch';
    forPitch.innerHTML = 'Pitch';
    forPitch.classList.add('q11');

    let pitch = document.createElement('input');
    pitch.type = 'range';
    pitch.min = 0;
    pitch.max = 2;
    pitch.defaultValue = '1';
    pitch.step = 0.1;
    pitch.classList.add('q12');

    // "Microsoft Zira - English (United States)"
    // "Samantha"
    // "Daniel"
    // "Tessa"

    let voice = document.createElement('select');
    voice.classList.add('q13');

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
    root.classList.add('q14');

    let h1Title = document.createElement('h1');
    h1Title.innerHTML = title;
    h1Title.classList.add('q15');
    root.appendChild(h1Title);

    let divName = document.createElement('div');
    divName.classList.add('q16');
    divName.appendChild(name);
    root.appendChild(divName);

    let divImage = document.createElement('div');
    divImage.classList.add('q17');
    divImage.appendChild(image);
    root.appendChild(divImage);
    
    let divDescription = document.createElement('div');
    divDescription.classList.add('q18');
    divDescription.appendChild(description);
    root.appendChild(divDescription);

    let divButton = document.createElement('div');    
    divButton.classList.add('q19');
    divButton.appendChild(previous);
    divButton.appendChild(play);
    divButton.appendChild(next);
    root.appendChild(divButton);

    let divShowButton = document.createElement('div');    
    divShowButton.classList.add('q20');
    divShowButton.appendChild(showName);
    divShowButton.appendChild(showImage);
    divShowButton.appendChild(showDescription);
    root.appendChild(divShowButton); 

    let divRatePitch = document.createElement('div');
    divRatePitch.classList.add('q21');

    let spanRate = document.createElement('span');
    spanRate.classList.add('q22');
    spanRate.appendChild(forRate);
    spanRate.appendChild(rate);
    divRatePitch.appendChild(spanRate);

    let spanPitch = document.createElement('span');
    spanPitch.classList.add('q23');
    spanPitch.appendChild(forPitch);
    spanPitch.appendChild(pitch);
    divRatePitch.appendChild(spanPitch); 

    root.appendChild(divRatePitch);

    let divVoice = document.createElement('div');
    divVoice.classList.add('q24');
    divVoice.appendChild(voice);
    root.appendChild(divVoice);
  
})(jQuery);
