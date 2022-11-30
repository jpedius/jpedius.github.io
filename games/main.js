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
  
  let t1a = document.createElement('center');

  let w0 = [];
  let w1 = 0;
  
  for (let q0=0; q0<3; q0++) {

    let q1 = document.createElement('div');
    q1.classList.add('text-a');
    
    for (let q2=0; q2<3; q2++) {

      let q3 = document.createElement('span'); 
      q3.classList.add('ttt', 'a' + w1);
      q3.innerHTML = 'a' + w1;
      
      q3.addEventListener("click", function() {
        q3.innerHTML += "X";
      }, false);
      
      q1.appendChild(q3);
      
      w0[w1];
      
      w1++;
    }
    
    t1a.appendChild(q1);  
  }
  
  t0.appendChild(t1a);

  let abc2 = document.querySelector(".abc");
  let abc3 = '';
  for (let i = 0; i < w0.length; i++) { 
    abc3 += w0[i] + ", ";
  }
  abc2.innerHTML = abc3;

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
    
    t15.addEventListener("click", function() {
      t15.innerHTML += "X";
    }, false);
    
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
