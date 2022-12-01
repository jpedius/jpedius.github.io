'use strict';

(function($) {

  const game = {

    xTurn: true,
    xState: [],
    oState: [],
    
    winningStates: [
      // Rows
      ['0', '1', '2'],
      ['3', '4', '5'],
      ['6', '7', '8'],

      // Columns
      ['0', '3', '6'],
      ['1', '4', '7'],
      ['2', '5', '8'],

      // Diagonal
      ['0', '4', '8'],
      ['2', '4', '6']
    ]
  }

  document.addEventListener('click', event => {

    const target = event.target
    const isCell = target.classList.contains('grid-cell')
    const isDisabled = target.classList.contains('disabled')

    if (isCell && !isDisabled) {
  
      const cellValue = target.dataset.value

      game.xTurn === true
        ? game.xState.push(cellValue)
        : game.oState.push(cellValue)

      target.classList.add('disabled')
      target.classList.add(game.xTurn ? 'x' : 'o')

      game.xTurn = !game.xTurn

      // If all cells are disabled, then its draw
      if (!document.querySelectorAll('.grid-cell:not(.disabled)').length) {
        document.querySelector('.game-over').classList.add('visible')
        document.querySelector('.game-over-text').textContent = 'Draw!'
      }

      game.winningStates.forEach(winningState => {
  
        const xWins = winningState.every(state => game.xState.includes(state))
        const oWins = winningState.every(state => game.oState.includes(state))

        if (xWins || oWins) {
          document.querySelectorAll('.grid-cell').forEach(cell => cell.classList.add('disabled'))
          document.querySelector('.game-over').classList.add('visible')
          document.querySelector('.game-over-text').textContent = xWins
            ? 'X wins!'
            : 'O wins!'
        }
      })
    }
  })

  document.querySelector('.restart').addEventListener('click', () => {
    
    document.querySelector('.game-over').classList.remove('visible')
    
    document.querySelectorAll('.grid-cell').forEach(cell => {
      cell.classList.remove('disabled', 'x', 'o')
    })

    game.xTurn = true
    game.xState = []
    game.oState = []
  })
/*
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
  
  for (let i=0; i<3; i++) {

    let sDiv = document.createElement('div');
    sDiv.classList.add('sDiv');
    
    for (let j=0; j<3; j++) {
      
      let sSpan = document.createElement('span'); 
      sSpan.classList.add('sSpan');
      
      sSpan.innerHTML = '_';      
      
      sDiv.appendChild(sSpan);
    }
    
    sCenter.appendChild(sDiv);  
  }
  
      
      document.addEventListener('click', function(event) {
      
        //console.log(game, game.sDisabled, event, pos, game.sDisabled[pos]);
        //console.log(game.sDisabled[event.target.classList[1]]);
        //console.log(event.target.classList.contains['i0']);
        console.log(event.target.classList);
        //event.target.classList.contains('');
        
        
        
        
        if (game.sDisabled[pos] === true) {
          sSpan.innerHTML = game.turn ? 'X' : 'O';
          game.turn = !game.turn;
          game.sDisabled[pos] = false;
        }
        else {
          sSpan.innerHTML = 'G';
        }
         
      }, false);  

  root.appendChild(sCenter);
  */
 
})(jQuery);
