const jwt = require("jsonwebtoken");
const User = require("../models/user.models");

const adminMiddleware = async (req, res, next) => {
  try {
    // Check if user is authenticated (assumes protect middleware has run)
    if (!req.user) {
      return res.status(401).json({ message: "Not authorized, no user found" });
    }

    // Check if user has admin role
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Not authorized. Admin access required." });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = adminMiddleware;