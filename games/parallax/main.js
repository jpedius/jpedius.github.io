'use strict';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 4;
let gameFrame = 0;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'backgroundLayers/layer-1.png';

const backgroundLayer2 = new Image();
backgroundLayer2.src = 'backgroundLayers/layer-2.png';

const backgroundLayer3 = new Image();
backgroundLayer3.src = 'backgroundLayers/layer-3.png';

const backgroundLayer4 = new Image();
backgroundLayer4.src = 'backgroundLayers/layer-4.png';

const backgroundLayer5 = new Image();
backgroundLayer5.src = 'backgroundLayers/layer-5.png';

//let sit = [0, 0, 0, 0, 0];

window.addEventListener('load', function() {

    const slide = document.getElementById('slide');
    slide.value = gameSpeed;
        
    const showGameSpeed = document.getElementById('showGameSpeed');
    showGameSpeed.innerHTML = gameSpeed;
    
    console.log(slide, showGameSpeed, gameSpeed);    
    
    slide.addEventListener('change', function(e) {
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = e.target.value;
        /*
        if (sit[0] < 4) {
            console.log(e.target.value);
            sit[0] += 1;
        }
        */
    }, false);

    class Layer {

        constructor(image, speedModifier) {
        
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            
            this.image = image;
            
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        
        update() {
            this.speed = gameSpeed * this.speedModifier;
            this.x = (gameFrame * this.speed) % this.width;
            /*
            if (sit[1] < 4) {
                console.log(this.speed, this.x);
                sit[1] += 1;
            }
            */
        }
        
        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
            /*
            if (sit[2] < 4) {
                console.log('log: ' + this.x + ', ' + (this.x + this.width));
                sit[2] += 1;
            }
            */
        }
    }

    const layer1 = new Layer(backgroundLayer1, 0.1);
    const layer2 = new Layer(backgroundLayer2, 0.2);
    const layer3 = new Layer(backgroundLayer3, 0.3);
    const layer4 = new Layer(backgroundLayer4, 0.6);
    const layer5 = new Layer(backgroundLayer5, 1.0);

    const gameObject = [layer1, layer2, layer3, layer4, layer5];
    
    console.log(layer1, layer2, layer3, layer4, layer5);

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObject.forEach(object => {
            object.update();
            object.draw();
            /*
            if (sit[3] < 4) {
                console.log('update draw');
                sit[3] += 1;
            }
            */
        });
        gameFrame--;
        /*
        if (sit[4] < 4) {
            console.log(gameFrame);
            sit[4] += 1;
        }
        */   
        requestAnimationFrame(animate);
    }
    animate();
});

const element = document.getElementById('garbage');
let start, previousTimeStamp;
let done = false

console.log(element);

function step(timestamp) {

  const t0 = performance.now();

  if (start === undefined) { start = timestamp; }

  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    
    element.style.transform = `translateX(${count}px)`;
    
    if (count === 200) done = true;
  }

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    
    previousTimeStamp = timestamp;
    
    if (!done) {
      window.requestAnimationFrame(step);
    }

  }
  
  const t1 = performance.now();
  console.log(timestamp, start, previousTimeStamp, elapsed t0, t1);
}

window.requestAnimationFrame(step);

