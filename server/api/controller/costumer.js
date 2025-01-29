const Customer = require('../models/costumer');
const Branch = require('../models/branch');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

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


// 4 edit customer details 555
const editCustomerDetails = async (req, res) => {
    const { customerId } = req.params;
    const { fullName, phoneNumber, newPassword } = req.body;

    const updateData = {};
    if (fullName) updateData.fullName = fullName;
    if (phoneNumber) updateData.phone = phoneNumber;
    if (newPassword) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        updateData.password = hashedPassword;
    }

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

//555
const sendContactEmail = async (req, res) => {
    const { fullName, phoneNumber, city, message } = req.body;

    console.log(req.body)
    // הגדרת פרטי השליחה
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "itaybenyair99@gmail.com", // שים את המייל שלך
            pass: "ypxz vuwi kkjs lluu", // השתמש בסיסמה ייעודית (App Passwords)
        },
    });

    const mailOptions = {
        from: "itaybenyair99@gmail.com",
        to: "bokobzadir@gmail.com", // המייל של מנהל האתר
        subject: "פנייה חדשה מהאתר",
        text: `שם מלא: ${fullName}\nטלפון: ${phoneNumber}\nעיר: ${city}\n\nהודעה:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "ההודעה נשלחה בהצלחה!" });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json({ error: "שגיאה בשליחת המייל" });
    }
};



module.exports = {
    getCleaningsByBranch
    , getBranchesByCustomer
    , getCustomerById
    , editCustomerDetails
    , deleteBranchAndCleanings
    , getAllCleaningsForCustomer
    , sendContactEmail
};
