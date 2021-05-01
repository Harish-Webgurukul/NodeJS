
//we have imported the module http
var http = require('http')
//./ is used becoz the module is located in the same folder
var dt = require('./2_mymodule')


//we have the function to create the server
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write("The date and time is currently:"+dt.myDateTime());//write a response to the client
	res.end('Hello World!'); //end the response
	console.log("Server is runing at 127.0.0.1:8080")
}).listen(8080); //the server object listens on port 8080

//The first argument of the res.writeHead() method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.

