'use strict';

let a = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
];

console.log('a', a);

document.addEventListener('click', event => {

    const target = event.target;
    
    console.log('target', target);
    console.log('class list', target.classList);
});
