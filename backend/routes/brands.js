const express = require('express');
const router = express.Router();
const db = require('../models/brandsModel');

router.get('/', db.getBrandNames);

module.exports = router;
