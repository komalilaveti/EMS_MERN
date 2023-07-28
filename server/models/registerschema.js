const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    email: {
     type: String,
     required: true
    },
    password:{
        type:String,
        required:true
    }
});

const Register = mongoose.model('Register', ReactFormDataSchema);
module.exports = Register;