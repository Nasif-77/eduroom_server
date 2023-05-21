const {Events} = require('../../Common/Modal/eventModal')



const getEvents = async (req,res)=>{
    try {
        let events = await Events.find()
        if(events) res.status(200).json({events})
        else res.status(404).json({error:"Not found"})
        
    } catch (error) {
        res.status(404).json({error})
    }
}




module.exports={getEvents}