const express = require("express");
const router = express.Router();
const { submitQuizResult, getLeaderboard, getQuizSchedule, setQuizSchedule } = require("../controllers/quiz.controllers.js");
const { protect } = require("../middlewares/auth.middlewares");
const adminMiddleware = require("../middlewares/admin.middlewares");

router.post("/submit", submitQuizResult);
router.get("/leaderboard/:domain/:week", getLeaderboard);
router.get("/schedule/:domain/:week", getQuizSchedule);
router.post("/schedule", adminMiddleware, setQuizSchedule);

module.exports = router;