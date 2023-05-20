const {Events} = require('../../Common/Modal/eventModal')



const getEvents = async (req,res)=>{
    try {
        let response = await Events.find()
        res.status(200).json({response})
    } catch (error) {
        res.status(404).json({error})
    }
}




module.exports={getEvents}