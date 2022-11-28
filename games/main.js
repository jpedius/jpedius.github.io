'use strict';

(function($) {

  let c = [" ", "X", "O"]; 

  let e = [];
  for (let d=0; d<9; d++) {
    let b0 = document.querySelector(".a0");
    b0.innerHTML = " ";
    e[d] = b0.addEventListener("click", function() {
      b0.innerHTML = "X";
    }, false);
  }

})(jQuery);
