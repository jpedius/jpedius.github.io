'use strict';

(function($) {

    let game = document.querySelector('.game');
    let a = 'The boy took his dog for a run in the park' +
        ' because his mother is cleaning the house' +
        ' <span>Hello World</span>';
    
    game.innerHTML(a);
    console.log(game.innerHTML);
   
    game.innerText(a);
    console.log(game.innerText);
    
    game.textContent(a);
    console.log(game.textContent);
    
    console.log(game);
    console.log(game.textContent, game.innerText, game.innerHTML);
 
})(jQuery);
