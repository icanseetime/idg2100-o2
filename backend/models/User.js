const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Student', 'Teacher'],
        required: true,
    },
    place: {
        type: String,
        enum: ['on-campus', 'home-office'],
        required: true
    },
    availability: {
        type: String,
        enum: ['available', 'busy'],
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)