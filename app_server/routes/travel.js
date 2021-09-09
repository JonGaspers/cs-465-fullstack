const express = require('express');
const router = express.router();
const controller = require('../controllers/travel');

/*GET homepage */
router.get('/', controller.travel);

module.exports = router;