'use strict';

let my_title = document.getElementById("my_title");
my_title.innerHTML = document.title = "Hand of Hand";

//let my_image = document.getElementById("my_image");
//my_image.src = "image.jpg"

let my_exercises = [
    "With the left hand on the bottom of the pole",
    "Place the right hand next on the pole, and remove the left hand",
    "Do this until you have we reached the top",
    "Alternate between left and right all the way back to the bottom of the pole",
];

let my_instructions = [
    [ "Repeat", "10 Times" ],
    [ "Complete", "3 Sets" ],
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
