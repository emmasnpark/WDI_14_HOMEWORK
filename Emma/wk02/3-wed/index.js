var money = document.querySelector('.money');
var span = document.querySelector('span');
var deposit = document.querySelector('.deposit');
var withdraw = document.querySelector('.withdraw');

var checking = document.querySelector('.checking');
var checkingSpan = document.querySelector('.checkingSpan');
var depositChecking = document.querySelector('.depositChecking');
var withdrawChecking = document.querySelector('.withdrawChecking');


function savingAccount() {
  var withdraw = this.classList.contains('withdraw');
  var moneyValue = Number(money.value);
  var spanValue = Number(span.textContent)
  var result;

  if(withdraw==true) {
    if(spanValue >= moneyValue) {
      result = spanValue - moneyValue;
    }else {
      alert("ARE YOU KIDDING? YOU HAVE NO MONEY!")
      return
    }
  }else{
    result = moneyValue + spanValue;
  }
  span.textContent = result;
}

deposit.addEventListener('click', savingAccount);
withdraw.addEventListener('click', savingAccount);


function checkAccount() {
  var withdrawChecking = this.classList.contains('withdrawChecking');
  var checkingValue = Number(checking.value);
  var spanCheckingValue = Number(checkingSpan.textContent)
  var result;
  if(withdrawChecking==true) {
    if(spanCheckingValue >= checkingValue) {
      result = spanCheckingValue - checkingValue;
    }else {
      alert("ARE YOU KIDDING? YOU HAVE NO MONEY!")
      return
    }
  }else{
    result = checkingValue + spanCheckingValue;
  }

  checkingSpan.textContent = result;
}

depositChecking.addEventListener('click', checkAccount);
withdrawChecking.addEventListener('click', checkAccount);
