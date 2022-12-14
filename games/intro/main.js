'use strict';

(function($) {

    let title = 'Intro';
    document.title = title;

    let root = document.querySelector('#root');

    let h1Title = document.createElement('h1');
    h1Title.classList.add('game-h1');
    h1Title.innerHTML = title;
    root.appendChild(h1Title);
 
    window.addEventListener('load', (event) => {
        startGame();
    });
    
    function startGame() {
        myGameArea.start();
    }
    
    let myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
        
            this.canvas.width = 800;
            this.canvas.height = 600;
            
            this.context = this.canvas.getContext("2d");
            
            root.appendChild(this.canvas);
            /*
            document.body.insertBefore(
                this.canvas,
                document.body.childNodes[0]);
            */ 
        }
    } 

})(jQuery);
