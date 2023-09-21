const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
async function validateSignUpRequest(req, res, next) {
	if (!req.body.name) {
		ErrorResponse.messages =
			"Something went wrong while authenticating the user";
		ErrorResponse.error = new AppError(
			["Name not found in the incoming request"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.email) {
		ErrorResponse.messages =
			"Something went wrong while authenticating the user";
		ErrorResponse.error = new AppError(
			["Email not found in the incoming request"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.password) {
		ErrorResponse.messages =
			"Something went wrong while authenticating the user";
		ErrorResponse.error = new AppError(
			["Password not found in the incoming request"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	next();
}
async function validateSignInRequest(req, res, next) {
	if (!req.body.email) {
		ErrorResponse.messages =
			"Something went wrong while authenticating the user";
		ErrorResponse.error = new AppError(
			["Email not found in the incoming request"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	if (!req.body.password) {
		ErrorResponse.messages =
			"Something went wrong while authenticating the user";
		ErrorResponse.error = new AppError(
			["Password not found in the incoming request"],
			StatusCodes.BAD_REQUEST
		);
		return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
	}
	next();
}
module.exports = {
	validateSignUpRequest,
	validateSignInRequest,
};
