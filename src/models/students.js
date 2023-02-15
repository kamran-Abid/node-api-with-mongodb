const mongoose = require('mongoose');
const validator = require('validator');

const StudentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minLenght:3,
        trim:true
    },
    email: {
        type:String,
        required:true,
        // unique: [true, "Email id already exist."],
        validator(value){
            if(!validator.isEmail(value)){
                console.log("Invalid email");
                throw new Error("Invalid email");
            }
        },
        trim:true
    },
    phoneNo: {
        type:Number,
        required:true,
        unique:true,
        minLength:10,
        maxlength:13,
        trim:true
    },
    address:{
        type:String,
        require:true,
        trim:true
    }
})

// create a new collection
const Student = new mongoose.model('Student', StudentSchema);
module.exports = Student;
