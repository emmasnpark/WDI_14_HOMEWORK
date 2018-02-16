var http = require('http')
function app(request, response) {
  var path =  request.url
  if(path === '/') {
    console.log("welcome");
    response.write('welcome');
    response.end();
  }else {
    console.log(path);
    response.write(path);
    response.end();
  }

}
var server = http.createServer(app) //create a createServer

server.listen(8080, function() {
  console.log("listening");
})
