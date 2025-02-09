const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['Manager', 'Regular'],
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    city: { // הוספת עיר
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cleaningSchedules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cleaning'
    }]
});

module.exports = mongoose.model('Employee', employeeSchema);
