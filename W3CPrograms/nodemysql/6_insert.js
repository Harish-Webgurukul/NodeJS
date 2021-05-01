var mysql = require('mysql')

var con = mysql.createConnection({
	host:"localhost",
	user:"root",
	password: "",
	database: "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("connected");
	var sql = "INSERT INTO customers(id, name) VALUES(NULL, 'COMPANY INC')";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("1 record inserted");
	});
});