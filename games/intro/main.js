'use strict';

(function($) {

    let title = 'Intro';
    document.title = title;

    let root = document.querySelector('#root');

    let h1Title = document.createElement('h1');
    h1Title.classList.add('game-h1');
    h1Title.innerHTML = title;
    root.appendChild(h1Title);
 
    window.addEventListener('load', (event) => { startGame() });
    
    let myGamePiece;
    
    function startGame() {
        myGamePiece = new component(30, 30, 'red', 10, 120);
        myGameArea.start();
    }
    
    function component(width, height, color, x, y) {
    
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        
        this.update = function() { 
            let ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x this.y, this.width, this.height);
        } 
    }
    
    function updateGameArea() {
        myGameArea.clear();
        myGamePiece.update();
    } 

    let myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            root.appendChild(this.canvas);
            
            this.interval = setInterval(updateGameArea, 20);
        },
        clear : function() {
            this.context.clearRect(
            0, 0, this.canvas.width, this.canvas.height);
        }
    } 

})(jQuery);
