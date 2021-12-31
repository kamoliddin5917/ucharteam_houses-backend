const { Router } = require("express");
const { imageUpload } = require("../../middleware/upload");

const router = new Router();

const controller = require("./controller");

router.route("/register").post(imageUpload, controller.POST);

module.exports = router;
