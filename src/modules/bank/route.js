const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router.route("/bank/:bankId?").get(controller.GET);

module.exports = router;
