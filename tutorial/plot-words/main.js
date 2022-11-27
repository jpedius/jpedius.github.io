'use strict';

(function($) {

  function plot() {
    let src = "/tutorial/storage/plot/" + letSelectPlot.value + ".txt";
    $.get(src, function(data) {
      previousOrNext = 0;     
      howMany = data.match( /[^\.!\?]+[\.!\?]+/g ).map(x => x.trim()); 
      letSelectText.value = howMany[previousOrNext];
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
  let previousOrNext = 0;
  let howMany = ["Hello", "World"];
  letSelectText.value = howMany[previousOrNext];
  
  let letButtonPrev = document.querySelector("#buttonPrev");
  letButtonPrev.addEventListener("click", function() { previous() }, false);

  let letButtonPlay = document.querySelector("#buttonPlay");
  letButtonPlay.addEventListener("click", function() { play() }, false);

  let letButtonNext = document.querySelector("#buttonNext");
  letButtonNext.addEventListener("click", function() { next() }, false);

  let letSelectPlot = document.querySelector("#selectPlot");
  letSelectPlot.addEventListener("change", function() { plot() }, false);
  plot();

})(jQuery);
