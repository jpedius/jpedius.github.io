'use strict';

(function($) {

  function plotTxt() {
 
    let c = "/tutorial/storage/plot/" + ps.value + ".txt";
    
    let e = `The series follows the life of a boy named Harry Potter. In the first book, Harry Potter and the Philosopher's Stone, Harry lives in a cupboard under the stairs in the house of the Dursleys, his aunt, uncle and cousin. The Dursleys consider themselves perfectly normal, but at the age of eleven, Harry discovers that he is a wizard. He meets a half-giant named Hagrid who invites him to attend the Hogwarts School of Witchcraft and Wizardry. Harry learns that as a baby, his parents were murdered by the dark wizard Lord Voldemort. When Voldemort attempted to kill Harry, his curse rebounded and Harry survived with a lightning-shaped scar on his forehead.`

    let d = e.match( /[^\.!\?]+[\.!\?]+/g );
    d = d.map(x => x.trim());
    howMany = d;
    previousOrNext = 0;
    
    console.log(e, d, howMany);
    
    $.get(c, function(data) {
      
      let b = data.match( /[^\.!\?]+[\.!\?]+/g );
      b = b.map(x => x.trim());
      howMany = b;
      previousOrNext = 0;
      
      console.log(data, b, howMany);
 
    }, "text");
  };

  function setText() {
    return inputTxt.value = howMany[previousOrNext];
  }

  function play() {
    speak(howMany[previousOrNext]);
    inputTxt.blur();
  }

  function previous() {
    if (previousOrNext <= 0) {
      previousOrNext = howMany.length;
    }
    previousOrNext--;
    return setText();
  }

  function next() {
    if (previousOrNext >= howMany.length - 1) {
      previousOrNext = -1;
    }
    previousOrNext++;
    return setText();
  }

  let previousOrNext = 0;
  let howMany = ["Hello", "World"];

  const inputTxt = document.querySelector(".txt");
  inputTxt.value = howMany[previousOrNext];

  const ps = document.querySelector("#plot");
  
  plotTxt();
  ps.addEventListener('change', function() { plotTxt() }, false);

})(jQuery);
