const { Transport } = require('../../../models');

async function makeNewOrder(dataOrder) {
  return Transport.create(dataOrder);
}

async function getOrderById(id) {
  return Transport.findById(id)
    .populate('userId', 'fullName email')
    .populate('driverId', 'fullName');
}

module.exports = {
  makeNewOrder,
  getOrderById,
};
