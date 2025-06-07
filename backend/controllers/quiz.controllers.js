const QuizResult = require("../models/quizResult.models");
const User = require("../models/user.models");
const QuizSchedule = require("../models/quizSchedule.models");

// Submit quiz result
const submitQuizResult = async (req, res) => {
  const { domain, week, answers, score, completionTime } = req.body;
  const userId = req.user.id; // From protect middleware

  try {
    // Validate input
    if (!domain || !week || !answers || typeof score !== "number" || typeof completionTime !== "number") {
      return res.status(400).json({ message: "Invalid quiz result data" });
    }

    // Check if user has already submitted a result for this domain and week
    const existingResult = await QuizResult.findOne({ userId, domain, week });
    if (existingResult) {
      return res.status(403).json({ message: "You have already taken this quiz. Only one attempt is allowed." });
    }

    // Check if the quiz is live
    const schedule = await QuizSchedule.findOne({ domain, week });
    if (!schedule) {
      return res.status(404).json({ message: "Quiz schedule not found. Quiz is not available." });
    }

    const currentTime = new Date();
    const startTime = new Date(schedule.startTime);
    const endTime = new Date(startTime.getTime() + schedule.duration * 60 * 1000); // Duration in milliseconds

    if (currentTime < startTime) {
      return res.status(403).json({ message: "Quiz is not yet live." });
    }
    if (currentTime > endTime) {
      return res.status(403).json({ message: "Quiz has ended. Submissions are closed." });
    }

    // Save the quiz result
    const quizResult = new QuizResult({
      userId,
      domain,
      week,
      answers,
      score,
      completionTime,
      completedAt: currentTime,
    });

    await quizResult.save();
    res.status(201).json({ message: "Quiz result submitted successfully", quizResult });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get leaderboard for a specific domain and week (top 10 users only)
const getLeaderboard = async (req, res) => {
  const { domain, week } = req.params;

  try {
    // Check if the quiz has ended
    const schedule = await QuizSchedule.findOne({ domain, week });
    if (!schedule) {
      return res.status(404).json({ message: "Quiz schedule not found." });
    }

    const currentTime = new Date();
    const startTime = new Date(schedule.startTime);
    const endTime = new Date(startTime.getTime() + schedule.duration * 60 * 1000);

    if (currentTime < endTime) {
      return res.status(403).json({ message: "Quiz is still ongoing. Leaderboard will be available after the quiz ends." });
    }

    const leaderboard = await QuizResult.find({ domain, week })
      .populate("userId", "name email")
      .sort({ score: -1, completionTime: 1, completedAt: 1 })
      .limit(10);

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get quiz schedule for a specific domain and week
const getQuizSchedule = async (req, res) => {
  const { domain, week } = req.params;

  try {
    const schedule = await QuizSchedule.findOne({ domain, week });
    if (!schedule) {
      return res.status(404).json({ message: "Quiz schedule not found." });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create or update quiz schedule (Admin only)
const setQuizSchedule = async (req, res) => {
  const { domain, week, startTime, duration } = req.body;

  try {
    // Validate input
    if (!domain || !week || !startTime || typeof duration !== "number") {
      return res.status(400).json({ message: "Invalid quiz schedule data" });
    }

    // Check if user is admin (assuming req.user.role is set by protect middleware)
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized. Admin access required." });
    }

    const schedule = await QuizSchedule.findOneAndUpdate(
      { domain, week },
      { startTime: new Date(startTime), duration },
      { upsert: true, new: true }
    );

    res.status(200).json({ message: "Quiz schedule set successfully", schedule });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { submitQuizResult, getLeaderboard, getQuizSchedule, setQuizSchedule };