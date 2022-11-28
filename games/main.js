'use strict';

(function($) {

  let b0 = document.querySelector(".a0");
  b0.innerHTML = "JP";
  b0.addEventListener("click", function() {
    b0.innerHTML = "Hello";
  }, false);

})(jQuery);
