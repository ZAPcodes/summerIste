const express = require("express");
const router = express.Router();
const { submitQuizResult, getLeaderboard } = require("../controllers/quiz.controllers");
const {protect} = require("../middlewares/auth.middlewares.js");

// Submit quiz result (protected route)
router.post("/submit", protect, submitQuizResult);

// Get leaderboard for a specific domain and week
router.get("/leaderboard/:domain/:week", getLeaderboard);

module.exports = router;