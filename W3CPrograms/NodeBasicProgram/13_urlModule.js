//Parse an address with the url.parse() method, and it will return a URL object with each part of the address as properties:

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);//return 'localhost:8080'
console.log(q.pathname); //return '/default.html'
console.log(q.search); //return '?year=2017&month=february'

var qdata = q.query;
console.log(qdata.month); //returns 'february'

