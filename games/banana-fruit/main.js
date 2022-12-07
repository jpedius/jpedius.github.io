'use strict';

(function($) {

    let game = document.querySelector('.game');
    let a = 'The boy took his dog for a run in the park' +
        ' because his mother is cleaning the house' +
        ' <em>Hello World</em>';
    
    //game.innerHTML = a;
    //console.log(game.innerHTML);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    //game.innerText = a;
    //console.log(game.innerText);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    game.textContent = a;
    //console.log(game.textContent);
    //console.log(game.textContent, game.innerText, game.innerHTML);
    
    //console.log(game);
    //console.log(game.textContent, game.innerText, game.innerHTML);
 
})(jQuery);
