const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");
const { userService } = require("../services");
async function createUser(req, res) {
	try {
		const user = await userService.createUser({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		SuccessResponse.messages = "User Created SuccessFully";
		SuccessResponse.data = {
			name: user.name,
			email: user.name,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
		};
		return res.status(StatusCodes.CREATED).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		return res.status(error.statusCode).json(ErrorResponse);
	}
}
async function signIn(req, res) {
	try {
		const user = await userService.signIn({
			email: req.body.email,
			password: req.body.password,
		});
		SuccessResponse.messages = "User fetched Successfully";
		SuccessResponse.data = {
			id: user.id,
			name: user.name,
			email: user.name,
		};
		return res.status(StatusCodes.OK).json(SuccessResponse);
	} catch (error) {
		ErrorResponse.error = error;
		console.log(error);
		return res.status(error.statusCode).json(ErrorResponse);
	}
}
module.exports = {
	createUser,
	signIn,
};
