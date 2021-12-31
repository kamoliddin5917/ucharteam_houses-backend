const { Router } = require("express");

const router = new Router();

const company = require("../modules/company/route");
const complex = require("../modules/complex/route");
const house = require("../modules/house/route");
const bank = require("../modules/bank/route");
const buy = require("../modules/buy/route");

const login = require("../modules/login/route");
const register = require("../modules/register/route");
const user = require("../modules/user/route");

router
  .use("/api", company)
  .use("/api", complex)
  .use("/api", house)
  .use("/api", bank)
  .use("/api", buy)
  .use("/auth", login)
  .use("/auth", register)
  .use("/auth", user);

module.exports = router;
