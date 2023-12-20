const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title : {
        type : String,
        require : true 

    },
    photo : {
        type : String,
        require : true 
    },
    description : {
        type : String,
    }
})

const Blogs = mongoose.model('Blog', blogSchema)

module.exports = {
    Blogs
}