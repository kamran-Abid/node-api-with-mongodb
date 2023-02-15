const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        trim:true
    },
    age: {
        type:Number,
        required:true,
        trim:true
    },
    gender: {
        type:String,
        required:true,
        trim:true
    },
    active: {
        type:Boolean,
        required:true,
        trim:true
    }
})

// create a new collection
const User = new mongoose.model('User', UserSchema);
module.exports = User;