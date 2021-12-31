const { Router } = require("express");
const { mediaUpload, mediaUploadUpdate } = require("../../middleware/upload");
const { AUTH } = require("../../middleware/auth");

const router = new Router();

const controller = require("./controller");

router.route("/company/:companyId?").get(controller.GET);
router.route("/company").post(AUTH, mediaUpload, controller.POST);
router.route("/company").put(AUTH, mediaUploadUpdate, controller.PUT);
router.route("/company/:companyId").delete(AUTH, controller.DELETE);

module.exports = router;
