'use strict';

let my_title = document.getElementById("my_title");
my_title.innerHTML = document.title = "Supine Single Leg Clamshell";

let my_image = document.getElementById("my_image");
my_image.src = "image.jpg"

let my_exercises = [
    "Place an elastic band around the knees.",
    "Lie down in hooklying position with both feet positioned flat and straight.",
    "Keep your LEFT leg STABLE.",
    "Move your RIGHT leg out to side pushing against the band, using the muscles in the outer upper side of your buttock as shown in the photo.",
    "Slowly return the leg to starting position and SWITCH SIDES each repetition, resetting your center position each time.",
];

let my_instructions = [
    [ "Repeat",   "20 Times" ],
    [ "Complete", "3 Sets" ],
    [ "Perform",  "1 Times a Day" ],
];

let my_main = document.getElementById("my_main");
for (let i=0; i<my_exercises.length; i++) {

    let div = document.createElement('div');
    div.classList.add('myDiv');

    let play = document.createElement('button');
    play.classList.add('myButton');
    play.innerHTML = 'Play';
    play.addEventListener('click', () => {
        my_speak(my_exercises[i]);
    });

    let span = document.createElement('span');
    span.classList.add('mySpan');
    span.innerHTML = ` ${my_exercises[i]} `;

    div.appendChild(play);
    div.appendChild(span);

    my_main.appendChild(div);
}

let my_aside = document.getElementById("my_aside");
for (let i=0; i<my_instructions.length; i++) {

    let div = document.createElement('div');
    div.classList.add('myDiv');

    let span1 = document.createElement('span');
    span1.classList.add('myAside');
    span1.innerHTML = ` ${my_instructions[i][0]} `;

    let span2 = document.createElement('span');
    span2.classList.add('myAside');
    span2.innerHTML = ` ${my_instructions[i][1]} `;

    div.appendChild(span1);
    div.appendChild(span2);

    my_aside.appendChild(div);
}
