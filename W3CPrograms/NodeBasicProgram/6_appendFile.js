var fs = require('fs');

fs.appendFile('myfile.txt', 'Hello Content', function(err){
	if(err) throw err;
	console.log('Saved!')
});