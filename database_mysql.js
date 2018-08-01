var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'o2'
});

connection.connect();
/*
connection.query('SELECT * FROM topic', function(err,rows,fields){
	if(err){
		console.log(err);
	}
	else{
		console.log('rows',rows);
		console.log('fields',fields);
	}
});
*/
/*

var value = ['nodejs','Server Side JavaScript','CCAMEL'];

connection.query('INSERT INTO topic(title,description,author) VALUES(?,?,?);',value, function(err,rows,fields){
	if(err){
		console.log(err);
	}
	else{
		console.log(rows.id);
	}
});
*/

/*
var value = ['Express','JSJ',2];

connection.query('UPDATE topic SET title=? ,author=? WHERE id=?',value, function(err,rows,fields){
	if(err){
		console.log(err);
	}
	else{
		console.log(rows);
	}
});
*/

var value = [2];

connection.query('DELETE FROM topic WHERE id=?',value, function(err,rows,fields){
	if(err){
		console.log(err);
	}
	else{
		console.log(rows);
	}
});

connection.end();