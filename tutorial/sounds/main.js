'use strict';

let sounds = consonant.concat(vowel);
sounds = my_shuffle(sounds);

let kind = document.getElementById('kind');
let show = false;

let arr = [];
for (let i=0; i<sounds.length; i++) {
    arr.push(my_sound_element(
        kind, sounds[i].mp3, sounds[i].letter));
}

function my_sound_element(element, mp3, letter) {

    let div = document.createElement('div');
    div.classList.add('myAudio');

    let audio = document.createElement('audio');
    audio.src = mp3;

    let play = document.createElement('button');
    play.classList.add('myButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        audio.play();
    });

    let input = document.createElement('input');
    input.classList.add('myText');
    input.type = 'text';
    input.size = 5;

    let span = document.createElement('span');
    span.classList.add('mySpan');
    span.innerHTML = ` ${letter} `;
    span.style.display = 'none';

    div.appendChild(audio);
    div.appendChild(play);
    div.appendChild(input);
    div.appendChild(span);

    element.appendChild(div);

    return span;
}

function my_all_sounds() {
    for (let i=0; i<arr.length; i++) {
        arr[i].style.display = show ? 'none' : 'inline';
    }
    show = !show;
}
