const Employee = require('../models/employee');
const Cleaning = require('../models/cleaning');
const bcrypt = require('bcrypt');

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



const updateCleaningWithImage = async (req, res) => {
    try {
        const { cleaningId } = req.params;
    
        if (!req.file) {
          return res.status(400).json({ message: "No file uploaded" });
        }
    
        const base64String = req.file.buffer.toString("base64");
        const mimeType = req.file.mimetype; 
        const base64Data = `data:${mimeType};base64,${base64String}`;
        const updatedCleaning = await Cleaning.findByIdAndUpdate(
          cleaningId,
          {
            image: base64Data,
            done: true,
          },
          { new: true }
        );
    
        if (!updatedCleaning) {
          return res.status(404).json({ message: "Cleaning not found" });
        }
    
        return res.status(200).json(updatedCleaning);
      } catch (error) {
        return res.status(500).json({ message: "Error updating cleaning", error });
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
    const { phoneNumber, newPassword , fullName ,city } = req.body;


    const updateData = {};
    if (phoneNumber) updateData.phone = phoneNumber;
    if(fullName) updateData.fullName = fullName;
    if(city) updateData.city = city;
    if (newPassword) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(newPassword, salt);
    }
 
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
