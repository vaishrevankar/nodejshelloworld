// Load the http module to create a server
var http = require("http");

// Configure the http server to respond with a "Hello World" json object
function serverSetup(){
  var server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type" : "application/json"});

    var json = JSON.stringify({
      "Hello" : "World!"
    });
    response.end(json);
  });

  return server;
}

// Exporting the module for use in test file
var server = module.exports = serverSetup();
