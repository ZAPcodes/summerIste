const QuizResult = require("../models/quizResult.models");
const User = require("../models/user.models");

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

    // Save the quiz result
    const quizResult = new QuizResult({
      userId,
      domain,
      week,
      answers,
      score,
      completionTime,
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
    const leaderboard = await QuizResult.find({ domain, week })
      .populate("userId", "name email") // Populate user details
      .sort({ score: -1, completionTime: 1, completedAt: 1 }) // Sort by score (desc), then completion time (asc), then submission time (asc)
      .limit(10); // Limit to top 10 users

    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { submitQuizResult, getLeaderboard };