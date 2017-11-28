//part 1
var userName = prompt("what is your name?")
function myName() {
  document.getElementById('myname').innerHTML = userName;
}
myName() ;

//part2
var dinnerMenu = prompt("we have Steak, Fruit salad, tofurkey and pork chops. what would you like to have for tonight?")
var downMenu = dinnerMenu.toLowerCase();
if( downMenu == "steak" || downMenu == "pork chops") {
  console.log("Vegans beware!");
}else if(downMenu == "fruit salad" || downMenu == "tofurkey") {
  console.log("This cuisine is vegan friendly.");
}else {
  console.log("we do not offer that meal. Sorry!")
}

//part3
var numOfChild = 1;
var partName = "Colin Firth";
var geo = "Switzerland";
var jobTitle = "programmer";
function myStroy() {
  document.getElementById('story').innerHTML = "I will be a " + jobTitle+ " in " + geo +", and married to " + partName +
  " with " + numOfChild + " kids."
}
myStroy();

//part4
var currentYear = 2017;
var yearOfBirth = 1638;
var possibleAge1 = currentYear - yearOfBirth;
var possibleAge2 = currentYear - yearOfBirth - 1;
function theirAge() {
  document.getElementById('age').innerHTML = "They are either " + possibleAge1 + " or " +possibleAge2;
}
theirAge();

//part5
var currentAge = 35;
var maxAge = 90;
var snackAmount = 3;
var totalSnack = (maxAge - currentAge) * snackAmount * 365;
function theTotalSnack() {
  document.getElementById('snack').innerHTML = "I will need " + totalSnack + " to last you until the ripe old age of " + maxAge;
}
theTotalSnack();
