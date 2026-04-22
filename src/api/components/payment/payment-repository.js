const { Payment } = require('../../../models');

async function createTransaction(userId, type, amount, description) {
  return Payment.create({ userId, type, amount, description });
}

async function getUserHistory(userId) {
  return Payment.find({ userId }).sort({ createdAt: -1 });
}

module.exports = {
  createTransaction,
  getUserHistory,
};
