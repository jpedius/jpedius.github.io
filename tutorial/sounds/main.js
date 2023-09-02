'use strict';

let sounds = consonant.concat(vowel);
sounds = shuffle(sounds);

let show = false;

let audioSounds = document.getElementById('audioSounds');

let a = setValues(sounds, audioSounds);

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

function soundElement(element, mp3, letter) {

    let div = document.createElement('div');
    div.classList.add('letterDiv');

    let audio = document.createElement('audio');
    audio.src = mp3;
    audio.classList.add('letterAudio');

    let play = document.createElement('button');
    play.classList.add('letterButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        audio.play();
    });

    let input = document.createElement('input');
    input.type = 'text';
    input.size = 5;
    input.classList.add('letterInput');   

    let span = document.createElement('span');
    span.classList.add('letterSpan');
    span.innerHTML = ' ' + letter + ' ';
    span.style.display = 'none'; // 'none';

    div.appendChild(audio);
    div.appendChild(play);
    div.appendChild(input);
    div.appendChild(span);

    element.appendChild(div);

    return {
        div: div,
        audio: audio,
        play: play,
        input: input,
        span: span,
    }
}

function setValues(sounds, audioSounds) {

    let elements = [];
    for (let i=0; i<sounds.length; i++) {
        let file = sounds[i].mp3;
        let letter = sounds[i].letter;
        elements.push(soundElement(audioSounds, file, letter));
    }
    return elements;
}

function clickButtonAll() {

    let elements = a;
    for (let i=0; i<sounds.length; i++) {
        if (show === true) {
            elements[i].span.style.display = 'none';
        }
        else {
            elements[i].span.style.display = 'inline';
        }
    }

    show = !show;
}

function clickButtonMode() {
	let element = document.body;
	element.classList.toggle('darkModeButton');
    for (let i=0; i<a.length; i++) {
        a[i].input.classList.toggle('darkModeButton');
    }
}
