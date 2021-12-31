const { fetch } = require("../../utils/pg");

const CREATE_USER =
  "INSERT INTO users(user_firstname,user_lastname,user_email,user_password,user_image) VALUES ($1,$2,$3,$4,$5) RETURNING user_id";

const createUser = (...values) => fetch(CREATE_USER, values);

module.exports = { createUser };
