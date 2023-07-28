const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
     type: String,
     required: true
    },
    date: {
     type: String,
     required: true
    },
    time:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});

const Event = mongoose.model('Event', ReactFormDataSchema);
module.exports = Event;