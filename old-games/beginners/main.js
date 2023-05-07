'use strict';

// 6876 -- 573 * 12
// 5230 -- 523 * 10

let title = 'Pixel Animation';
document.title = title;

let root = document.querySelector('#root');

let div = document.createElement('div');
div.classList.add('control');
root.appendChild(div);

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

let dropdown = document.createElement('select');
for (let i=0; i<animationStates.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${animationStates[i].name}`;
    option.defaultValue = `${animationStates[i].name}`;
    option.value = option.defaultValue;
    dropdown.appendChild(option);
}
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value;
}, false);
div.appendChild(dropdown);

let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
console.log(ctx);
root.appendChild(div);

let CANVAS_WIDTH = canvas.width = 600;
let CANVAS_HEIGHT = canvas.height = 600;

let playerImage = new Image();
playerImage.src = 'shadow_dog.png';

let spriteWidth = 575;
let spriteHeight = 523;

let gameFrame = 0;
let staggerFrames = 5;
let spriteAnimations = [];

animationStates.forEach((state, index) => {
    
    let frames = {
        loc: [],
    };
 
    for (let j=0; j<state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({
            x: positionX,
            y: positionY,
         });
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(
        gameFrame / staggerFrames
    ) % spriteAnimations[playerState].loc.length;
    
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    ctx.drawImage(playerImage,
        frameX, frameY, spriteWidth, spriteHeight,
        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;
 
    requestAnimationFrame(animate);
}
animate(); 

root.appendChild(canvas);
