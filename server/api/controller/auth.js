const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Customer = require('../models/costumer');
const Employee = require('../models/employee');


// login and after the login send token to 12h
const login = async (req, res) => {
    const { phone, password } = req.body;

    try {
        let user;
        let userType;

        user = await Employee.findOne({ phone });
        userType = 'employee';
        

        if (!user) {
            user = await Customer.findOne({ phone });
            userType = 'customer';
        }

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const payload = {
            name: user.name,
            role: user.role || 'customer',
            phone : phone
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '12h'
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

module.exports = { login };
