const { VEHICLE_TYPE } = require('../../../utils/constants');

async function getTypes() {
  return VEHICLE_TYPE;
}

module.exports = {
  getTypes,
};
