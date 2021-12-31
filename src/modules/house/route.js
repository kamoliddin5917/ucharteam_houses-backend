const { Router } = require("express");
const { mediaUpload, mediaUploadUpdate } = require("../../middleware/upload");
const { AUTH } = require("../../middleware/auth");

const router = new Router();

const controller = require("./controller");

router.route("/house/:complexId?").get(controller.GET);
router.route("/house").post(AUTH, mediaUpload, controller.POST);
router.route("/house").put(AUTH, mediaUploadUpdate, controller.PUT);
router.route("/house/:houseId").delete(AUTH, controller.DELETE);

module.exports = router;
