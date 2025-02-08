const Branch = require('../models/branch');
const Employee = require('../models/employee');
const Customer = require('../models/costumer');
const Cleaning = require('../models/cleaning')

const bcrypt = require('bcrypt');


//2 admin add a new worker
const addRegularEmployee = async (req, res) => {
    try {
        console.log(req.body)
        const { phone, password, fullName, city } = req.body; // הוספת קליטת העיר מהבקשה

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newEmployee = new Employee({
            phone,
            password: hashedPassword,
            role: 'Regular',
            fullName,
            city // הוספת העיר לאובייקט העובד
        });

        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'Error adding employee', error });
    }
};


//3 admin add a new customer 
const addCustomer = async (req, res) => {
    try {
        const {
            fullName,
            phoneNumber,
            password,
            businessName,
            address,
            city,
            branches, // מערך הסניפים שמתקבל מהלקוח (כולל מספרי טלפון)
        } = req.body;
        console.log(password)

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newCustomer = new Customer({
            fullName,
            phone: phoneNumber,
            password: hashedPassword,
            businessName,
            address,
            city,
            branches: [],
        });

        const savedCustomer = await newCustomer.save();
        console.log("✅ לקוח נשמר בהצלחה:", savedCustomer);

        for (const branch of branches) {
            try {
                const newBranch = new Branch({
                    customer: savedCustomer._id,
                    address: branch.branchAddress,
                    phone: branch.phoneNumber,
                    name: branch.branchName,
                    cleaningSchedules: [],
                });

                const savedBranch = await newBranch.save();

                // עדכון רשימת הסניפים של הלקוח
                await Customer.findByIdAndUpdate(
                    savedCustomer._id,
                    { $push: { branches: savedBranch._id } },
                    { new: true }
                );

                console.log(`✅ סניף "${savedBranch.name}" נוסף בהצלחה`);
            } catch (error) {
                console.error("❌ שגיאה בשמירת סניף:", error);
            }
        }

        res.status(201).json({ message: "✅ לקוח וסניפים נשמרו בהצלחה", customer: savedCustomer });
    } catch (error) {
        console.error("❌ שגיאה כללית בהוספת לקוח:", error);
        res.status(500).json({ message: "Error adding customer", error });
    }
};


//4 fetch all the custumer
const getAllCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json(customers);
};


//5 fetch all the branch of customer
const getBranchesByCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;

        const customer = await Customer.findById(customerId).populate('branches');

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        res.status(200).json(customer.branches);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching branches', error });
    }
};


//6 get all the cleaning of brunch 
const getCleaningsByBranch = async (req, res) => {
    const { branchId } = req.params;
    const branch = await Branch.findById(branchId).populate('cleaningSchedules');
    res.status(200).json(branch.cleaningSchedules);
};

//6 get all the cleaning of employee 
const getCleaningsByEmployee = async (req, res) => {
    try {
        const { workerId } = req.params;

        // שליפת העובד עם רשימת הנקיונות, כולל פרטי הסניף (שם + כתובת)
        const employee = await Employee.findById(workerId)
            .populate({
                path: "cleaningSchedules",
                populate: {
                    path: "branch",
                    select: "name address", // שליפת שם הסניף והכתובת בלבד
                },
            });

        if (!employee) {
            return res.status(404).json({ message: "העובד לא נמצא" });
        }

        res.status(200).json(employee.cleaningSchedules);
    } catch (error) {
        console.error("שגיאה בשליפת ניקיונות העובד:", error);
        res.status(500).json({ message: "שגיאה בשליפת נתונים", error });
    }
};



// add cleaning for the worker schedule
const addCleaningForEmployee = async (req, res) => {
    try {
        const { workerId } = req.params;
        const { branch, dateTime } = req.body;

        // יצירת ניקיון חדש
        const newCleaning = new Cleaning({
            dateTime,
            employee: workerId,
            branch
        });

        const savedCleaning = await newCleaning.save();

        // הוספת הניקיון לרשימת הנקיונות של העובד
        await Employee.findByIdAndUpdate(
            workerId,
            { $push: { cleaningSchedules: savedCleaning._id } },
            { new: true }
        );

        // הוספת הניקיון לרשימת הנקיונות של הסניף
        await Branch.findByIdAndUpdate(
            branch,
            { $push: { cleaningSchedules: savedCleaning._id } },
            { new: true }
        );

        res.status(201).json(savedCleaning);
    } catch (error) {
        res.status(500).json({ message: 'Error adding cleaning schedule', error });
    }
};


//edit personal details
const updateManagerDetails = async (req, res) => {
    const { fullName, phoneNumber, city, newPassword } = req.body;
    const managerId = req.headers.authorization?.split(" ")[1];

    if (!managerId) {
        return res.status(401).json({ message: "חסר מזהה מנהל בבקשה" });
    }

    try {
        const manager = await Employee.findById(managerId);
        if (!manager) {
            return res.status(404).json({ message: "מנהל לא נמצא" });
        }

        // עדכון הנתונים החדשים
        if (fullName) manager.fullName = fullName;
        if (phoneNumber) manager.phone = phoneNumber;
        if (city) manager.city = city;
        if (newPassword) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt);
            manager.password = hashedPassword;
        }

        await manager.save();

        res.status(200).json({ message: "פרטי המנהל עודכנו בהצלחה!" });
    } catch (error) {
        console.error("Error updating manager:", error);
        res.status(500).json({ message: "שגיאה בעדכון פרטי המנהל" });
    }
};

//  get all Workers 
const getAllWorkers = async (req, res) => {
    try {
        const workers = await Employee.find({ role: "Regular" });
        res.status(200).json(workers);
    } catch (error) {
        res.status(500).json({ message: "Error fetching regular workers", error });
    }
};

//  get all cleanings 
const getAllCleanings = async (req, res) => {
    try {
        const cleanings = await Cleaning.find()
            .populate({
                path: 'employee',
                select: 'fullName'
            })
            .populate({
                path: 'branch',
                select: 'name address'
            });
        res.status(200).json(cleanings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching regular cleanings", error });
    }
};

// manager edit user profile
const managerEditUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, fullName, phoneNumber, city } = req.body;

        let user;
        if (type === 'לקוח') {
            user = await Customer.findById(id);
        } else if (type === 'עובד') {
            user = await Employee.findById(id);
        } else {
            return res.status(400).json({ message: 'סוג משתמש לא תקין' });
        }

        if (!user) {
            return res.status(404).json({ message: 'משתמש לא נמצא' });
        }

        if (fullName){
            if(type === 'לקוח'){
                user.businessName = fullName;
            }
            else if (type === 'עובד'){
                user.fullName = fullName;
            }
        } 
        if (phoneNumber) user.phone = phoneNumber;
        if (city) user.city = city;

        await user.save();
        res.status(200).json({ message: 'פרטי המשתמש עודכנו בהצלחה', user });

    } catch (error) {
        res.status(500).json({ message: 'שגיאה בעדכון המשתמש', error });
    }
};

//manager add branch
const addBranchToCustomer = async (req, res) => {
    try {
        const { customerId } = req.params;
        const { name, phone, address } = req.body;

        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        const newBranch = new Branch({
            customer: customerId,
            name,
            phone,
            address
        });

        await newBranch.save();

        customer.branches.push(newBranch._id);
        await customer.save();

        res.status(201).json({ message: 'Branch added successfully', branch: newBranch });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// manager edit branch
const updateBranch = async (req, res) => {
    try {
        const { branchId } = req.params;
        const { name, phone, address } = req.body;

        // חיפוש ועדכון הסניף במסד הנתונים
        const updatedBranch = await Branch.findByIdAndUpdate(
            branchId,
            { name, phone, address },
            { new: true } // מחזיר את הערך המעודכן
        );

        if (!updatedBranch) {
            return res.status(404).json({ message: 'Branch not found' });
        }

        res.status(200).json({ message: 'Branch updated successfully', branch: updatedBranch });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getImgCleaning = async (req, res) => {
    try {
        const { cleaningId } = req.params;
        const cleaning = await Cleaning.findById(cleaningId);

        if (!cleaning) {
            return res.status(404).json({ message: 'Cleaning not found' });
        }
        // מחזירים את השדה image כ-JSON
        return res.json({ image: cleaning.image });
    } catch (error) {
        return res.status(500).json({ message: 'Error retrieving image', error });
    }
}

 
const deleteBranchById = async (req, res) => {
    try {
        const { branchId } = req.params;
        const deletedBranch = await Branch.findByIdAndDelete(branchId);
        if (!deletedBranch) {
            return res.status(404).json({ message: 'הסניף לא נמצא' });
        }
        const deletedCleanings = await Cleaning.deleteMany({ branch: branchId });
        await Customer.updateOne(
            { branches: branchId }, 
            { $pull: { branches: branchId } } 
        );
        res.status(200).json({ message: 'הסניף וכל הניקיונות המשויכים אליו נמחקו בהצלחה' });
    } catch (error) {
        console.error('❌ שגיאה במחיקת סניף וניקיונות:', error);
        res.status(500).json({ error: 'שגיאה במחיקת סניף וניקיונות' });
    }
};


const deleteCleaning = async (req, res) => {
    try {
        const { cleaningId } = req.params;
        const deletedCleaning = await Cleaning.findByIdAndDelete(cleaningId);
        if (!deletedCleaning) {
            return res.status(404).json({ message: 'הניקיון לא נמצא' });
        }
        await Employee.updateOne(
            { cleaningSchedules: cleaningId }, 
            { $pull: { cleaningSchedules: cleaningId } } 
        );
        await Branch.updateOne(
            { cleaningSchedules: cleaningId }, 
            { $pull: { cleaningSchedules: cleaningId } } 
        );
        res.json({ message: 'ניקיון נמחק בהצלחה' });
    } catch (error) {
        console.error('שגיאה במחיקת ניקיון:', error);
        res.status(500).json({ message: 'שגיאה במחיקת ניקיון' });
    }
};







module.exports = {
    addRegularEmployee
    , getAllCustomers, addCustomer,
    getBranchesByCustomer, getCleaningsByBranch,
    updateManagerDetails, addCleaningForEmployee,
    getAllWorkers, managerEditUser,
    addBranchToCustomer, updateBranch,
    getCleaningsByEmployee, getAllCleanings
    , getImgCleaning, deleteBranchById,
    deleteCleaning 
};
