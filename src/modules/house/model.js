const { fetch, fetchAll } = require("../../utils/pg");

// GET
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
// POST
const CREATE_HOUSE =
  "INSERT INTO houses(house_floor,house_room,house_kvm,house_kvm_sum,house_inform,house_media,house_complex) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *";
// PUT
const FIND_HOUSE_UPDATE = "SELECT * FROM houses WHERE house_id = $1 ";
const HOUSE_UPDATE_MEDIA =
  "UPDATE houses SET house_floor=$1,house_room=$2,house_kvm=$3,house_kvm_sum=$4,house_inform=$5,house_media=$6 WHERE house_id = $7 RETURNING *";
const HOUSE_UPDATE =
  "UPDATE houses SET house_floor=$1,house_room=$2,house_kvm=$3,house_kvm_sum=$4,house_inform=$5 WHERE house_id = $6 RETURNING *";
// DELETE
const HOUSE_DELETE = "DELETE FROM houses WHERE house_id = $1 RETURNING *";

// GET
const house = (...values) => fetch(FIND_HOUSE, values);
const houses = (...values) => fetchAll(FIND_HOUSES, values);
const allHouse = (...values) => fetchAll(FIND_HOUSES_ALL, values);
// POST
const createHouse = (...values) => fetch(CREATE_HOUSE, values);
// PUT
const findHouseUpdate = (...values) => fetch(FIND_HOUSE_UPDATE, values);
const updateHouseMedia = (...values) => fetch(HOUSE_UPDATE_MEDIA, values);
const updateHouse = (...values) => fetch(HOUSE_UPDATE, values);
// DELETE
const deleteHouse = (...values) => fetch(HOUSE_DELETE, values);

module.exports = {
  house,
  houses,
  allHouse,
  createHouse,
  findHouseUpdate,
  updateHouseMedia,
  updateHouse,
  deleteHouse,
};
