'use strict';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 5;

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

function animate() {
    ctx.drawImage(backgroundLayer2, 0, 0);
    requestAnimationFrame(animate);
}
animate();
