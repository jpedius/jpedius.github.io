'use strict';

(function($) {

    let game = document.querySelector('.game');
    let a = '<p>The boy took his dog for a run in the park' +
        ' because his mother is cleaning the house' +
        ' <em>Hello World</em></p>';
    game.innerHTML = a;
    
    let nav = document.createElement('nav');
    nav.innerHTML = '<p>navigation</p>';
    game.appendChild(nav);
    
/*    
    var x1 = document.getElementById("example1").innerText;
    console.log(x1);
    var x2 = document.getElementById("example2").innerHTML;
    console.log(x2);
    var x3 = document.getElementById("example3").textContent;
    console.log(x3);
*/ 
    //console.log(game.innerHTML);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    //game.innerText = a;
    //console.log(game.innerText);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    //game.textContent = a;
    //console.log(game.textContent);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    //console.log(game);
    //console.log(game.textContent, game.innerText, game.innerHTML);
 
})(jQuery);
