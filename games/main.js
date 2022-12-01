'use strict';

(function($) {

  const game = {

    turn: true,
    
    sTicTacToe: [
      true, true, true,
      true, true, true,
      true, true, true,
    ],
    sDisabled: [
      true, true, true,
      true, true, true,
      true, true, true,
    ],

    x: [],
    o: [],
    
    winner: [
 
      // rows
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],
      
      // columns
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],
      
      // diagonal
      ['0', '4', '8'],
      ['2', '4', '6'],          
    ],  
  };
  
  let root = document.querySelector('#root');
  let sCenter = document.createElement('center');
  
  let pos = 0;
  for (let i=0; i<3; i++) {

    let sDiv = document.createElement('div');
    sDiv.classList.add('sDiv');
    
    for (let j=0; j<3; j++) {
    
      console.log('a long time ago');
      
      let sSpan = document.createElement('span'); 
      sSpan.classList.add('sSpan', 'i' + pos);
      sSpan.innerHTML = '_';
      
      sSpan.addEventListener('click', function() {
      
        console.log(game, game.sDisabled, game.sDisabled[pos]);
      
        if (game.sDisabled[pos] === true) {
          sSpan.innerHTML = game.turn ? 'X' : 'O';
          game.turn = !game.turn;
          game.sDisabled[pos] = false;
        }
        else {
          sSpan.innerHTML = 'G';
        }
      }, false);
      
      sDiv.appendChild(sSpan);

      pos++;
    }
    
    sCenter.appendChild(sDiv);  
  }

  root.appendChild(sCenter);

})(jQuery);
