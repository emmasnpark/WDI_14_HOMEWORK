var days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday','saturday', 'sunday'];
var noSun = days_of_the_week.pop();
days_of_the_week.unshift(noSun);
console.log(days_of_the_week);

var new_week = [['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],['saturday', 'sunday']];
new_week.pop();
new_week[0].sort();
console.log(new_week);
