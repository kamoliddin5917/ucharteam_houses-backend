const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router.route("/complex/:companyId?").get(controller.GET);

module.exports = router;
