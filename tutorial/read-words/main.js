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

  function words_push(words) {

    let items = [];
    for (const i of words) {
      for (const j of i) {
        items.push(j);
      }
    }
    return items;
  };

  let a = words_push(words);
  let b = shuffle(a);

  console.log(a);
  console.log(b);
});
