const express = require("express");
const router = express.Router();
const { responseController , predictionController } = require("../../controllers");

router.post("/predict", responseController.createResponse);
module.exports = router;
