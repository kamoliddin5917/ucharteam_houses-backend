require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  DB_URL: {
    local: process.env.DB_URL,
    elephant: process.env.DB_URL_EL,
  },
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};
