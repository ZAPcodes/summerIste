const express = require('express');
const { updatePassword } = require('../controllers/user.controllers.js');

const router = express.Router();

router.put('/update-password', updatePassword);

module.exports = router; 