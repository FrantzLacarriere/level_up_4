var express = require('express');
var app = express();

app.use(function(req, res, next){
  var language = req.params.language;
  console.log(req.params);
  if(language === "javascript"){
    res.send("Bleck");
  } else {
    next();
  }
});
app.get('/', function(req, res) {
  res.send("OMG IT WORKED!");
});

app.get('/greet/:name', function(req, res){
  var name = req.params.name;
  res.send("Hello, " + name);
})

app.get('/languages/:language', function(req, res){
  var language = req.params.language;
  res.send(language + ", that language is great!");
});

app.listen(3000, function(){
  console.log("Running server on port 3000");
});

//  Make your own middleware that responds with "That language sucks" if someone visits /languages/javascript
//  Create a new route that responds with "x, that langage is great", if someone visits /languages/x
