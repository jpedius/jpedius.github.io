jQuery(function($) {
  'use strict';

  const consonant = [
    { letter: "p", mp3: "../storage/sounds/consonant-p.mp3", },
    { letter: "b", mp3: "../storage/sounds/consonant-b.mp3", },
    { letter: "f", mp3: "../storage/sounds/consonant-f.mp3", },
    { letter: "v", mp3: "../storage/sounds/consonant-v.mp3", },
    { letter: "t", mp3: "../storage/sounds/consonant-t.mp3", },
    { letter: "d", mp3: "../storage/sounds/consonant-d.mp3", },
    { letter: "c/k", mp3: "../storage/sounds/consonant-k.mp3", },
    { letter: "g", mp3: "../storage/sounds/consonant-g.mp3", },
    { letter: "th", mp3: "../storage/sounds/consonant-th-quiet.mp3", },
    { letter: "TH", mp3: "../storage/sounds/consonant-th-noisy.mp3", },
    { letter: "s", mp3: "../storage/sounds/consonant-s.mp3", },
    { letter: "z", mp3: "../storage/sounds/consonant-z.mp3", },
    { letter: "sh", mp3: "../storage/sounds/consonant-sh.mp3", },
    { letter: "su/zh/zu", mp3: "../storage/sounds/consonant-zh.mp3", },
    { letter: "ch", mp3: "../storage/sounds/consonant-ch.mp3", },
    { letter: "j", mp3: "../storage/sounds/consonant-j.mp3", },
    { letter: "m", mp3: "../storage/sounds/consonant-m.mp3", },
    { letter: "n", mp3: "../storage/sounds/consonant-n.mp3", },
    { letter: "ng", mp3: "../storage/sounds/consonant-ng.mp3", },
    { letter: "l", mp3: "../storage/sounds/consonant-l.mp3", },
    { letter: "r", mp3: "../storage/sounds/consonant-r.mp3", },
    { letter: "h", mp3: "../storage/sounds/consonant-h.mp3", },
    { letter: "w", mp3: "../storage/sounds/consonant-w.mp3", },
  ];

  const vowel = [
    { letter: "ee", mp3: "../storage/sounds/vowel-ee.mp3", },
    { letter: "i", mp3: "../storage/sounds/vowel-i.mp3", },
    { letter: "e", mp3: "../storage/sounds/vowel-e.mp3", },
    { letter: "ae", mp3: "../storage/sounds/vowel-ae.mp3", },
    { letter: "a", mp3: "../storage/sounds/vowel-a.mp3", },
    { letter: "u", mp3: "../storage/sounds/vowel-u.mp3", },
    { letter: "au/aw/o", mp3: "../storage/sounds/vowel-au-aw-o.mp3", },
    { letter: "oe", mp3: "../storage/sounds/vowel-oe.mp3", },
    { letter: "uu", mp3: "../storage/sounds/vowel-uu.mp3", },
    { letter: "oo", mp3: "../storage/sounds/vowel-oo.mp3", },
    { letter: "ie", mp3: "../storage/sounds/vowel-ie.mp3", },
    { letter: "ue", mp3: "../storage/sounds/vowel-ue.mp3", },
    { letter: "ou/ow", mp3: "../storage/sounds/vowel-ou-ow.mp3", },
    { letter: "oi/oy", mp3: "../storage/sounds/vowel-oi-oy.mp3", },
    { letter: "er/ir/ur", mp3: "../storage/sounds/vowel-er-ir-ur.mp3", },
    { letter: "ar", mp3: "../storage/sounds/vowel-ar.mp3", },
    { letter: "or", mp3: "../storage/sounds/vowel-or.mp3", },
  ];

  function shuffle(array) {

    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  console.log(consonant);
  console.log(shuffle(consonant));
  console.log(vowel);
  console.log(shuffle(vowel));

  const sounds = shuffle(consonant.concat(vowel));
  console.log(sounds);
});
