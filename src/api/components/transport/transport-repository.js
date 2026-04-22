const { Transport, User } = require('../../../models');

async function makeNewOrder(dataOrder) {
  return Transport.create(dataOrder);
}

async function getOrderById(id) {
  return Transport.findById(id)
    .populate('userId', 'fullName email')
    .populate('driverId', 'fullName');
}

async function updateStatusOrder(id, status) {
  return Transport.findByIdAndUpdate(id, { status }, { new: true });
}

async function returnBalance(userId, amount) {
  return User.findByIdAndUpdate(
    userId,
    { $inc: { balance: amount } },
    { new: true }
  );
}

async function getUserOrders(userId) {
  return Transport.find({ userId }).sort({ createdAt: -1 });
}

async function getAllOrdersForAdmin() {
  return Transport.find().sort({ createdAt: -1 });
}

module.exports = {
  makeNewOrder,
  getOrderById,
  updateStatusOrder,
  getUserOrders,
  getAllOrdersForAdmin,
  returnBalance,
};
