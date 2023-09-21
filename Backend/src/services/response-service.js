const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

const {ResponseRepository} = require('../repositories');
const responseRepository = new ResponseRepository();

async function createResponse(data) {
    try {
        const response = await responseRepository.create(data);
        return response;
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
		throw new AppError("Cannot create a Response", StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createResponse,
    
}