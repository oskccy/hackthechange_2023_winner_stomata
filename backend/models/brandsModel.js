// brandModel.js
const pool = require('../db');

const getBrandNames = async () => {
  try {
    const results = await pool.query('SELECT brandname FROM names ORDER BY id ASC');
    return results.rows;
  } catch (err) {
    throw err;
  }
};

const addBrandName = async (brandname) => {
  try {
    const results = await pool.query('INSERT INTO names(brandname) VALUES($1) RETURNING *', [brandname]);
    return results.rows[0];
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getBrandNames,
  addBrandName,
};
