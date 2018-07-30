const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({storage : storage});
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/upload',function(req,res){
	res.sendFile(path.join(__dirname,'html','uploads.html'))
});
app.post('/upload',upload.single('userfile'),function(req,res){
	res.send("UPLOAD COMPLETE : "+req.file.filename);
})

app.listen(100,function(){
	console.log("Server activated at 100 port!!");
})