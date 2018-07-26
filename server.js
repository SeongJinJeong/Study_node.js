const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('html'));



app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'html','hello world.html'));
});
app.get('/login',function(req,res){
	res.sendFile(path.join(__dirname,'html','login.html'));
});
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