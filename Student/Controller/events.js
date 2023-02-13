const {Events} = require('../../Common/Modal/eventModal')



const getEvents = async (req,res)=>{
    try {
        let response = await Events.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(400).send(error)
    }
}




module.exports={getEvents}