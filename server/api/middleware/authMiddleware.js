const Employee = require('../models/employee');

const isManager = async (req, res, next) => {
    try {
        const userId = req.user.id;  // נניח שהמשתמש מאומת ומזהה המשתמש נמצא ב-req.user
        const employee = await Employee.findById(userId);

        if (!employee) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (employee.role !== 'Manager') {
            return res.status(403).json({ message: 'Access denied. Only managers can perform this action' });
        }

        next();  // המשתמש הוא מנהל, המשך לנתיב הבא
    } catch (error) {
        res.status(500).json({ message: 'Authorization error', error });
    }
};

const isAuthenticated = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // המשתמש מאומת ומתווסף ל-request
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { isManager,isAuthenticated };
