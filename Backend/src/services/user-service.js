const UserRepository = require("../repositories/user-repository");
const { Auth } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const userRepository = new UserRepository();
async function createUser(data) {
	try {
		const user = await userRepository.create(data);
		return user;
	} catch (error) {
		if (
			error.name == "SequelizeValidationError" ||
			error.name == "SequelizeUniqueConstraintError"
		) {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError("Cannot create an USER", StatusCodes.BAD_REQUEST);
	}
}
async function signIn(data) {
	try {
		const user = await userRepository.getUserByEmail(data.email);
		if (!user) {
			throw new AppError(
				"User not found with following email",
				StatusCodes.NOT_FOUND
			);
		}
		const passwordMatch = Auth.checkPassword(data.password, user.password);
		if (!passwordMatch) {
			throw new AppError("Incorrect Password", StatusCodes.BAD_REQUEST);
		}
		return user;
	} catch (error) {
		console.log(error);
		if (error instanceof AppError) {
			throw error;
		}
		throw new AppError(
			"Something went wrong",
			StatusCodes.INTERNAL_SERVER_ERROR
		);
	}
}
async function getName(id) {
	try {
		const user = await userRepository.get(id);
		return user.name;
	} catch (error) {
		if (
			error.name == "SequelizeValidationError" ||
			error.name == "SequelizeUniqueConstraintError"
		) {
			let explanation = [];
			error.errors.forEach((err) => {
				explanation.push(err.message);
			});
			throw new AppError(explanation, StatusCodes.BAD_REQUEST);
		}
		throw new AppError("User does not exist", StatusCodes.BAD_REQUEST);
	}
}
module.exports = {
	createUser,
	signIn,
	getName,
};
