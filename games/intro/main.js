'use strict';

(function($) {

    let title = 'Intro';
    document.title = title;

    let root = document.querySelector('#root');

    let h1Title = document.createElement('h1');
    h1Title.classList.add('game-h1');
    h1Title.innerHTML = title;
    root.appendChild(h1Title);
 
    window.addEventListener('load', (event) => { game() });
    
    let myGamePiece1;
    let myGamePiece2;
    let myGamePiece3;

    function startGameArea() {
        myGamePiece1 = new component(30, 30, 'blue', 0, 0);
        myGamePiece2 = new component(30, 30, 'red', 110, 120);
        myGamePiece3 = new component(10, 10, 'green', 210, 120);
    }
    
    function updateGameArea() {
        myGameArea.clear(); 
        myGamePiece1.update();
        myGamePiece2.update();
        myGamePiece3.update();
    }
     
    function component(width, height, color, x, y) {
    
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        
        this.update = function() { 
            let ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        } 
    }
    
    let myGameArea = {
    
        canvas: document.createElement("canvas"),
        
        init: function() {
            startGameArea();
        },
        
        start: function() {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            root.appendChild(this.canvas);
            
            this.interval = setInterval(updateGameArea, 20);
        }, 
        
        clear: function() {
            this.context.clearRect(
                0, 0, this.canvas.width, this.canvas.height);
        },
    }

    function game() {
        myGameArea.init();
        myGameArea.start();
    }
    
    class GameArea {
    
        function start() {
        
            console.log('GameArea start', start);
        }
        
        function update() {
        
            console.log('GameArea update', upddate);
        }
    }
    /*
    function GameRoot() {
        g.init(area.start());
        g.start(area.update());
    }
    */
    class GameCanvas {
    
        constructor(root) {
            this.root = root;
            this.canvas = document.createElement("canvas");
            
            console.log(this.root, this.canvas)
        }

        function init(start) {
            
            this.init = start;
            
            console.log(this.init)
        }
        
        function start(update) {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            this.root.appendChild(this.canvas);
            
            this.interval = setInterval(update, 20);
            
            console.log(this.canvas.width, this.canvas.height);
            console.log(update);
        }
        
        function clear() {
            this.context.clearRect(
                0, 0, this.canvas.width, this.canvas.height);
                
            console.log(this.context); 
        }
    }
    
    const g = new GameCanvas(root);

})(jQuery);
