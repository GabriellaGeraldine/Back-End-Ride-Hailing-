const usersService = require('./users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword } = require('../../../utils/password');

async function register(request, response, next) {
  try {
    const { username, email, password, fullName } = request.body;

    if (!email) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR, 
        "Email is required");
    }

    if (!fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Full name is required",
      );
    }

    if (await usersService.emailExists(email)) {
      throw errorResponder(
        errorTypes.EMAIL_ALREADY_TAKEN,
        "Email already exists",
      );
    }

    if (password.length < 8) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        "Password must be at least 8 characters long",
      );
    }

    const hashedPassword = await hashPassword(password);
    const success = await usersService.createUser(
      username,
      email,
      hashedPassword,
      fullName,
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        "Failed to create user",
      );
    }

    return response.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return next(error);
  }
}

async function login(request, response, next) {
  try {
    const {
      email,
      password
    } = request.body;

    const loginResult = await usersService.checkLogin(email, password);

    if (!loginResult) {
      throw errorResponder(
        errorTypes.INVALID_CREDENTIALS,
        "Wrong email or password",
      );
    }

    return response.status(200).json(loginResult);
  } catch (error) {
    return next(error);
  }
}

async function getProfile(request, response, next) {
  try {
    const user = await usersService.getProfile(request.user.id);

    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, "User not found");
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  register,
  login,
  getProfile,
};