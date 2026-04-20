const express = require('express');
const usersController = require('./users-controller');
const auth = require('../../../core/auth-middleware');

module.exports = (app) => {
  const router = express.Router();

  //public
  router.post('/register', usersController.register);
  router.post('/login', usersController.login);

  //private
  router.get('/profile', auth, usersController.getProfile);

  return router;
};
