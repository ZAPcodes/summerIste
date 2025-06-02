exports.errorHandler = (error, res) => {
  console.error(error);
  res.status(500).json({ message: error.message || 'Server error' });
};