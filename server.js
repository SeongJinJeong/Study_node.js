const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const app = express();
const route = require('./router.js');

app.use('/',route);
app.use(cors());
app.use(compression());
app.use((req,res,next)=>{
	res.status(404).send('일치하는 주소가 없습니다.');
	next();
});
app.use((err,req,res,next)=>{
	console.error(err.stack);
	res.status(500).send('서버에러!');
})



app.use(express.static(path.join(__dirname,'html')));
app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'html','hello world.html'));
});
app.get('/about',(req,res)=>{
	res.sendFile(path.join(__dirname,'html','about.html'));
})



app.listen(8080,()=>{
	console.log('Express is Successfully Activated on Port: 8080!');
});