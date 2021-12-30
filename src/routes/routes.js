const { Router } = require("express");

const router = new Router();

const company = require("../modules/company/route");
const complex = require("../modules/complex/route");
const house = require("../modules/house/route");
const bank = require("../modules/bank/route");
const buy = require("../modules/buy/route");

router
  .use("/api", company)
  .use("/api", complex)
  .use("/api", house)
  .use("/api", bank)
  .use("/api", buy);

module.exports = router;
