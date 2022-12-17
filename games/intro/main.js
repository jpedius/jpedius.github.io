'use strict';

(function($) {

    let title = 'Intro';
    document.title = title;

    let root = document.querySelector('#root');

    let h1Title = document.createElement('h1');
    h1Title.classList.add('game-h1');
    h1Title.innerHTML = title;
    root.appendChild(h1Title);
 
    window.addEventListener('load', (event) => { startGameArea() });

    let myGamePiece1;
    let myGamePiece2;
    let myGamePiece3;

    function startGameArea() {
        myGamePiece1 = new component(30, 30, 'blue', 0, 0);
        myGamePiece2 = new component(30, 30, 'red', 110, 120);
        myGamePiece3 = new component(10, 10, 'green', 210, 120);
        myGameArea.start();
    }
    
    let myGameArea = {
        
        canvas: document.createElement('canvas'),
        
        start: function() {
            this.canvas.width = 800;
            this.canvas.height = 600;
            this.context = this.canvas.getContext('2d');
            root.appendChild(this.canvas);
            this.interval = setInterval(updateGameArea, 20); 
        },
        
        clear: function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
    
    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        //this.color = color;
        this.x = x;
        this.y = y;
        this.update = function() { 
            let ctx = myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    
    function updateGameArea() {
        myGameArea();
        myGamePiece1.update();
        myGamePiece2.update();
        myGamePiece3.update();
    } 
        
   



/*

let myGamePiece;
    
    function startGame() {
        
    }
    
    class GameComponent {
    
        constructor(width, height, color, x, y) {
        
            this.width = width;
            this.height = height;
            this.color = color;
            this.x = x;
            this.y = y;
            
            console.log(width, height, color, x, y);
        }
        
        update(g) {

            let ctx = g.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            
            console.log(ctx, g);
        }
    }
    
    class GameCanvas {
    
        constructor(root b) {
            this.root = root;
            this.canvas = document.createElement("canvas");
            
            console.log(root, this.canvas);
        }
        
        initialize() {

            const a = [];
            a[0] = new GameComponent(30, 30, 'blue',    0,   0);
            a[1] = new GameComponent(30, 30, 'red',   110, 120);
            a[2] = new GameComponent(10, 10, 'green', 210, 120); 

            console.log(a);

            return a;
        }
        
        start(c) {

            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            root.appendChild(this.canvas);
            
            this.interval = setInterval(function() {
                this.root.clear(); 
                c.update(this.root);
                c.update(this.root);
                c.update(this.root);
            }, 20);
             
            //console.log(this.interval);
        }
        
        one() {
            initialize();
            start(comp);
        }
        
        clear() {
            this.context.clearRect(
                0, 0, this.canvas.width, this.canvas.height);
                
            console.log(this.context);
        }   
    }
    
    const qwer = new GameCanvas(root);
    const comp = qwer.initialize();
    const star = qwer.start(comp);
/*    
    
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
    
        start: function() {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
        b    
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
    
        constructor(width, height, color, x, y) {

            this.width = width;
            this.height = height;
            
            this.color = color;
            
            this.x = x;
            this.y = y;
        }
        
        update(a) {

            this.update = function() { 
                let ctx = myGameArea.context;
                    ctx.fillStyle = this.ucolor;
                    ctx.fillRect(this.x, this.y, this.width, this.height);
            }
             
            console.log('GameArea update');
        }
    }
    
    const a1 = new GameComponent(30, 30, 'blue',    0,   0);
    const a2 = new GameComponent(30, 30, 'red',   110, 120);
    const a3 = new GameComponent(10, 10, 'green', 210, 120); 

    class GameCanvas {
    
        constructor(root) {
            this.root = root;
            this.canvas = document.createElement("canvas"); 
        }

        (update) {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            this.root.appendChild(this.canvas);
            
            this.interval = setInterval(update, 20);
            
            console.log(this.canvas.width, this.canvas.height);
            console.log(update);
        }
        
        clear() {
            this.context.clearRect(
                0, 0, this.canvas.width, this.canvas.height);
                
            console.log(this.context); 
        }
    }
    
    const g = new GameCanvas(root);


 <textarea autocomplete="off" id="textareaCode" wrap="logical" spellcheck="false" style="display: none;"><!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<style>
canvas {
    border:1px solid #d3d3d3;
    background-color: #f1f1f1;
}
</style>
</head>
<body onload="startGame()">
<script>


</script>
<p>The red square is actually being drawn 50 times per second.</p>
</body>
</html></textarea>

*/
})(jQuery);
