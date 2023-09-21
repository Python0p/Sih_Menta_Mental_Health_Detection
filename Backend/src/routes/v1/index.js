const express = require("express");

const router = express.Router();

const { infoController } = require("../../controllers");
const userRoutes = require("./user-routes");
const responseRoutes = require("./response-routes");

router.get("/info", infoController.info);
router.use("/user", userRoutes);
router.use("/response", responseRoutes);


module.exports = router;
