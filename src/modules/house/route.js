const { Router } = require("express");

const router = new Router();

const controller = require("./controller");

router.route("/house/:complexId?").get(controller.GET);

module.exports = router;
