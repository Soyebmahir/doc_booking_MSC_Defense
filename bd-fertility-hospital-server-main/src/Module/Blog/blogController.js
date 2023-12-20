const { Blogs } = require("./blogModel")

const createBlog = async (req,res)=> {
    try {
        const newBlog = new Blogs(req.body)
        await newBlog.save()
        res.status(200).json({
            message : "Blog inserted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}

const getAllBlogs = async (req,res) => {
    try {
        const result = await Blogs.find()
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

module.exports = {
    createBlog,
    getAllBlogs
}