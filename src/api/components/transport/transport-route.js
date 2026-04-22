const express = require('express');
const transportController = require('./transport-controller');
const authMiddleware = require('../../../core/auth-middleware'); // Sesuaikan path middleware kamu

const router = express.Router();

module.exports = () => {
  // Semua route transport butuh login (authMiddleware)
  router.get('/types', authMiddleware, transportController.getTypes);
  router.post('/orders/estimate', authMiddleware, transportController.estimate);
  router.post(
    '/orders/request',
    authMiddleware,
    transportController.requestOrder
  );
  router.get('/orders/:id', authMiddleware, transportController.getDetail);

  return router;
};
