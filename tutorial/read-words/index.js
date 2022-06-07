jQuery(function($) {
  'use strict';

  function shuffle(array) {

    let items = JSON.parse(JSON.stringify(array));
    let currentIndex = items.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [items[currentIndex], items[randomIndex]] = [
        items[randomIndex], items[currentIndex]];
    }

    return items;
  };

  let c = [];
  for (const a of words) {
    for (const b of a) {
      c.push(b);
    }
  }

  let d = shuffle(c);
  //console.log(d);
});
