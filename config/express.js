// INITIALIZER FOR MY EXPRESS APPLICATION

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser');

module.exports = function() {
  var app = express();

  // initialize the required module
  if( process.env.NODE_ENV === 'development' ) {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  };

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Reqeusted-With, Content-Type, Accept")
    next();
  });
  
  app.use(bodyParser.urlencoded({
      extended: true
  }));

  app.use(bodyParser.json());

  require('../app/routes/show.server.routes')(app);

  app.use(express.static('./public'));

  return app;
};
