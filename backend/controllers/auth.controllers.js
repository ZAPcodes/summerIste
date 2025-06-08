const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models.js');
const { errorHandler } = require('../utils/errorHandler');
const validateUser = require('../utils/validateUser');

exports.signup = async (req, res) => {
  try {
    const { registrationId, email, password, enrolledDomains } = req.body;

    // Validate user against JSON files
    const validation = validateUser(registrationId, email);
    if (!validation.isValid) {
      return res.status(400).json({ message: validation.message });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [
        { registrationId },
        { email: email }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user with validated data
    const user = new User({
      name: validation.userData.name,
      email: email,
      password,
      registrationId,
      branch: validation.userData.branch,
      enrolledDomains: enrolledDomains || validation.userData.domains
    });

    await user.save();
    res.status(201).json({ user, message: 'User created successfully' });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.login = async (req, res) => {
  try {
    const { registrationId, password } = req.body;

    // Find user by registrationId only
    const user = await User.findOne({ registrationId });

    if (!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Password mismatched' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'None',
      maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
      path: '/',
    });
    res.json({ 
      user: { 
        id: user._id, 
        name: user.name, 
        email: user.email,
        registrationId: user.registrationId,
        branch: user.branch,
        enrolledDomains: user.enrolledDomains 
      } 
    });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.logout = (req, res) => {
    res.clearCookie('jwt', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'None',
      path: '/'
    });
    res.json({ message: 'Logged out successfully' });
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    // console.log('User:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });

    } catch (error) {   
    errorHandler(error, res);
  }
}
