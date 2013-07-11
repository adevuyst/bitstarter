var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileName='index.html';
    var responseString  = fs.readFileSync(fileName, "utf8");
    response.send(responseString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
