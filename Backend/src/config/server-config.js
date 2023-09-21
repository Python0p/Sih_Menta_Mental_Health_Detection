const dotenv = require("dotenv");

dotenv.config();

module.exports = {
	PORT: parseInt(process.env.PORT),
	SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS),
	PREDICTION_MODEL_URL: process.env.PREDICTION_MODEL_URL,
};
