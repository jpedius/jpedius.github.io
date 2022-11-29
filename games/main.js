'use strict';

(function($) {

  let c = ["_", "X", "O"]; 

  let e = [];
  for (let d=0; d<9; d++) {
    
    let f = ".a" + d;
    
    let b0 = document.querySelector(f);
    b0.innerHTML = f;
    
    e[d] = b0.addEventListener("click", function() {
      b0.innerHTML = "X";
    }, false);
  }
  
  let abc = document.querySelector(".abc");
  abc.innerHTML = e;

})(jQuery);
