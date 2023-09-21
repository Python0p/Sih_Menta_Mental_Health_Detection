const express = require("express");
const router = express.Router();
const { authMiddlewares } = require("../../middlewares");
const { userController } = require("../../controllers");

router.post(
	"/signup",
	authMiddlewares.validateSignUpRequest,
	userController.createUser
);

router.post(
	"/signin",
	authMiddlewares.validateSignInRequest,
	userController.signIn
);

module.exports = router;
