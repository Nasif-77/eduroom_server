const { User } = require('../../Common/Modal/userModal')


const getProfile = async (req, res) => {
    try {
        let id = req.query.id
        const user = await User.findById(id)
        
        if (user) res.status(200).json({ user })
        else res.status(404).json({ message: "Not found" })

    } catch (error) {
        res.status(404).json({ error })
    }
}


const updateProfile = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                fname: req.body.name,
                contact: req.body.contact,
                email: req.body.email
            }
        })
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { getProfile, updateProfile }