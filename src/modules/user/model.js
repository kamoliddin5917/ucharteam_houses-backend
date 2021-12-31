const { fetch, fetchAll } = require("../../utils/pg");

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

// PUT
const findUser = (...values) => fetch(FIND_USER_UPDATE, values);
const updateUser = (...values) => fetch(UPDATE_USER, values);
// UPDATE PASSWORD
const updatePassword = (...values) => fetch(UPDATE_PASSWORD, values);
// DELETE
const allMedia = (...values) => fetchAll(FIND_ALL_MEDIA, values);
const deleteUser = (...values) => fetch(DELETE_USER, values);

module.exports = { findUser, updateUser, updatePassword, allMedia, deleteUser };
