const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middlewares');
const { updateTaskProgress, getProgress, updateQuizProgress } = require('../controllers/progress.controllers.js');

// Update task progress
router.post('/task', updateTaskProgress);

// Update quiz progress
router.post('/quiz', updateQuizProgress);

// Get progress for a specific user and domain
router.get('/:userId/:domain', getProgress);

module.exports = router;