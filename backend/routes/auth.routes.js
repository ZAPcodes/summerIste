const express = require('express');
const router = express.Router();
const { signup, login, logout, getUser} = require('../controllers/auth.controllers.js');
const { protect } = require('../middlewares/auth.middlewares.js');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout',protect, logout );

router.get('/me', protect, getUser);

module.exports = router;