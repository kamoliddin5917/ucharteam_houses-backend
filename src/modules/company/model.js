const { fetch, fetchAll } = require("../../utils/pg");

const FIND_COMPANY =
  "SELECT * FROM users u INNER JOIN companies c ON u.user_id = c.company_owner WHERE c.company_id = $1";
const FIND_COMPANIES = "SELECT * FROM companies";

const company = (...values) => fetch(FIND_COMPANY, values);
const companies = (...values) => fetchAll(FIND_COMPANIES, values);

module.exports = { company, companies };
