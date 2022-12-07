'use strict';

(function($) {

    let game = document.querySelector('.game');
    game.innerHTML = 'The boy took his dog for a run in the park because his mother is cleaning the house';
    
    console.log(game);
    console.log(game.textContent, game.innerText, game.innerHTML);
 
})(jQuery);
