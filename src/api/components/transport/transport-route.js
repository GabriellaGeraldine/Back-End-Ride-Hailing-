const express = require('express');
const transportController = require('./transport-controller');
const authMiddleware = require('../../../core/auth-middleware');
const adminOnly = require('../../../core/admin-middleware');

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
  router.put(
    '/orders/:id/complete',
    authMiddleware,
    transportController.completeOrder
  );

  router.delete(
    '/orders/:id/cancel',
    authMiddleware,
    transportController.cancel
  );
  router.get('/history', authMiddleware, transportController.getHistory);

  router.get(
    '/admin/all-history',
    authMiddleware,
    adminOnly,
    transportController.getAllHistory
  );

  return router;
};
