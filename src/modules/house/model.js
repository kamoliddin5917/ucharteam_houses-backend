const { fetch, fetchAll } = require("../../utils/pg");

const FIND_HOUSE = `SELECT * FROM houses h INNER JOIN
  complexes c ON h.house_complex = c.complex_id
  INNER JOIN
  companies cp
  ON c.complex_company = cp.company_id
  INNER JOIN users u
  ON cp.company_owner = u.user_id
  WHERE h.house_id = $1`;
const FIND_HOUSES = "SELECT * FROM houses WHERE house_complex = $1";
const FIND_HOUSES_ALL = "SELECT * FROM houses";

const house = (...values) => fetch(FIND_HOUSE, values);
const houses = (...values) => fetchAll(FIND_HOUSES, values);
const allHouse = (...values) => fetchAll(FIND_HOUSES_ALL, values);

module.exports = { house, houses, allHouse };
