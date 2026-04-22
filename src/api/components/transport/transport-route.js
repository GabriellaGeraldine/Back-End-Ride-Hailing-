const express = require('express');
const transportController = require('./transport-controller');
const authMiddleware = require('../../../core/auth-middleware'); // Sesuaikan path middleware kamu

const router = express.Router();

module.exports = () => {
  // Semua route transport butuh login (authMiddleware)
  router.get('/types', authMiddleware, transportController.getTypes);

  return router;
};
