// MY MAIN APP JS
var mongo_url = process.env.mongo_url || 'mongodb://localhost/express-edison';

var express = require('./config/express');
var app = express();

var port = process.env.PORT || 7000;
app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

module.exports = app;
