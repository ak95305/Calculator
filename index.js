let numbers = document.querySelectorAll(".number");
let oprator = document.querySelectorAll(".oprator");
let live = document.querySelector("#live");
let previous = document.querySelector("#previous");
let ac = document.querySelector(".ac");
let c = document.querySelector(".c");
let sign = document.querySelector("#sign");
let equal = document.querySelector(".equal");

let symbol;

let operation;

//numbers
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", numberFunction);

  function numberFunction() {
    live.innerHTML += numbers[i].textContent;
  }
}
console.log(090);
//oprator
for (let i = 0; i < oprator.length; i++) {
  oprator[i].addEventListener("click", opratorFunction);

  function opratorFunction() {
    if (previous.innerHTML === "") {
      previous.innerHTML = parseFloat(live.innerHTML);
    } else if(sign.innerHTML == ""){
        previous.innerHTML = parseFloat(live.innerHTML);
    } else {
        previous.innerHTML = parseFloat(previous.innerHTML) + symbol + parseFloat(live.innerHTML);
    }
    live.innerHTML = "";
    sign.innerHTML = oprator[i].textContent;
    symbol = oprator[i].textContent;
  }
}

//ALL CLEAR
ac.addEventListener("click", acFunction);

function acFunction() {
  previous.innerHTML = "";
  live.innerHTML = "";
  sign.innerHTML = "";
}

//CLEAR
c.addEventListener("click", clearFunction);

function clearFunction() {
  liveNumber = live.innerHTML.split("");
  liveNumber.pop();
  live.innerHTML = liveNumber.join("");
}

//EQUAL

equal.addEventListener("click", equalFunction);

function equalFunction() {
  previous.innerHTML += sign.innerHTML;
  previous.innerHTML += live.innerHTML;
  sign.innerHTML = "";
  
  live.innerHTML = (eval(previous.innerHTML));
  
}
