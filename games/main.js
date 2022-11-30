'use strict';

(function($) {

  let root = document.querySelector('#root');
  let sCenter = document.createElement('center');
  
  let pos = 0;
  for (let i=0; i<3; i++) {

    let sDiv = document.createElement('div');
    sDiv.classList.add('sDiv');
    
    for (let j=0; j<3; j++) {

      let sSpan = document.createElement('span'); 
      sSpan.classList.add('sSpan', 'i' + pos);
      sSpan.innerHTML = 'i' + pos;
      
      sSpan.addEventListener('click', function() {
        sSpan.innerHTML += 'X';
      }, false);
      
      sDiv.appendChild(sSpan);
      
      pos++;
    }
    
    sCenter.appendChild(sDiv);  
  }
  
  root.appendChild(sCenter);

})(jQuery);
