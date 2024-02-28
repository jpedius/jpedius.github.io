'use strict';

function my_play(which) {
    let w = document.getElementById(which);
    if ((w.value).trim() !== '') {
        my_speak(w.value);
    }
}
