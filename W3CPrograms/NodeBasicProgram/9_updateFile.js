var fs = require('fs');

fs.appendFile('myfile2.txt', '\nThis is new data ', function(err){
	if(err) throw err;
	console.log('Update!')
})