const { Router } = require("express");
const { mediaUpload, mediaUploadUpdate } = require("../../middleware/upload");
const { AUTH } = require("../../middleware/auth");

const router = new Router();

const controller = require("./controller");

router.route("/complex/:companyId?").get(controller.GET);
router.route("/complex").post(AUTH, mediaUpload, controller.POST);
router.route("/complex").put(AUTH, mediaUploadUpdate, controller.PUT);
router.route("/complex/:complexId").delete(AUTH, controller.DELETE);

module.exports = router;
