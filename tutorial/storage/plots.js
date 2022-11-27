'use strict';

const allPlots = [
  "aaaAAA",
  "bbbBBB",
  "cccCCC"
];

(function($) {

  const ps = document.querySelector("#plot");

  function plotTxt() {
    let c = "/tutorial/storage/plot/" + ps.value + ".txt";
    console.log(ps.value, c);
    
    $.get(c, function(data) {
      console.log(data);
      
      let b = data.match( /[^\.!\?]+[\.!\?]+/g );
      b = b.map(x => x.trim());
      
      console.log(b);
 
    }, "text");
  };
  
  plotTxt();
  ps.addEventListener('change', function() {
    plotTxt();
  }, false); 

})(jQuery);
