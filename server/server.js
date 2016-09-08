var express = require('express');
var app = express();

app.use('/', express.static( path.resolve('../dist')));

// app.get('/', function (req, res) {
//    res.send('Hello World');
// })

app.listen(process.env.PORT || 3000);

