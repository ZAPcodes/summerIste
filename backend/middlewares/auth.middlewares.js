const jwt = require('jsonwebtoken');

exports.protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    console.log('Token:', token);
    if (!token) return res.status(401).json({ message: 'Not authorized' });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded);
    
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};