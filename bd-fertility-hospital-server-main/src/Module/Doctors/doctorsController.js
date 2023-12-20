const { Doctors } = require("./doctorModel")


const createDoctor = async (req,res)=> {
    try {
        const newDoctors = new Doctors(req.body)
        await newDoctors.save()
        res.status(200).json({
            message : "Doctor is insterted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const getAllDoctors = async (req,res)=> {

    try {
        const result = await Doctors.find()
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
    createDoctor,
    getAllDoctors,

}