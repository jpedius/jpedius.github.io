const first = document.querySelector("#number1");
const second = document.querySelector("#number2");

const result1 = document.querySelector(".result1");

if (!!window.SharedWorker) {
  const myWorker = new SharedWorker("worker.js");

  first.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker (three)");
  };

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker (four)");
  };

  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data;
    console.log("Message received from worker (five)");
    console.log(e.lastEventId);
  };
}
