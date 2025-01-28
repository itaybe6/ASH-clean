const Employee = require('../models/employee');
const Cleaning = require('../models/cleaning');

// 1 fecth cleaning for worker
const getCleaningsByEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;

        // מציאת העובד והשלפת כל עבודות הניקיון שלו
        const employee = await Employee.findById(employeeId).populate('cleaningSchedules');

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        res.status(200).json(employee.cleaningSchedules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cleaning schedules', error });
    }
};



// 3 worker cancel the cleaning
const updateCleaningWithImage = async (req, res) => {
    const { cleaningId } = req.params;
    const { image } = req.body;

    try {
        const updatedCleaning = await Cleaning.findByIdAndUpdate(
            cleaningId,
            {
                image, // שמירת התמונה
                done: true // עדכון סטטוס ל-true
            },
            { new: true } // החזרת הנתונים המעודכנים
        );

        if (!updatedCleaning) {
            return res.status(404).json({ message: 'Cleaning not found' });
        }

        res.status(200).json(updatedCleaning);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cleaning', error });
    }
};



// 4 fetch all the custumer - for the search
const getAllCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json(customers);
};


// 5 fetch employee details 
const getEmployeeById = async (req, res) => {
    const { employeeId } = req.params;
    const employee = await Employee.findById(employeeId).select('-password -cleaningSchedules');
    res.status(200).json(employee);
};


// 6 edit details Employe
const updateEmployeeDetails = async (req, res) => {
    const { employeeId } = req.params;
    const { phone, password , fullName } = req.body;

    // הכנת אובייקט לעדכון
    const updateData = {};
    if (phone) updateData.phone = phone;
    if(fullName) updateData.fullName = fullName;
    if (password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(password, salt);
    }
 
    // המשתנים שיש ב updateData אלו המשתנים שמתעדכנים
    const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        updateData,
        { new: true, select: '-password -cleaningSchedules' }
    );

    res.status(200).json(updatedEmployee);
};


// 7 worker cancel cleaning
const cancelCleaning = async (req, res) => {
    const { cleaningId } = req.params;

    try {
        // מציאת הניקיון ועדכון הסטטוס ל-false ומחיקת התמונה
        const updatedCleaning = await Cleaning.findByIdAndUpdate(
            cleaningId,
            {
                done: false, // סטטוס False
                image: null  // מחיקת התמונה
            },
            { new: true } // החזרת המסמך המעודכן
        );

        if (!updatedCleaning) {
            return res.status(404).json({ message: 'Cleaning not found' });
        }

        res.status(200).json({ message: 'Cleaning canceled successfully', cleaning: updatedCleaning });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling cleaning', error });
    }
};



module.exports = { 
    getCleaningsByEmployee
    ,getAllCustomers
    ,getEmployeeById
    ,updateEmployeeDetails
    ,updateCleaningWithImage
    ,cancelCleaning
};
