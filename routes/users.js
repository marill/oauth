// Routes starting in "users/"

var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var authController = require('../controllers/auth');


// Create endpoint handlers for /users
router.route('/')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);



module.exports = router;