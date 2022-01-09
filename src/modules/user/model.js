const { fetch, fetchAll } = require("../../utils/pg");

// GET
const FIND_COMPANIES = `
SELECT company_id, company_name, company_media, company_inform, company_date
FROM companies WHERE company_owner = $1`;
const FIND_COMPLEXES = `
  SELECT cx.complex_id, cx.complex_name, cx.complex_media, cx.complex_inform, cx.complex_date, cx.complex_company
  FROM companies c INNER JOIN complexes cx ON c.company_id = cx.complex_company WHERE c.company_owner = $1`;
const FIND_HOUSES = `
  SELECT h.house_id, h.house_floor, h.house_room, h.house_kvm, h.house_kvm_sum, h.house_media, h.house_inform, h.house_date, h.house_complex
  FROM companies c 
  INNER JOIN complexes cx ON c.company_id = cx.complex_company 
  INNER JOIN houses h ON cx.complex_id = h.house_complex WHERE c.company_owner = $1`;
// PUT
const FIND_USER_UPDATE = "SELECT * FROM users WHERE user_id = $1";
const UPDATE_USER =
  "UPDATE users SET  user_firstname=$1,user_lastname=$2,user_image=$3 WHERE user_id=$4 RETURNING user_id, user_firstname, user_lastname, user_image";
// UPDATE PASSWORD
const UPDATE_PASSWORD =
  "UPDATE users SET  user_password = $1 WHERE user_id = $2 RETURNING user_id";
// DELETE
const FIND_ALL_MEDIA = `
SELECT c.company_media, cx.complex_media, h.house_media FROM
users u INNER JOIN companies c ON u.user_id = c.company_owner
LEFT JOIN complexes cx ON c.company_id = cx.complex_company
LEFT JOIN houses h ON cx.complex_id = h.house_complex
WHERE u.user_id = $1  
`;
const DELETE_USER =
  "DELETE FROM users WHERE user_id = $1 RETURNING user_id, user_image";

// GET
const findCompanies = (...values) => fetchAll(FIND_COMPANIES, values);
const findComplexes = (...values) => fetchAll(FIND_COMPLEXES, values);
const findHouses = (...values) => fetchAll(FIND_HOUSES, values);
// PUT
const findUser = (...values) => fetch(FIND_USER_UPDATE, values);
const updateUser = (...values) => fetch(UPDATE_USER, values);
// UPDATE PASSWORD
const updatePassword = (...values) => fetch(UPDATE_PASSWORD, values);
// DELETE
const allMedia = (...values) => fetchAll(FIND_ALL_MEDIA, values);
const deleteUser = (...values) => fetch(DELETE_USER, values);

module.exports = {
  findCompanies,
  findComplexes,
  findHouses,
  findUser,
  updateUser,
  updatePassword,
  allMedia,
  deleteUser,
};
