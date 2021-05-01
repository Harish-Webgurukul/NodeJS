var http=require('http')
var fs = require('fs')

http.createServer(function(req, res){
fs.readFile('demoFile.html', function(err, data){
	res.writeHead(200, {'COntent-Type':'text/html'});
	res.write(data)
	console.log("Server Running")
	return res.end();
});

}).listen(8080);