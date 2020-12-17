var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.get('/',(req,res)=>{
res.sendFile(__dirname + '/about.html');
})

app.get('/submit-data', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-data', function (req, res) {
    var name = req.body.fname + ' <br>' +'<br>'+req.body.lname +'<br>'+req.body.email+'<br>'+req.body.phone
    
    res.send('Data  Submitted Successfully!</b>');
});

var server = app.listen(5000,function () {
    console.log('App Started...');
    console.log('Go to the browser...');
});