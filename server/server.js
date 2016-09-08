var express = require('express');
var app = express();

app.use('/', express.static( path.resolve(__dirname, '../dist/index.html')));

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.listen(proccess.evn.PORT || 3000);

