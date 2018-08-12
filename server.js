const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const conn = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '1234',
	database : 'o2'
})

app.set('view engine','jade');
app.set('views','./views');
app.use(express.static('html'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'html','hello world.html'));
});

app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,'html','login.html'));
});

app.post('/login_server',function(req,res){
	var id = req.body.ID;
	var passwd = req.body.passwd;

	if(id == "jsj" && passwd == "jsh8689"){
		res.redirect('/');
	}
	else{
		res.redierct('/login');
	}
})

app.get('/login_server',function(req,res){
	var id = req.query.ID;
	var passwd = req.query.passwd;

	if(id == "jsj" && passwd == "jsh8689"){
		res.send('Login Complete!');
	}
	else{
		res.send('Login Denied!');
	}
})


app.listen(8080,function(){
	console.log("Server activated at 8080 port!");
})