const mongoose = require('mongoose')

userSchema =  new mongoose.Schema({
    'community': {
        type: String,
        required: true
    },
    'name': {
        type: String,
        required: true
    },
    'number': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User