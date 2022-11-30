'use strict';

(function($) {

  let c = ["_", "X", "O"]; 
  let j = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  
  let e = "";
  for (let d=0; d<9; d++) {
    
    let f = ".a" + d;
    
    let b0 = document.querySelector(f);
    b0.innerHTML = f;
    b0.addEventListener("click", function() {
      b0.innerHTML += "X";
    }, false);
    
    e += f + " ";
  }
  
  let abc = document.querySelector(".abc");
  abc.innerHTML = e;
  
  let bcd = document.querySelector(".bcd");
  bcd.innerHTML = "Star Wars";
  bcd.addEventListener("click", function() {
    bcd.innerHTML += "X";
    if (bcd.classList.add("dfg")) {
      bcd.className += " dfg";
    }
  }, false);
  
  const t0 = document.querySelector('#root');
  
  let t1 = document.createElement('center');
  
  let t2 = document.createElement('div');
  t2.classList.add('text-a');
  t1.appendChild(t2);
  
  let t3 = document.createElement('div');
  t3.classList.add('text-a');
  t1.appendChild(t3);
  
  let t4 = document.createElement('div');
  t4.classList.add('text-a');
  t1.appendChild(t4);
 
  for (let t14=0; t14<9; t14++) {
    let t15 = document.createElement('span');
    t15.classList.add('ttt', 'a' + t14);
    t15.innerHTML = '.a' + t14;
    if (t14 < 3) {
      t2.appendChild(t15);
    } else if (t14 < 6) {
      t3.appendChild(t15);
    } else if (t14 < 9) {
      t4.appendChild(t15);
    }
  }

  t0.appendChild(t1);

})(jQuery);
