'use strict';

jQuery(function($) {

    let title = 'Audio Sounds';
    document.title = title;
 
    let file = '/tutorial/audio-sounds/file/';
    
    let consonant = [{ 
        letter: "p",
        mp3: "consonant-p.mp3",
    }, { 
        letter: "b", 
        mp3: "consonant-b.mp3",
    }, { 
        letter: "f", 
        mp3: "consonant-f.mp3",
    }, { 
        letter: "v", 
        mp3: "consonant-v.mp3",
    }, { 
        letter: "t", 
        mp3: "consonant-t.mp3",
    }, { 
        letter: "d", 
        mp3: "consonant-d.mp3",
    }, { 
        letter: "c/k", 
        mp3: "consonant-k.mp3",
    }, { 
        letter: "g", 
        mp3: "consonant-g.mp3",
    }, { 
        letter: "th", 
        mp3: "consonant-th-quiet.mp3",
    }, { 
        letter: "TH", 
        mp3: "consonant-th-noisy.mp3",
    }, { 
        letter: "s", 
        mp3: "consonant-s.mp3",
    }, { 
        letter: "z", 
        mp3: "consonant-z.mp3",
    }, { 
        letter: "sh", 
        mp3: "consonant-sh.mp3",
    }, { 
        letter: "su/zh/zu", 
        mp3: "consonant-zh.mp3",
    }, { 
        letter: "ch", 
        mp3: "consonant-ch.mp3",
    }, { 
        letter: "j", 
        mp3: "consonant-j.mp3",
    }, { 
        letter: "m", 
        mp3: "consonant-m.mp3",
    }, { 
        letter: "n", 
        mp3: "consonant-n.mp3",
    }, { 
        letter: "ng", 
        mp3: "consonant-ng.mp3",
    }, { 
        letter: "l", 
        mp3: "consonant-l.mp3",
    }, { 
        letter: "r", 
        mp3: "consonant-r.mp3",
    }, { 
        letter: "h", 
        mp3: "consonant-h.mp3",
    }, { 
        letter: "w", 
        mp3: "consonant-w.mp3",
    }];

    let vowel = [{ 
        letter: "ee", 
        mp3: "vowel-ee.mp3",
    }, { 
        letter: "i", 
        mp3: "vowel-i.mp3",
    }, { 
        letter: "e", 
        mp3: "vowel-e.mp3",
    }, { 
        letter: "ae", 
        mp3: "vowel-ae.mp3",
    }, { 
        letter: "a", 
        mp3: "vowel-a.mp3",
    }, { 
        letter: "u", 
        mp3: "vowel-u.mp3",
    }, { 
        letter: "au/aw/o", 
        mp3: "vowel-au-aw-o.mp3",
    }, { 
        letter: "oe", 
        mp3: "vowel-oe.mp3",
    }, { 
        letter: "uu", 
        mp3: "vowel-uu.mp3",
    }, { 
        letter: "oo", 
        mp3: "vowel-oo.mp3",
    }, { 
        letter: "ie", 
        mp3: "vowel-ie.mp3",
    }, { 
        letter: "ue", 
        mp3: "vowel-ue.mp3",
    }, { 
        letter: "ou/ow", 
        mp3: "vowel-ou-ow.mp3",
    }, { 
        letter: "oi/oy", 
        mp3: "vowel-oi-oy.mp3",
    }, { 
        letter: "er/ir/ur", 
        mp3: "vowel-er-ir-ur.mp3",
    }, { 
        letter: "ar", 
        mp3: "vowel-ar.mp3",
    }, { 
        letter: "or", 
        mp3: "vowel-or.mp3",
    }];

    let sounds = consonant.concat(vowel);
    sounds = shuffle(sounds);

    let root = document.querySelector('#root');
    root.classList.add('q11');

    let h1Title = document.createElement('h1');
    h1Title.innerHTML = title;
    h1Title.classList.add('q12');
    root.appendChild(h1Title);

    let toLetter = [];
    for (let i=0; i<sounds.length; i++) {

        let divSounds = document.createElement('div');
        divSounds.classList.add('q19');

        let toAudio = document.createElement('audio');
        toAudio.classList.add('q19');
        toAudio.src = file + sounds[i].mp3
        divSounds.appendChild(toAudio);

        let toButton = document.createElement('button');
        toButton.classList.add('q19');
        toButton.type = 'button';
        toButton.innerHTML = 'Play';
        toButton.addEventListener('click', () => {
            divSounds.children[0].play();
        });
        divSounds.appendChild(toButton);

        let toInput = document.createElement('input');
        toInput.classList.add('q19');
        toInput.type = 'text';
        toInput.size = 10;
        divSounds.appendChild(toInput);

        let toSpan = document.createElement('span');
        toSpan.classList.add('q19');
        toSpan.innerHTML = ' ' + sounds[i].letter + ' ';
        divSounds.appendChild(toSpan);

        root.appendChild(divSounds);
        
        toLetter.push(divSounds);
    }
    console.log(toLetter);
    
    let toShowHide = document.createElement('button');
    toShowHide.classList.add('q11');
    toShowHide.type = 'button';
    toShowHide.innerHTML = 'Show';
    for (let i of toLetter.length) {
        console.log(i);
    //    i.children[0].style.display = 'none';
    }
                
    let toHide = 1;
    toShowHide.addEventListener('click', () => {
        if (toHide) {
            toShowHide.innerHTML = 'Hide';
            for (let i of toLetter.length) {
                console.log(i);
            //    i.children[0].style.display = 'inline';
            }
            toHide = 0;
        }
        else {
            toShowHide.innerHTML = 'Show';
            for (let i of toLetter.length) {
                console.log(i);
            //    i.children[0].style.display = 'none';
            }
            toHide = 1;
        }
    });
    root.appendChild(toShowHide);
 
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
    }
 
/*



  function show_hide_button(letters, items) {

    let button = document.createElement('button');

    button.innerHTML = "Letters Show";
    for (let i of letters) {
      i.children[items].style.display = 'none';
    }
    
    let hide = 1;
    button.addEventListener('click', () => {

      if (hide) {
        button.innerHTML = "Letters Hide";
        for (let i of letters) {
          i.children[items].style.display = 'inline';
        }
        
        hide = 0;
      }
      else {
        button.innerHTML = "Letters Show";
        for (let i of letters) {
          i.children[items].style.display = 'none';
        }
        
        hide = 1;
      }
    });

    return button;
  }

  function main() {

    let root = document.getElementById('root');

    let sounds = shuffle(consonant.concat(vowel));

    let letters = [];
    let span = 3;
    sounds.map(function(element, index) {
      let p = audio_paragraph(index, element.mp3, element.letter);
      letters.push(p);
    });
    let button = show_hide_button(letters, span);

    root.appendChild(button);
    letters.map(function(element) {
      root.appendChild(element);
    });

    return root;
  };

  main();
  
*/ 
});
