const transportService = require('./transport-service');

async function getTypes(request, response, next) {
  try {
    const types = await transportService.getTypes();
    return response.status(200).json(types);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getTypes,
};
