const User = require('../models/user.models.js');
const bcrypt = require('bcryptjs');

const updatePassword = async (req, res) => {
    try {
        const { registrationId, newPassword } = req.body;

        if (!registrationId || !newPassword) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const user = await User.findOne({ registrationId });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // const isMatch = await bcrypt.compare(oldPassword, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Old password does not match.' });
        // }

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully.' });

    } catch (error) {
        console.error('Error updating password:', error);
        res.status(500).json({ message: 'Server error. Could not update password.' });
    }
};

module.exports = {
    updatePassword
}; 