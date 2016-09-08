var express = require('express');
var path = require('path');

var app = express();
var port = 3000;

app.use('/', express.static( path.resolve(__dirname, '../dist/index.html')));
app.listen(port, function () {
 console.log('Example app listening on port ' + port + ' !');
});

