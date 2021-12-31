const { fetch, fetchAll } = require("../../utils/pg");

// GET
const FIND_COMPANY =
  "SELECT * FROM users u INNER JOIN companies c ON u.user_id = c.company_owner WHERE c.company_id = $1";
const FIND_COMPANIES = "SELECT * FROM companies";
// POST
const CREATE_COMPANY =
  "INSERT INTO companies(company_name,company_inform,company_media,company_owner) VALUES ($1,$2,$3,$4) RETURNING *";
// PUT
const FIND_COMPANY_UPDATE =
  "SELECT * FROM companies WHERE company_id = $1 AND company_owner = $2";
const COMPANY_UPDATE_MEDIA =
  "UPDATE companies SET company_name = $1, company_inform = $2, company_media = $3 WHERE company_id = $4 RETURNING *";
const COMPANY_UPDATE =
  "UPDATE companies SET company_name = $1, company_inform = $2 WHERE company_id = $3 RETURNING *";
// DELETE
const COMPANY_DELETE =
  "DELETE FROM companies WHERE company_id = $1 AND company_owner = $2 RETURNING *";
const COMPANY_DELETE_COMPLEX_HOUSE_MEDIA = `
   SELECT cx.complex_media, h.house_media 
   FROM companies c 
   INNER JOIN complexes cx 
   ON c.company_id = cx.complex_company
   LEFT JOIN houses h 
   ON cx.complex_id = h.house_complex 
   WHERE c.company_id = $1
  `;

// GET
const company = (...values) => fetch(FIND_COMPANY, values);
const companies = (...values) => fetchAll(FIND_COMPANIES, values);
// POST
const createCompany = (...values) => fetch(CREATE_COMPANY, values);
// PUT
const findCompanyUpdate = (...values) => fetch(FIND_COMPANY_UPDATE, values);
const updateCompanyMedia = (...values) => fetch(COMPANY_UPDATE_MEDIA, values);
const updateCompany = (...values) => fetch(COMPANY_UPDATE, values);
// DELETE
const deleteCompany = (...values) => fetch(COMPANY_DELETE, values);
const deleteCompanyComplexHouseMedia = (...values) =>
  fetchAll(COMPANY_DELETE_COMPLEX_HOUSE_MEDIA, values);

module.exports = {
  company,
  companies,
  createCompany,
  findCompanyUpdate,
  updateCompanyMedia,
  updateCompany,
  deleteCompany,
  deleteCompanyComplexHouseMedia,
};
