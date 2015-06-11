var express = require('express');
var app = express();

var languages = ["Ruby", "Javascript", "Elixir"];

app.use(express.static("public"));
app.get('/greet/:name', function(req, res){
  var name = req.params.name;
  res.send("Hello, " + name);
})

app.get('/languages/:language', function(req, res){
  var language = req.params.language;
  res.send(language + ", that language is great!");
});

app.get('/languages', function(req, res){
  res.json(languages);
})

app.listen(3000, function(){
  console.log("Running server on port 3000");
});

//  Make your own middleware that responds with "That language sucks" if someone visits /languages/javascript
//  Create a new route that responds with "x, that langage is great", if someone visits /languages/x
