const express = require('express');
const router = express.Router();
const controller = require('../lib/controllers/user_controller');

router.post('/saveUser', controller.saveUser);

module.exports = router;