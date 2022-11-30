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
  
  let t1  = document.createElement('center');
  
  let t2  = document.createElement('div');
  t2.classList.add('text-a');
  let t3  = document.createElement('div');
  t3.classList.add('text-a');
  let t4  = document.createElement('div');
  t4.classList.add('text-a');
  
  let t5  = document.createElement('span');
  let t6  = document.createElement('span');
  let t7  = document.createElement('span');
  let t8  = document.createElement('span');
  let t9  = document.createElement('span');
  let t10 = document.createElement('span');
  let t11 = document.createElement('span');
  let t12 = document.createElement('span');
  let t13 = document.createElement('span');
  
  t1.textContent = t0;
  
  t2.textContent = t1;
  t3.textContent = t1;
  t4.textContent = t1; 
  
  t5.textContent = t2;
  t6.textContent = t2;
  t7.textContent = t2;

  t8.textContent = t3;
  t9.textContent = t3;
  t10.textContent = t3;
  
  t11.textContent = t4;
  t12.textContent = t4;
  t13.textContent = t4;  
    
  t2.appendChild(t5);
  t2.appendChild(t6);
  t2.appendChild(t7);
  
  t3.appendChild(t8);
  t3.appendChild(t9);
  t3.appendChild(t10);
  
  t4.appendChild(t11);
  t4.appendChild(t12);
  t4.appendChild(t13);    
  
  t1.appendChild(t2);
  t1.appendChild(t3);
  t1.appendChild(t4);  
  
  t0.appendChild(t1);

})(jQuery);
