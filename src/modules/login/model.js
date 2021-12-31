const { fetch } = require("../../utils/pg");

const FIND_USER =
  "SELECT user_id, user_password FROM users WHERE user_email = $1";

const findUser = (...values) => fetch(FIND_USER, values);

module.exports = { findUser };
