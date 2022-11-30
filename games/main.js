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
  t1.textContent = t0;
  
  let t2 = document.createElement('div');
  t2.textContent = t1;
  
  let t5 = document.createElement('span'):
  t5.textContent = t2;

  let t6 = document.createElement('span'):
  t6.textContent = t2;

  let t7 = document.createElement('span'):
  t7.textContent = t2;

  let t3 = document.createElement('div');
  t3.textContent = t1;
    
  let t4 = document.createElement('div');
  t4.textContent = t1;
  
  t2.appendChild(t5);
  t2.appendChild(t6);
  t2.appendChild(t7);  
  
  t1.appendChild(t2);

  t1.appendChild(t3);
  t1.appendChild(t4);  
  
  t0.appendChild(t1);

})(jQuery);
