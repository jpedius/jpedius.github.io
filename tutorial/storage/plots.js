'use strict';

const allPlots = [
  "aaaAAA",
  "bbbBBB",
  "cccCCC"
];

(function($) {

  const ps = document.querySelector("#plot");

  function plotTxt() {
    let c = "plot/" + ps.value + ".txt";
    console.log(ps.value, c);
    
    $.get(c, function(data) {
      console.log(data);
    });
  };
  
  plotTxt();
  ps.addEventListener('chage', function() {
    plotTxt();
  }, false); 

})(jQuery);
