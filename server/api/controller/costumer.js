const Customer = require('../models/costumer');
const Branch = require('../models/branch');

// 1 get all the cleaning of brunch 
const getCleaningsByBranch = async (req, res) => {
    const { branchId } = req.params;

    const branch = await Branch.findById(branchId).populate('cleaningSchedules');

    res.status(200).json(branch.cleaningSchedules);
};


// 2 fetch all the branch of customer
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


// 3 fetch costumer data 
const getCustomerById = async (req, res) => {
    const { customerId } = req.params;

    const customer = await Customer.findById(customerId).select('-password');
    res.status(200).json(customer);
};


// 4 edit customer details
const editCustomerDetails = async (req, res) => {
    const { customerId } = req.params;
    const { fullName, phone, businessName } = req.body;

    // הכנת אובייקט לעדכון
    const updateData = {};
    if (fullName) updateData.fullName = fullName;
    if (phone) updateData.phone = phone;
    if (businessName) updateData.businessName = businessName;

    const updatedCustomer = await Customer.findByIdAndUpdate(
        customerId,
        updateData,
        { new: true, select: '-password' }
    );

    res.status(200).json(updatedCustomer);
};


// 5 delete branch 
const deleteBranchAndCleanings = async (req, res) => {
    const { customerId, branchId } = req.params;

    // מחיקת כל הנקיונות המשויכים לסניף
    await Cleaning.deleteMany({ branch: branchId });

    // מחיקת הסניף עצמו
    await Branch.findByIdAndDelete(branchId);

    // הסרת הסניף מרשימת הסניפים של הלקוח
    await Customer.findByIdAndUpdate(
        customerId,
        { $pull: { branches: branchId } },
        { new: true }
    );

    res.status(200).json({ message: 'Branch and related cleanings deleted successfully' });
};


// 6 customer get all the cleanings
const getAllCleaningsForCustomer = async (req, res) => {
    const { customerId } = req.params;

    try {
        // שליפת הלקוח כדי לוודא שהוא קיים
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // שליפת כל הסניפים של הלקוח
        const branches = await Branch.find({ customer: customerId }).populate('cleaningSchedules');

        // יצירת רשימה כללית של כל הנקיונות
        const allCleanings = branches.reduce((acc, branch) => {
            return acc.concat(branch.cleaningSchedules);
        }, []);

        res.status(200).json(allCleanings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cleanings for customer', error });
    }
};


module.exports = {
      getCleaningsByBranch
     ,getBranchesByCustomer
     ,getCustomerById 
     ,editCustomerDetails
     ,deleteBranchAndCleanings 
     ,getAllCleaningsForCustomer
     };
