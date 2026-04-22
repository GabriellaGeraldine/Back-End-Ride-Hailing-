const express = require('express');
const transportController = require('./transport-controller');
const authMiddleware = require('../../../core/auth-middleware'); 

const router = express.Router();

module.exports = () => {
  router.get('/types', authMiddleware, transportController.getTypes);
  router.post('/orders/estimate', authMiddleware, transportController.estimate);
  router.post(
    '/orders/request',
    authMiddleware,
    transportController.requestOrder
  );
  router.get('/orders/:id', authMiddleware, transportController.getDetail);
  router.put('/orders/:id/complete', authMiddleware, transportController.completeOrder);
  router.delete('/orders/:id/cancel', authMiddleware, transportController.cancel);
  router.get('/history', authMiddleware, transportController.getHistory);
  return router;
};

