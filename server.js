var express = require('express');
var app = express();
var port = process.env.PORT || 8080; 

app.use(express.static(__dirname + "/"));
app.get(/.*/ , function(req , res){
    res.sendfile(__dirname + "index.html");
});
app.listen(port);
console.log('server started ...');
