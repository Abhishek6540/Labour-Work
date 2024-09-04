const express = require('express');
const router = express.Router();
const { createRole, getRoles } = require('../controller/roleController');

router.post('/', createRole);
router.get('/', getRoles);

module.exports = router;
