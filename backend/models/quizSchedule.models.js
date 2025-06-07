const mongoose = require("mongoose");

const quizScheduleSchema = new mongoose.Schema({
  domain: {
    type: String,
    required: true,
    enum: ["webdev", "aiml", "cybersec", "design", "appdev", "dsa"], // Add all domains
  },
  week: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number, // Duration in minutes
    required: true,
    default: 20, // Default to 20 minutes
  },
});

module.exports = mongoose.model("QuizSchedule", quizScheduleSchema);