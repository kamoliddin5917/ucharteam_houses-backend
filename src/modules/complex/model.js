const { fetch, fetchAll } = require("../../utils/pg");

// GET
const FIND_COMPLEX = `SELECT * FROM 
  complexes c INNER JOIN
  companies cp
  ON c.complex_company = cp.company_id
  INNER JOIN users u
  ON cp.company_owner = u.user_id
  WHERE c.complex_id = $1`;
const FIND_COMPLEXES = "SELECT * FROM complexes WHERE complex_company = $1";
const FIND_COMPLEXES_ALL = "SELECT * FROM complexes";
// POST
const CREATE_COMPLEX =
  "INSERT INTO complexes(complex_name,complex_inform,complex_media,complex_company) VALUES ($1,$2,$3,$4) RETURNING *";
// PUT
const FIND_COMPLEX_UPDATE = "SELECT * FROM complexes WHERE complex_id = $1 ";
const COMPLEX_UPDATE_MEDIA =
  "UPDATE complexes SET complex_name = $1, complex_inform = $2, complex_media = $3 WHERE complex_id = $4 RETURNING *";
const COMPLEX_UPDATE =
  "UPDATE complexes SET complex_name = $1, complex_inform = $2 WHERE complex_id = $3 RETURNING *";
// DELETE
const COMPLEX_DELETE =
  "DELETE FROM complexes WHERE complex_id = $1 RETURNING *";
const COMPLEX_DELETE_HOUSE_MEDIA = `
   SELECT h.house_media 
   FROM complexes c 
   INNER JOIN houses h
   ON c.complex_id = h.house_complex 
   WHERE c.complex_id = $1
  `;

// GET
const complex = (...values) => fetch(FIND_COMPLEX, values);
const complexes = (...values) => fetchAll(FIND_COMPLEXES, values);
const allCompexes = (...values) => fetchAll(FIND_COMPLEXES_ALL, values);
// POST
const createComplex = (...values) => fetch(CREATE_COMPLEX, values);
// PUT
const findComplexUpdate = (...values) => fetch(FIND_COMPLEX_UPDATE, values);
const updateComplexMedia = (...values) => fetch(COMPLEX_UPDATE_MEDIA, values);
const updateComplex = (...values) => fetch(COMPLEX_UPDATE, values);
// DELETE
const deleteComplex = (...values) => fetch(COMPLEX_DELETE, values);
const deleteComplexHouseMedia = (...values) =>
  fetchAll(COMPLEX_DELETE_HOUSE_MEDIA, values);

module.exports = {
  complex,
  complexes,
  allCompexes,
  createComplex,
  findComplexUpdate,
  updateComplexMedia,
  updateComplex,
  deleteComplex,
  deleteComplexHouseMedia,
};
