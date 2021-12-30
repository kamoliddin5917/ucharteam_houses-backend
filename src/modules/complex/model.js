const { fetch, fetchAll } = require("../../utils/pg");

const FIND_COMPLEX = `SELECT * FROM 
  complexes c INNER JOIN
  companies cp
  ON c.complex_company = cp.company_id
  INNER JOIN users u
  ON cp.company_owner = u.user_id
  WHERE c.complex_id = $1`;
const FIND_COMPLEXES = "SELECT * FROM complexes WHERE complex_company = $1";
const FIND_COMPLEXES_ALL = "SELECT * FROM complexes";

const complex = (...values) => fetch(FIND_COMPLEX, values);
const complexes = (...values) => fetchAll(FIND_COMPLEXES, values);
const allCompexes = (...values) => fetchAll(FIND_COMPLEXES_ALL, values);

module.exports = { complex, complexes, allCompexes };
