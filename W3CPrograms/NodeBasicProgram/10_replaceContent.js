var fs = require('fs');

fs.writeFile('myfile2.txt', "Replaced", function(err){
	if (err) throw err;
	console.log('Replaced');
});