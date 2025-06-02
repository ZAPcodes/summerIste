const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middlewares');
const { updateTaskProgress, getProgress, updateQuizProgress } = require('../controllers/progress.controllers.js');

// Update task progress
router.post('/task', protect, updateTaskProgress);

// Update quiz progress
router.post('/quiz', protect, updateQuizProgress);

// Get progress for a specific user and domain
router.get('/:userId/:domain', protect, getProgress);

module.exports = router;