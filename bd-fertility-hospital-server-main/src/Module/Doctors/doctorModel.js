const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        
    },
    designation: {
        type: String,
        
    },
    location: {
        type: String,
       
    },
    doctorImg: {
        type: String,
        required: true
    },
    DoctorIcon: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    
    socialLinks: {
        type: mongoose.Schema.Types.Mixed,
       
        default: {
            facebook: '',
            youtube: '',
            linkedin: ''
        }
    }
});

const Doctors = mongoose.model('Doctor', doctorSchema);

module.exports = {
    Doctors
};
