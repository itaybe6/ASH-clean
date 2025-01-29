const Employee = require('../models/employee');

const isManager = async (req, res, next) => {
    try {
        // קבלת ה-Token מה-Header
        const token = req.header("Authorization");
    
        if (!token) {
          return res.status(401).json({ message: "גישה נדחתה - אין טוקן" });
        }
        console.log(process.env.JWT_SECRET)

        const decoded = jwt.verify(token.replace("Bearer ", ""),process.env.JWT_SECRET); 
        
        console.log(process.env.JWT_SECRET)

        // חיפוש המשתמש במסד הנתונים
        const employee = await Employee.findById(decoded.id);
    
        if (!employee) {
          return res.status(404).json({ message: "משתמש לא נמצא" });
        }

        // בדיקה האם התפקיד הוא "Manager"
        if (employee.role !== "Manager") {
          return res.status(403).json({ message: "גישה נדחתה. רק מנהלים יכולים לבצע פעולה זו" });
        }
    
        req.user = employee;
    
        next(); // ממשיכים לפונקציה שמשנה סיסמה
      } catch (error) {
        res.status(401).json({ message: "טוקן לא תקין", error });
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
