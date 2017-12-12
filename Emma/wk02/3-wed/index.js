//for saving account
var balance = document.querySelector('.balance');
var savingInput = document.querySelector('.savingInput');
var deposit = document.querySelector('.deposit');
var withdraw = document.querySelector('.withdraw');

//for checking account
var checking = document.querySelector('.checking');
var checkingInput = document.querySelector('.checkingInput');
var depositChecking = document.querySelector('.depositChecking');
var withdrawChecking = document.querySelector('.withdrawChecking');

//caculation for saving account
function savingAccount() {
    var withdraw = this.classList.contains('withdraw');
    var balanceValue = Number(balance.value);
    var savingInputValue = Number(savingInput.textContent)
    var result;

    if(withdraw) {
          if(savingInputValue >= balanceValue) {
            result = savingInputValue - balanceValue;
          }else {
            alert("YOU HAVE NO MONEY!")
            return
          }
    }else{
      result = balanceValue + savingInputValue;
    }
    savingInput.textContent = result;
}

deposit.addEventListener('click', savingAccount);
withdraw.addEventListener('click', savingAccount);

//caculation for checking account
function checkAccount() {
  var withdrawChecking = this.classList.contains('withdrawChecking');
  var checkingValue = Number(checking.value);
  var spanCheckingValue = Number(checkingInput.textContent)
  var result;

  if(withdrawChecking) {
        if(spanCheckingValue >= checkingValue) {
          result = spanCheckingValue - checkingValue;
        }else {
          alert("YOU HAVE NO MONEY!")
          return
        }
  }else{
    result = checkingValue + spanCheckingValue;
  }

  checkingInput.textContent = result;
}

depositChecking.addEventListener('click', checkAccount);
withdrawChecking.addEventListener('click', checkAccount);
