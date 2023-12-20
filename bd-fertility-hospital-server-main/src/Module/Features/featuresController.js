const { Features } = require("./featuresModel")


const createFeatures = async(req,res)=> {
    try {
        const newFeatures = new Features(req.body)
        await  newFeatures.save()

        res.status(200).json({
            message : "Features inserted successfully",
        })

    } catch (error) {
        res.status(500).json({
            error : "there was a serevr error"
        })
        
    }
}

const getAllFeatures = async (req,res)=> {

    try {
     const result =   await Features.find()
        res.status(200).json({
           result
        })
    } catch (error) {

        res.status(500).json({
            error : "there was a server side error"
        })
        
    }

}


module.exports = {
    createFeatures,
    getAllFeatures
}