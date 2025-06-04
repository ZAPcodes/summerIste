const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models.js');
const { errorHandler } = require('../utils/errorHandler');

exports.signup = async (req, res) => {
  try {
    const { name, email, password, enrolledDomains, registrationId, branch } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password, enrolledDomains, registrationId, branch });
    const existingUser = await User.find({ registrationId: user.registrationId });
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }
    await user.save();
    res.status(201).json({ user, message: 'User created' });
  } catch (error) {
    errorHandler(error, res);
  }
};

exports.login = async (req, res) => {
  try {
    const { registrationId, password } = req.body;
    const user = await User.findOne({ registrationId });
    if(!user) {
      return res.status(401).json({ message: 'User does not exist' });
    }
    if(!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Password mismatched' });
    }
    // if (!user || !(await bcrypt.compare(password, user.password))) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'none',
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
      sameSite: 'none',
      path: '/'
    });
    res.json({ message: 'Logged out successfully' });
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    console.log('User:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });

    } catch (error) {   
    errorHandler(error, res);
  }
}
