var fs = require('fs');

fs.writeFile('myfile2.txt', "Hell new", function(err){
	if(err) throw err;
	console.log('Saved!');
})