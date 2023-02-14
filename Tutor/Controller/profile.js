const {User} = require('../../Common/Modal/userModal')


const getProfile =async (req,res)=>{
    try {
        let id = req.query.id
        const user = await User.findById(id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error)
    }
}


const updateProfile = async (req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id,{
            $set:{
                fname:req.body.name,
                contact:req.body.contact,
                email:req.body.email
            }
        })
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports= {getProfile,updateProfile}