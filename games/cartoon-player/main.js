// Game index.html
let game = document.querySelector('#game');

let h1 = document.createElement('h1');
h1.innerHTML = 'JP';

let grass = document.createElement('img');
grass.src = 'grass.webp';

game.appendChild(h1);
game.appendChild(grass);
