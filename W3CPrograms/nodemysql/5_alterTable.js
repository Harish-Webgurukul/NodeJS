var mysql = require('mysql');

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected!");
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMERNT PRIMARY KEY";
	con.query(sql, function(err, result){
		if(err) throw err;
		console.log("Table alterd!");
	});

});