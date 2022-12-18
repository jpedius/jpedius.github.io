'use strict';

// 6876 -- 573 * 12
// 5230 -- 523 * 10

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

let spriteWidth = 573;
let spriteHeight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let staggerFrames = 5;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(50, 50, 100, 100);
    ctx.drawImage(playerImage,
        frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight,
        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
    if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) {
            frameX++;
        } else {
            frameX = 0;
        }
    }
    gameFrame++;
 
    requestAnimationFrame(animate);
}
animate(); 

root.appendChild(canvas);
