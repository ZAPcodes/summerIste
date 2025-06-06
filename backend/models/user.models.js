const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registrationId: {
    type: Number,
    required: true,
    unique: true,
  },
  branch: {
    type: String,
    required: true,
  },
  enrolledDomains: [{
    type: String,
    enum: ["webdev", "aiml", "cybersec", "design", "appdev", "dsa"],
  }],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  progress: [
    {
      domain: String,
      weeks: [
        {
          weekNumber: Number,
          tasksCompleted: [Number],
          quizPassed: Boolean,
        },
      ],
    },
  ],
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);