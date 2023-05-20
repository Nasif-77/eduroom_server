const {Attendence} = require('../../Common/Modal/attendenceModal')




const getAttendence = async(req,res)=>{
    try {
        const absentees = await Attendence.find().select({_id:0,__v:0})
        res.status(200).json({absentees})
    } catch (error) {
        res.status(404).json({error})
    }
}





module.exports = {getAttendence}