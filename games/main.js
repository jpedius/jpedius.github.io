'use strict';

(function($) {

  let root = document.querySelector('#root');
  let sCenter = document.createElement('center');
  
  

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
  

  


  let w0 = [];
  let w1 = 0;
  
  for (let i=0; i<3; i++) {

    let q1 = document.createElement('div');
    q1.classList.add('text-a');
    
    for (let j=0; j<3; j++) {

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
    
    sCenter.appendChild(q1);  
  }
  
  root.appendChild(sCenter);

  let abc2 = document.querySelector(".abc");
  let abc3 = '';
  for (let i2 = 0; i2 < w0.length; i2++) { 
    abc3 += w0[i2] + ", ";
  }
  abc2.innerHTML = abc3;

  root.appendChild(abc2);

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

  root.appendChild(t1);

})(jQuery);
