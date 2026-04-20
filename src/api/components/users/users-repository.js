const { User } = require('../../../models');

async function createUser(username, email, password, fullName) {
  return User.create({ username, email, password, fullName });
}

async function getUserByEmail(email) {
  return await User.findOne({ email: email });
}

async function getUserById(id) {
  return User.findById(id);
}

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
