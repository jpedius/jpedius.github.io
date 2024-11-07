'use strict';

let my_title = document.getElementById("my_title");
my_title.innerHTML = document.title = "Lumbar Rotations";

let my_image = document.getElementById("my_image");
my_image.src = "image.jpg"

let my_exercises = [
    "Lying on your back with your knees bent, slowly drop your legs to one side and hold the stretch.",
    "Come back to the middle and switch sides.",
    "You should feel the stretch in your back on the opposite side that your legs are leaning.",
    "SET 1: feet and knees close together, small range of motion (avoid painful movement)",
    "SET 2: feet wider than hips, one hip will feel more stretch as you twist",
];

let my_instructions = [
    [ "Repeat",   "20 Times" ],
    [ "Complete", "2 Sets" ],
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
