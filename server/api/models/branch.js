const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    cleaningSchedules: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cleaning'
    }],
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Branch', branchSchema);
