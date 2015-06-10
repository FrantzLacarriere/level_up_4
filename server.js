var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("OMG IT WORKED!");
});

app.get('/greet/:name', function(req, res){
  var name = req.params.name;
  res.send("Hello, " + name);
})

app.listen(3000, function(){
  console.log("Running server on port 3000");
});
