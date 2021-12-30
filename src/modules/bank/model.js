const { fetch, fetchAll } = require("../../utils/pg");

const FIND_BANK = "SELECT * FROM banks WHERE bank_id = $1";
const FIND_BANKS = "SELECT * FROM banks WHERE bank_kridit_sum >= $1";

const bank = (...values) => fetch(FIND_BANK, values);
const banks = (...values) => fetchAll(FIND_BANKS, values);

module.exports = { bank, banks };
