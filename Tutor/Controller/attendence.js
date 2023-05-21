const {Attendence} = require('../../Common/Modal/attendenceModal')




const getAttendence = async(req,res)=>{
    try {
        const absentees = await Attendence.find().select({_id:0,__v:0})
        if(absentees) res.status(200).json({absentees})
        else res.status(404).json({error:"Not found"})
    } catch (error) {
        res.status(404).json(error)
    }
}

const postAttendence = async(req,res)=>{
    try {
        const absentees = req.body.absentees
        const result = new Attendence({absentees})
        await result.save()
        res.status(201).json({message:"Successfully created"})

    } catch (error) {
        res.status(400).json(error)
    }
}




module.exports = {postAttendence,getAttendence}