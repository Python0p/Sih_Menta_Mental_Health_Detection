const AppError = require("../utils/errors/app-error");
const CrudRepository = require("./crud-repository");
const { Response } = require("../models");
class ResponseRepository extends CrudRepository {
	constructor() {
		super(Response);
	}
}
module.exports = ResponseRepository;
