// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get("/", function(req, res){
  var result = {
    OS : req.headers['user-agent'].split(' (')[1].split(";")[0],
    address : req.headers['x-forwarded-for'],
    langauge : req.headers['accept-language'].split(",")[0] 
  }
  res.json(result);
});

// listen for requests :)

app.listen(process.env.PORT);