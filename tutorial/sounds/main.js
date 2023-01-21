'use strict';

let consonant = [
    { 
        letter: "p",
        mp3: "consonant-p.mp3",
    }, { 
        letter: "b", 
        mp3: "consonant-b.mp3",
    }, { 
        letter: "f", 
        mp3: "consonant-f.mp3",
    }, { 
        letter: "v", 
        mp3: "consonant-v.mp3",
    }, { 
        letter: "t", 
        mp3: "consonant-t.mp3",
    }, { 
        letter: "d", 
        mp3: "consonant-d.mp3",
    }, { 
        letter: "c/k", 
        mp3: "consonant-k.mp3",
    }, { 
        letter: "g", 
        mp3: "consonant-g.mp3",
    }, { 
        letter: "th", 
        mp3: "consonant-th-quiet.mp3",
    }, { 
        letter: "TH", 
        mp3: "consonant-th-noisy.mp3",
    }, { 
        letter: "s", 
        mp3: "consonant-s.mp3",
    }, { 
        letter: "z", 
        mp3: "consonant-z.mp3",
    }, { 
        letter: "sh", 
        mp3: "consonant-sh.mp3",
    }, { 
        letter: "su/zh/zu", 
        mp3: "consonant-zh.mp3",
    }, { 
        letter: "ch", 
        mp3: "consonant-ch.mp3",
    }, { 
        letter: "j", 
        mp3: "consonant-j.mp3",
    }, { 
        letter: "m", 
        mp3: "consonant-m.mp3",
    }, { 
        letter: "n", 
        mp3: "consonant-n.mp3",
    }, { 
        letter: "ng", 
        mp3: "consonant-ng.mp3",
    }, { 
        letter: "l", 
        mp3: "consonant-l.mp3",
    }, { 
        letter: "r", 
        mp3: "consonant-r.mp3",
    }, { 
        letter: "h", 
        mp3: "consonant-h.mp3",
    }, { 
        letter: "w", 
        mp3: "consonant-w.mp3",
    }
];

let vowel = [
    { 
        letter: "ee", 
        mp3: "vowel-ee.mp3",
    }, { 
        letter: "i", 
        mp3: "vowel-i.mp3",
    }, { 
        letter: "e", 
        mp3: "vowel-e.mp3",
    }, { 
        letter: "ae", 
        mp3: "vowel-ae.mp3",
    }, { 
        letter: "a", 
        mp3: "vowel-a.mp3",
    }, { 
        letter: "u", 
        mp3: "vowel-u.mp3",
    }, { 
        letter: "au/aw/o", 
        mp3: "vowel-au-aw-o.mp3",
    }, { 
        letter: "oe", 
        mp3: "vowel-oe.mp3",
    }, { 
        letter: "uu", 
        mp3: "vowel-uu.mp3",
    }, { 
        letter: "oo", 
        mp3: "vowel-oo.mp3",
    }, { 
        letter: "ie", 
        mp3: "vowel-ie.mp3",
    }, { 
        letter: "ue", 
        mp3: "vowel-ue.mp3",
    }, { 
        letter: "ou/ow", 
        mp3: "vowel-ou-ow.mp3",
    }, { 
        letter: "oi/oy", 
        mp3: "vowel-oi-oy.mp3",
    }, { 
        letter: "er/ir/ur", 
        mp3: "vowel-er-ir-ur.mp3",
    }, { 
        letter: "ar", 
        mp3: "vowel-ar.mp3",
    }, { 
        letter: "or", 
        mp3: "vowel-or.mp3",
    }
];

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

let sounds = consonant.concat(vowel);
sounds = shuffle(sounds);

function sound_element(element, mp3, letter, showHide) {

    let div = document.createElement('div');
    div.classList.add('soundLetterDiv');

    let audio = document.createElement('audio');
    audio.src = mp3;
    audio.classList.add('soundLetterAudio');

    let play = document.createElement('button');
    play.classList.add('soundPlayButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        audio.play();
    });

    let show = document.createElement('button');
    show.classList.add('soundShowButton');
    show.innerHTML = 'Show';

    let input = document.createElement('input');
    input.type = 'text';
    input.size = 10;
    input.classList.add('soundTextInput');   

    let span = document.createElement('span');
    span.classList.add('soundLetterSpan');
    span.innerHTML = ' ' + letter + ' ';

    show.addEventListener('click', () => {
        if (showHide === true) {
            show.innerHTML = 'Hide';
            span.style.display = 'inline';
            showHide = false;
        }
        else {
            show.innerHTML = 'Show';
            span.style.display = 'none';
            showHide = true;
        }
    });

    div.appendChild(audio);
    div.appendChild(play);
    div.appendChild(show);
    div.appendChild(input);
    div.appendChild(span);
    element.appendChild(div);

    return [show, span];
}

let root = document.querySelector('#root');
let div = root.children[2];

const app = {
    showHideAll: true,
    showHide: [],
    showElement: [],
    spanElement: [],
};

for (let i=0; i<sounds.length; i++) {

    let file = 'file/' + sounds[i].mp3;
    let letter = sounds[i].letter;

    app.showHide[i] = true;
    let a = sound_element(div, file, letter, true);
    [app.showElement[i], app.spanElement[i]] = a;
}

let button = root.children[1].children[0];
button.addEventListener('click', () => {

    for (let i=0; i<sounds.length; i++) {
        if (app.showHide[i] === true) {
            app.showElement[i].innerHTML = 'Hide';
            app.spanElement[i].style.display = 'inline';
            app.showHide[i] = false;
        }
        else {
            app.showElement[i].innerHTML = 'Show';
            app.spanElement[i].style.display = 'none';
            app.showHide[i] = true;
        }
    }

    app.showHideAll = !app.showHideAll;
    button.innerHTML = app.showHideAll ? 'Show All' : 'Hide All';
});
