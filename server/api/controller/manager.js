const Branch = require('../models/branch');
const Employee = require('../models/employee');
const bcrypt = require('bcrypt');

// 1 admin add new bracnh + add the branch to customer branches list
const addBranch = async (req, res) => {
    try {
        const { customer, address } = req.body;

        // יצירת סניף חדש
        const newBranch = new Branch({
            customer,
            address
        });

        const savedBranch = await newBranch.save();

        // הוספת הסניף לרשימת הסניפים של הלקוח
        await Customer.findByIdAndUpdate(
            customer,
            { $push: { branches: savedBranch._id } },
            { new: true }
        );

        res.status(201).json(savedBranch);
    } catch (error) {
        res.status(500).json({ message: 'Error adding branch', error });
    }
};

//2 admin add a new worker
const addRegularEmployee = async (req, res) => {
    try {
        console.log(req.body)
        const { phone, password, fullName, city } = req.body; // הוספת קליטת העיר מהבקשה

        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt); 

        console.log(city)
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
        const { fullName, phone, password, businessName } = req.body;

        // הצפנת הסיסמה
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newCustomer = new Customer({
            fullName,
            phone,
            password: hashedPassword,
            businessName
        });

        const savedCustomer = await newCustomer.save();
        res.status(201).json(savedCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error adding customer', error });
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


// add cleaning for the worker schedule
const addCleaningForEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const { branch, dateTime } = req.body;

        // יצירת ניקיון חדש
        const newCleaning = new Cleaning({
            dateTime,
            employee: employeeId,
            branch
        });

        const savedCleaning = await newCleaning.save();

        // הוספת הניקיון לרשימת הנקיונות של העובד
        await Employee.findByIdAndUpdate(
            employeeId,
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



module.exports = { addBranch,addRegularEmployee,getAllCustomers,addCustomer,getBranchesByCustomer ,getCleaningsByBranch,addCleaningForEmployee};
