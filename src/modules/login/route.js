const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router.route("/login").post(controller.POST);

module.exports = router;
