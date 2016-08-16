module.exports = function(app) {

  var usersController = require('../controllers/users.server.controller');

  // restful routes
  app.get('/me', usersController.show);
 };
