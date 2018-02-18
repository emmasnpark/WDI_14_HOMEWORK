
var request = require('request')
var city = process.argv[2]

var apikey = "bc6cb2e7e1e88f304611203162b9a424"
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apikey

request(url, function (error, response, body) {
  url: url
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.dir(JSON.parse(body).main.temp);
   // Print the HTML for the Google homepage.
});
