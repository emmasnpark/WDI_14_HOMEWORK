class Atm {

  constructor(type, name) {
    this.type = type;
    this.money = 0;
    this.track_arr = [];
  }

  withdraw(m) {
    this.money = this.money - m
    this.track_arr.push({withdraw: m})
    return this.money
  }

  deposit(m) {
    this.money = this.money + m
    this.track_arr.push({deposit: m})
    return this.money
  }

  showBalace() {
    return this.money
  }

  track() {
    return this.track_arr
  }

}

let atm = new Atm("jane");
console.log(atm.deposit(20));
console.log(atm.deposit(30));
console.log(atm.withdraw(30));
console.log(atm.showBalace());
console.log(atm.track());
