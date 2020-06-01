const mongoose = require('mongoose');

const AdoptSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    pet: {
        type: String,
        required: true,
    },
    date_end: {
        type: Date,
        required: true,
    },
    no: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('AdoptSchema', AdoptSchema);