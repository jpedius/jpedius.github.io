'use strict';

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let medicine = [{
        "name": "labetalol",
        "image": "img/labetalol.jpg",
        "description": "Labetalol HCL 300 mg tablet"
    }, {
        "name": "lisinopril", 
        "image": "img/lisinopril.jpg", 
        "description": "Lisinopril 20 mg tablet"
    }, {
        "name": "amlodipine besylate",
        "image": "img/amlodipine-besylate.jpg",
        "description": "Amlodipine Besylate 10 mg tablet"
    }, { 
        "name": "spironolactone",
        "image": "img/spironolactone.jpg",
        "description": "Spironolactone 25 mg tablet"
    }, { 
        "name": "tamsulosin",
        "image": "img/tamsulosin.jpg",
        "description": "Tamsulosin HCL 0.4 mg capsule"
    }, { 
        "name": "rosuvastatin calcium",
        "image": "img/rosuvastatin-calcium.jpg",
        "description": "Rosuvastatin Calcium 5 mg tablet"
    }];

    let name = document.createElement('input');
    name.classList.add('q02a');
    name.type = 'text';
    name.readonly = 'readonly';
    name.autocomplete = 'off';
    name.autocorrect = 'off';
    name.autocapitalize = 'off';

    let image = document.createElement('img');
    image.classList.add('q02a');
    
    let description = document.createElement('input');
    description.classList.add('q02');
    description.type = 'text';
    description.readonly = 'readonly';
    description.autocomplete = 'off';
    description.autocorrect = 'off';
    description.autocapitalize = 'off';
    
    let previousOrNext = 0;
    let howMany = medicine;
    console.log(howMany, medicine, howMany.length);
    howMany = shuffle(howMany);
    setText();

    function setText() {

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
        speak(howMany[previousOrNext].name);
        name.blur(); 
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

    let showName = document.createElement('button');
    let inputName = false;
    showName.innerHTML = 'Name';
    showName.classList.add('q01');
    showName.addEventListener('click', function() {
        inputName = !inputName;
        if (inputName === true) {
            name.value = '-----';
        }
        else {
            name.value = howMany[previousOrNext].name;
        }  
        //return name.value
        //    ? '-----'
        //    : howMany[previousOrNext].name;
        console.log(inputName, name.value); 
    }, false);
    
    let showImage = document.createElement('button');
    let inputImage = true; 
    showImage.innerHTML = 'Image';
    showImage.classList.add('q01');
    showImage.addEventListener('click', function() {
        inputImage = !inputImage;
        if (inputImage === true) {
            image.value = 'img/blank.jpg';
        }
        else {
            image.value = howMany[previousOrNext].image;
        }   
        //image.src
        //    ? 'img/blank.jpg'
        //    : howMany[previousOrNext].image;
        console.log(inputImage, image.src); 
    }, false);
    
    let showDescription = document.createElement('button');
    let inputDescription = true;
    showDescription.innerHTML = 'Description';
    showDescription.classList.add('q01');
    showDescription.addEventListener('click', function() {
        inputDescription = !inputDescription;
        if (inputDescription === true) {
            description.value = '-----';
        }
        else {
            description.value = howMany[previousOrNext].description;
        }
        //description.value
        //    ? '-----'
        //    : howMany[previousOrNext].description;
        console.log(inputDescription, description.value);
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

    let divName = document.createElement('div');
    divName.classList.add('q19');
    divName.appendChild(name);
    root.appendChild(divName);

    let divImage = document.createElement('div');
    divImage.classList.add('q13a');
    divImage.appendChild(image);
    root.appendChild(divImage);
    
    let divDescription = document.createElement('div');
    divDescription.classList.add('q13');
    divDescription.appendChild(description);
    root.appendChild(divDescription);

    let divButton = document.createElement('div');    
    divButton.classList.add('q14');
    divButton.appendChild(previous);
    divButton.appendChild(play);
    divButton.appendChild(next);
    root.appendChild(divButton);

    let divShowButton = document.createElement('div');    
    divShowButton.classList.add('q14');
    divShowButton.appendChild(showName);
    divShowButton.appendChild(showImage);
    divShowButton.appendChild(showDescription);
    root.appendChild(divShowButton); 

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
  
})(jQuery);

/* 

let previousOrNext = 0;
let howMany = read_sentences(words);
howMany = shuffle(howMany);

const textWord = document.querySelector(".txt");
textWord.value = howMany[previousOrNext].word;
let inputWord = inputDescription;

const textImage = document.querySelector(".txt2");
textImage.src = 'img/blank.jpg'; //howMany[previousOrNext].image;
let inputImage = true;

const textDesc = document.querySelector(".txt3");
textDesc.value = '-----'; //howMany[previousOrNext].description;
let inputDesc = true;

function setText() {

  if (inputWord === true) {
    textWord.value = '-----';
  }
  else {
    textWord.value = howMany[previousOrNext].word;
  }

  if (inputImage === true) {
    textImage.src = "img/blank.jpg";
  }
  else {
    textImage.src = howMany[previousOrNext].image;
  }

  if (inputDesc === true) {
    textDesc.value = '-----';
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
  }

  return howMany[previousOrNext];
}

function showWord() {
  if (inputWord === false) {
    textWord.value = '-----';
    inputWord = true; 
  }
  else {
    textWord.value = howMany[previousOrNext].word;
    inputWord = false;
  }
}

function showImage() {
  if (inputImage === false) {
    textImage.src = "img/blank.jpg";
    inputImage = true; 
  }
  else {
    textImage.src = howMany[previousOrNext].image;
    inputImage = false;
  }
}

function showDesc() {
  if (inputDesc === false) {
    textDesc.value = '-----';
    inputDesc = true; 
  }
  else {
    textDesc.value = howMany[previousOrNext].description;
    inputDesc = false;
  }
}

function play() {
  speak(howMany[previousOrNext].word);
  textWord.blur();
}

function read_sentences(rs) {
  let items = [];
  for (const i of rs) {
    items.push(i);
  }
  return items;
};

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

*/
