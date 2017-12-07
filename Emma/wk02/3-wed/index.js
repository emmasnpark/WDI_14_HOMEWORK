var money = document.querySelector('.money');
var span = document.querySelector('span');
var deposit = document.querySelector('.deposit');
var withdraw = document.querySelector('.withdraw');

var checking = document.querySelector('.checking');
var spanChecking = document.querySelector('.spanChecking');
var depositChecking = document.querySelector('.depositChecking');
var withdrawChecking = document.querySelector('.withdrawChecking');


function addMoney() {
   var money1 = money.value;
   var money2 = Number(money1)
   console.log(money2)//my-input-integer
   var spanvalue = span.textContent
   var spanvalue1 = Number(span.textContent)//0 first-span
   console.log(spanvalue1)
   var result = money2 + spanvalue1;
   console.log(result);
   span.textContent = result;
}

function withdrawMoney() {
    var money1 = money.value;
    var money2 = Number(money1)
    console.log(money2)//my-input-integer
    var spanvalue = span.textContent
    var spanvalue1 = Number(span.textContent)//0 first-span
    console.log(spanvalue1)
    var result = spanvalue1 - money2;
    if(result<0) {
      alert("ARE YOU KIDDING? YOU HAVE NO NO NO MONEY!")
      result = 0
    }
    console.log(result);
    span.textContent = result;
}

deposit.addEventListener('click', addMoney);
withdraw.addEventListener('click', withdrawMoney);

function addChecking() {
  var checking1 = checking.value;
  var checking2 = Number(checking1)
  console.log(checking2)//my-input-integer
  var spanCheckingValue = spanChecking.textContent
  var spanCheckingValue1 = Number(spanChecking.textContent)//0 first-span
  console.log(spanCheckingValue1)
  var result = checking2 + spanCheckingValue1;
  console.log(result);
  spanChecking.textContent = result;
}

function test() {
  console.log('withdraw')
  var checking1 = checking.value;
  var checking2 = Number(checking1)
  console.log(checking2)//my-input-integer
  var spanCheckingValue = spanChecking.textContent
  var spanCheckingValue1 = Number(spanChecking.textContent)//0 first-span
  console.log(spanCheckingValue1)
  var result = spanCheckingValue1 - checking2;
  if(result<0) {
    alert("ARE YOU KIDDING? YOU HAVE NO NO NO MONEY!")
    result = 0
  }
  console.log(result);
  spanChecking.textContent = result;
}


depositChecking.addEventListener('click', addChecking);
withdrawChecking.addEventListener('click', test);
