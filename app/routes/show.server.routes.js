module.exports = function(app) {
  // MIDDLEWARE FOR ROUTING
  // var index = require('../controllers/index.server.controller');
  // var about = require('../controllers/about.server.controller');
  // var contact = require('../controllers/contact.server.controller');

  var usersController = require('../controllers/users.server.controller');

  // restful routes
  app.get('/edison', usersController.show);
 };
