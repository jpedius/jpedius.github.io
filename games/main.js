'use strict';

(function($) {

  let c = ["_", "X", "O"]; 

  let e = [];
  for (let d=0; d<9; d++) {
    let f = ".a" + d;
    let b0 = document.querySelector(f);
    b0.innerHTML = "_";
    e[d] = b0.addEventListener("click", function() {
      b0.innerHTML = "X";
    }, false);
  }

})(jQuery);
