const { Router } = require("express");
const { imageUpload } = require("../../middleware/upload");
const { AUTH } = require("../../middleware/auth");

const router = new Router();

const controller = require("./controller");

router.route("/user").get(AUTH, controller.GET);
router.route("/user").put(AUTH, imageUpload, controller.PUT);
router.route("/user/password").put(AUTH, controller.CHANGE_PASSWORD);
router.route("/user").delete(AUTH, controller.DELETE);

module.exports = router;
