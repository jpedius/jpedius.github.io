'use strict';

let title = 'Pixel Animation';
document.title = title;

let root = document.querySelector('#root');

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
console.log(ctx);

let CANVAS_WIDTH = canvas.width = 600;
let CANVAS_HEIGHT = canvas.height = 600;

let playerImage = new Image();
playerImage.src = 'shadow_dog.png';

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50, 50, 100, 100);
    ctx.drawInage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);
}
animate(); 

root.appendChild(canvas);
