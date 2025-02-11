const mongoose = require('mongoose');

const cleaningSchema = new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Branch',
        required: true
    },
    done: {
        type: Boolean,
        default: false 
    },
    image: {
        type: String, 
        default: null 
    }
});

module.exports = mongoose.model('Cleaning', cleaningSchema);
