'use strict';

// 6876 -- 573 * 12
// 5230 -- 523 * 10

let animationStates = [{
    name: 'idle',
    frames: 7,
}, {
    name: 'jump',
    frames: 7,
}, {
    name: 'fall',
    frames: 7,
}, {
    name: 'run',
    frames: 9,
}, {
    name: 'dizzy',
    frames: 11,
}, {
    name: 'sit',
    frames: 5,
}, {
    name: 'roll',
    frames: 7,
}, {
    name: 'bite',
    frames: 7,
}, {
    name: 'ko',
    frames: 12,
}, {
    name: 'gethit',
    frames: 4,   
}];

let playerState = 'run';
const dropdown = document.getElementById('animation');
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value;
}, false);

let playerImage = new Image();
playerImage.src = 'shadow_dog.png';

let spriteWidth = 575;
let spriteHeight = 523;
let spriteAnimations = [];

animationStates.forEach((state, index) => {
    
    let frames = {
        loc: [],
    };
 
    for (let i=0; i<state.frames; i++) {
        let positionX = i * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY,
         });
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');

let CANVAS_WIDTH = canvas.width = 600;
let CANVAS_HEIGHT = canvas.height = 600;

let gameFrame = 0;
let staggerFrames = 5;

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(
        gameFrame / staggerFrames
    ) % spriteAnimations[playerState].loc.length;
    
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    ctx.drawImage(playerImage,
        // source image
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        // destination \canvas
        150,
        150,
        CANVAS_WIDTH / 2,
        CANVAS_HEIGHT / 2);

    gameFrame++;
 
    requestAnimationFrame(animate);
}
animate();
