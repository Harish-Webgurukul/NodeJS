//There is a very good module for working with file uploads, called "Formidable".
//The Formidable module can be downloaded and installed using NPM:
//create an upload form
var formidable = require('formidable');
var http = require('http');
var fs = require('fs')

http.createServer(function(req, res){
	if(req.url == '/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files){
			console.log(files['fileupload'].path);
		var oldpath = files['fileupload'].path;
         var newpath = 'tmp/' + files['fileupload'].name;
			fs.rename(oldpath, newpath, function(err){
				if(err) throw err;
				res.write('file upoaded and moved');
				res.end();
			})
		})
	}else{
		res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	res.write('<input type="file" name="fileupload"><br>');
	res.write('<input type="submit">');
	res.write("</form>");
	return res.end();
	}
	
}).listen(8080);
