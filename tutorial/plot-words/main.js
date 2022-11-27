'use strict';

(function($) {

  function plotTxt() {
 
    let c = "/tutorial/storage/plot/" + letSelectPlot.value + ".txt";
    /*  
    let e = `The series follows the life of a boy named Harry Potter. In the first book, Harry Potter and the Philosopher's Stone, Harry lives in a cupboard under the stairs in the house of the Dursleys, his aunt, uncle and cousin. The Dursleys consider themselves perfectly normal, but at the age of eleven, Harry discovers that he is a wizard. He meets a half-giant named Hagrid who invites him to attend the Hogwarts School of Witchcraft and Wizardry. Harry learns that as a baby, his parents were murdered by the dark wizard Lord Voldemort. When Voldemort attempted to kill Harry, his curse rebounded and Harry survived with a lightning-shaped scar on his forehead.`

    let d = e.match( /[^\.!\?]+[\.!\?]+/g );
    d = d.map(x => x.trim());
    howMany = d;
    previousOrNext = 0;
    
    console.log(e, d, howMany);
    */
    $.get(c, function(data) {
      
      let b = data.match( /[^\.!\?]+[\.!\?]+/g );
      b = b.map(x => x.trim());
      howMany = b;
      previousOrNext = 0;
      
      letSelectText.value = howMany[previousOrNext];
      
      console.log(data, b, howMany);
 
    }, "text");
  };

  function setText() {
    return letSelectText.value = howMany[previousOrNext];
  }

  function play() {
    speak(howMany[previousOrNext]);
    letSelectText.blur();
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

  let letSelectText = document.querySelector("#selectText");
  let letButtonPrev = document.querySelector("#buttonPrev");
  let letButtonPlay = document.querySelector("#buttonPlay");
  let letButtonNext = document.querySelector("#buttonNext");
  let letSelectPlot = document.querySelector("#plot");

  let previousOrNext = 0;
  let howMany = ["Hello", "World"];
  letSelectText.value = howMany[previousOrNext];
  
  plotTxt();
  letSelectPlot.addEventListener("change", function() {
    plotTxt()
  }, false);
  
  letButtonPrev.addEventListener("click", function() {
    previous();
  }, false);
  
  letButtonPlay.addEventListener("click", function() {
    play();
  }, false); 

  letButtonNext.addEventListener("click", function() {
    next();
  }, false); 

})(jQuery);
