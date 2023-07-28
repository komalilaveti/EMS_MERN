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
    roll:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});

const Eventregister = mongoose.model('Eventregister', ReactFormDataSchema);
module.exports = Eventregister;