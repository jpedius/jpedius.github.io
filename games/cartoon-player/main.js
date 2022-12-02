// Game index.html
let game = document.querySelector('#game');

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
