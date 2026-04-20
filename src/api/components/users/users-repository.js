const { User } = require('../../../models');


async function createUser(username, email, password, fullName) {
  return User.create({ username, email, password, fullName });
}


async function getUserByEmail (email) {
  return await User.findOne({ email: email });
};

async function update (id, data) {
  return User.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
