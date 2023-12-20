const mongoose = require('mongoose');

const serviceShcema = mongoose.Schema({
    img : {
        type : String,
        require : true

    }
})

// here is Service Gallery
const ServiceGallery = mongoose.model('ServiceGallery', serviceShcema)


const ourDoctorShcema = mongoose.Schema({
    img : {
        type : String,
        require : true
    },
    
})

// here is Doctor Gallery

const DoctorGallery = mongoose.model('DoctorGallery', ourDoctorShcema)


const ourfacilitiesShcema = mongoose.Schema({
    img : {
        type : String,
        require : true

    }
})

// here is Facilities Gallery

const FacilitiesGallery = mongoose.model('FacilitiesGallery', ourfacilitiesShcema)

module.exports = {
    ServiceGallery,
    DoctorGallery,
    FacilitiesGallery
}