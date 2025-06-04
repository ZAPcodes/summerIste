const mongoose = require("mongoose");

const quizResultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  domain: {
    type: String,
    required: true,
    enum: ["webdev", "aiml", "cybersec", "design", "appdev", "dsa"],
  },
  week: {
    type: Number,
    required: true,
  },
  answers: {
    type: [Number], // Array of indices representing the user's answers
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  completionTime: {
    type: Number, // Time taken to complete the quiz in seconds
    required: true,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("QuizResult", quizResultSchema);