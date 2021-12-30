const { fetch } = require("../../utils/pg");

const FIND_BANK = "SELECT * FROM banks WHERE bank_id = $1";
const FIND_USER = `SELECT * FROM houses h INNER JOIN
complexes c ON h.house_complex = c.complex_id
INNER JOIN
companies cp
ON c.complex_company = cp.company_id
INNER JOIN users u
ON cp.company_owner = u.user_id
WHERE h.house_id = $1`;

const bank = (...values) => fetch(FIND_BANK, values);
const user = (...values) => fetch(FIND_USER, values);

module.exports = { bank, user };
