'use strict';

(function($) {

    let title = 'Whole Sentences';
    document.title = title;

    let sentences = [{
        value: 'harry-potter',
        text: 'Harry Potter'
    }, {
        value: 'eragon',
        text: 'Eragon'
    }, {
        value: 'eldest',
        text: 'Eldest'
    }, {
        value: 'brisingr',
        text: 'Brisingr'
    }, {
        value: 'inheritance',
        text: 'Inheritance'
    }, {
        value: 'lord-of-the-rings',
        text: 'Lord of the Rings'
    }, {
        value: 'the-hobbit',
        text: 'The Hobbit'
    }, {
        value: 'the-fellowship-of-the-ring',
        text: 'The Fellowship of the Ring'
    }, {
        value: 'the-two-towers',
        text: 'The Two Towers'
    }, {
        value: 'the-return-of-the-king',
        text: 'The Return of the King'
    }, {
        value: 'northern-lights',
        text: 'Northern Lights'
    }, {
        value: 'the-subtle-knife',
        text: 'The Subtle Knife'
    }, {
        value: 'the-amber-spyglass',
        text: 'The Amber Spyglass'
    }, {
        value: 'the-lion-the-witch-and-the-wardrobe',
        text: 'The Lion the Witch and the Wardrobe'
    }, {
        value: 'prince-caspian',
        text: 'Prince Caspian'
    }, {
        value: 'the-voyage-of-the-dawn-treader',
        text: 'The Voyage of the Dawn Treader'
    }, {
        value: 'the-silver-chair',
        text: 'The Silver Chair'
    }, {
        value: 'the-horse-and-his-boy',
        text: 'The Horse and His Boy'
    }, {
        value: 'the-magicians-nephew',
        text: 'The Magicians Nephew'
    }, {
        value: 'the-last-battle', 
        text: 'The Last Battle'
    }, {
        value: 'klaus',
        text: 'Klaus'
    }];




/*


  function plot() {
    let src = "/tutorial/storage/plot/" + letSelectPlot.value + ".txt";
    $.get(src, function(data) {

      if (word.checked) {
        howMany = data.split(' ').map(x => x.trim());
      }
      else {
        let p = period.checked      ? '\\.' : '';
        let e = explanation.checked ? '!'   : '';
        let q = question.checked    ? '\\?' : '';
        let c = comma.checked       ? ','   : '';
        let all = p + e + q + c;
        let re = new RegExp("[^" + all + "]+[" + all + "]+", 'g')
        howMany = data.match( re ).map(x => x.trim());
      }

      if (random.checked) {
        howMany = shuffle(howMany);
      }

      previousOrNext = 0;        
      letSelectText.value = howMany[previousOrNext];
    }, "text");
  };


*/
    let text = document.createElement('input');
    text.classList.add('q02');
    text.type = 'text';

    let previousOrNext = 0;
    let howMany = sentences[0].value;
    setText();
    
    function plot() {
        let src = "/tutorial/storage/plot/" + sentences.value + ".txt";
        $.get(src, function(data) {
            if (word.checked) {
                howMany = data.split(' ').map(x => x.trim());
            }
            else {
                let p = period.checked      ? '\\.' : '';
                let e = explanation.checked ? '!'   : '';
                let q = question.checked    ? '\\?' : '';
                let c = comma.checked       ? ','   : '';
                let all = p + e + q + c;
                let re = new RegExp("[^" + all + "]+[" + all + "]+", 'g')
                howMany = data.match( re ).map(x => x.trim());
            }
            if (random.checked) {
                howMany = shuffle(howMany);
            }
            
            previousOrNext = 0;        
            text.value = howMany[previousOrNext];
        }, "text");
    }

    function setText() {
        text.value = howMany[previousOrNext];
    } 

    let words = document.createElement('select');
    words.innerHTML = '';
    for (let i = 0; i < sentences.length; i++) {
        const option = document.createElement('option');
        option.textContent = `${sentences[i].text}`;
        words.appendChild(option);
    $}
    words.addEventListener('change', function() {
        previousOrNext = 0;
        howMany = sentences[words.options.selectedIndex].value;
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
            speak(text.value);
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
    
    let forPeriod = document.createElement('label');
    forPeriod.htmlFor = 'period';
    forPeriod.innerHTML = 'Period';
    forPeriod.classList.add('q06');

    let period = document.createElement('input');
    period.type = 'checkbox';
    period.checked = 'checked';
    period.disabled = true;
    period.classList.add('q07');
    period.addEventListener('change', function() { plot() }, false);

    let forExplanation = document.createElement('label');
    forExplanation.htmlFor = 'period';
    forExplanation.innerHTML = 'Period';
    forExplanation.classList.add('q06');

    let explanation = document.createElement('input');
    explanation.type = 'checkbox';
    explanation.checked = 'checked';
    explanation.classList.add('q07');
    explanation.addEventListener('change', function() { plot() }, false);
 
    let forQuestion = document.createElement('label');
    forQuestion.htmlFor = 'period';
    forQuestion.innerHTML = 'Period';
    forQuestion.classList.add('q06');

    let question = document.createElement('input');
    question.type = 'checkbox';
    question.checked = 'checked';
    question.classList.add('q07');
    question.addEventListener('change', function() { plot() }, false);
    
    let forComma = document.createElement('label');
    forComma.htmlFor = 'period';
    forComma.innerHTML = 'Period';
    forComma.classList.add('q06');

    let comma = document.createElement('input');
    comma.type = 'checkbox';
    comma.checked = 'checked';
    comma.classList.add('q07');
    comma.addEventListener('change', function() { plot() }, false);
    
    let forWord = document.createElement('label');
    forWord.htmlFor = 'period';
    forWord.innerHTML = 'Period';
    forWord.classList.add('q06');

    let word = document.createElement('input');
    word.type = 'checkbox';
    word.checked = 'checked';
    word.classList.add('q07');
    word.addEventListener('change', function() { plot() }, false);
 
    let forRandom = document.createElement('label');
    forRandom.htmlFor = 'period';
    forRandom.innerHTML = 'Period';
    forRandom.classList.add('q06');

    let random = document.createElement('input');
    random.type = 'checkbox';
    random.checked = 'checked';
    random.classList.add('q07');
    random.addEventListener('change', function() { plot() }, false); 

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

    let divPeriodExplanationQuestionComma = document.createElement('div');
    divPeriodExplanationQuestionComma.classList.add('q15');
    
    let spanPeriod = document.createElement('span');
    spanPeriod.classList.add('q16'); 
    spanPeriod.appendChild(forPeriod);
    spanPeriod.appendChild(period);
    divPeriodExplanationQuestionComma.appendChild(spanPeriod); 
    
    let spanQuestion = document.createElement('span');
    spanQuestion.classList.add('q16');
    spanQuestion.appendChild(forQuestion);
    spanQuestion.appendChild(question);
    divPeriodExplanationQuestionComma.appendChild(spanQuestion); 

    let spanExplanation = document.createElement('span');
    spanExplanation.classList.add('q16');
    spanExplanation.appendChild(forExplanation);
    spanExplanation.appendChild(explanation);
    divPeriodExplanationQuestionComma.appendChild(spanExplanation);
  
    let spanComma = document.createElement('span');
    spanComma.classList.add('q16');
    spanComma.appendChild(forComma);
    spanComma.appendChild(comma);
    divPeriodExplanationQuestionComma.appendChild(spanComma);

    root.appendChild(divPeriodExplanationQuestionComma);

    let divWordRandom = document.createElement('div');
    divWordRandom.classList.add('q15');
    
    let spanWord = document.createElement('span');
    spanWord.classList.add('q16');
    spanWord.appendChild(word);
    spanWord.appendChild(spanWord);
    divPeriodExplanationQuestionComma.appendChild(spanWord);
    
    let spanRandom = document.createElement('span');
    spanRandom.classList.add('q16');
    spanRandom.appendChild(forRandom);
    spanRandom.appendChild(random);
    divPeriodExplanationQuestionComma.appendChild(spanRandom);
    
    root.appendChild(divWordRandom);

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
