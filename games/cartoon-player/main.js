// Game index.html
let game = document.querySelector('#game');

let width = 800;
let height = 600;

let canvas = SVG('drawing').size('100%', '100%');
let rect = canvas.rect(5, 5);
let path = canvas.path("M 340,178 104,478 580,490 Z");
let length = path.length();
  
path.fill('none').stroke({
  width: 1,
  color: '#ccc'
}).move(10,10).scale(0.5);

path.animate(3000).rotate(365).loop();

rect.animate(5000, '<>').during(function(pos, morph, eased) {
    
    let m = path.matrixify();
    let p = new SVG.Point(path.pointAt(eased * length)).transform(m);
    
    rect.move(p.x, p.y);
 
}).loop(true, true);

/*
let h1 = document.createElement('h1');
h1.innerHTML = 'JP';
*/

/*
let grass = document.createElement('img');
grass.src = 'grass.webp';
grass.width = 800;
grass.y = 400;
*/

// <svg width="200" height="200" viewBox="-100 -100 200 200">
let root = document.createElement('svg');
root.width = 800;
root.height = 600;

console.log(root);

/*
<circle
        cx="0"
        cy="0"
        r="90"
        fill="transparent"
        stroke="#f0f0c9"
        stroke-width="7"
      />
*/ 
let c = document.createElement('circle');
c.cx = 0;
c.cy = 0;
c.r = 90;
c.fill = 'transparent';
c.stroke = '#f0f0c9';

root.appendChild(c);

// game.appendChild(h1);
game.appendChild(root);
