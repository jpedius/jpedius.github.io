'use strict';

let allPreviousOrNext = 0;
let allHowMany = ["Hello", "World"];

(function($) {

  const ps = document.querySelector("#plot");

  function plotTxt() {
 
    let c = "/tutorial/storage/plot/" + ps.value + ".txt";
    
    let e = `The series follows the life of a boy named Harry Potter. In the first book, Harry Potter and the Philosopher's Stone, Harry lives in a cupboard under the stairs in the house of the Dursleys, his aunt, uncle and cousin. The Dursleys consider themselves perfectly normal, but at the age of eleven, Harry discovers that he is a wizard. He meets a half-giant named Hagrid who invites him to attend the Hogwarts School of Witchcraft and Wizardry. Harry learns that as a baby, his parents were murdered by the dark wizard Lord Voldemort. When Voldemort attempted to kill Harry, his curse rebounded and Harry survived with a lightning-shaped scar on his forehead.`

    let d = e.match( /[^\.!\?]+[\.!\?]+/g );
    d = d.map(x => x.trim());
    //allHowMany = d;
    //allPreviousOrNext = 0;
    
    console.log(e, d, allHowMany);
    
    $.get(c, function(data) {
      
      let b = data.match( /[^\.!\?]+[\.!\?]+/g );
      b = b.map(x => x.trim());
      //allHowMany = b;
      //allPreviousOrNext = 0;
      
      console.log(data, b, allHowMany);
 
    }, "text");
  };
  
  plotTxt();
  ps.addEventListener('change', function() {
    plotTxt();
  }, false); 

})(jQuery);
