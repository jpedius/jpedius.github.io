'use strict';

let title = 'Intro';
document.title = title;

let root = document.querySelector('#root');

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
console.log(ctx);

root.appendChild(canvas);
