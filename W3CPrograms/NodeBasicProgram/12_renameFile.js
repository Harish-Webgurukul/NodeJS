var fs=require('fs')

fs.rename('myfile.txt', 'rename.txt', function(err){
	if (err) throw err;
	console.log('File Renamed!')
});