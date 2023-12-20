const mongoose = require('mongoose');

const featuresShema =  mongoose.Schema({
    img : {
        type : String,
        require :  true
    },
    title : {
        type : String,
        require : true
    },
    description :{
        type :   String,
        require : true,
    }
})

const Features = mongoose.model('Features', featuresShema)

module.exports = {
    Features
}