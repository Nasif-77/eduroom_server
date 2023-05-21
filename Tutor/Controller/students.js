const { User } = require('../../Common/Modal/userModal')


const getStudents = async (req, res, next) => {
    try {
        const students = await User.find({ position: 'student' }).select({ __v: 0, password: 0 }).sort({ fname: 1 })
        if(students) res.status(200).json({students})
        else res.status(404).json({error:"Not found"})
    } catch (error) {
        res.status(404).json({
            error
        })
    }

}

const updateProfile = async (req, res, next) => {
    try {
        console.log(req.body)
        const student = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                fname: req.body.name,
                contact: req.body.contact,
                email: req.body.email
            }
        })

        res.status(200).send(student)
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}


const blockStudent = async (req, res) => {
    try {
        const student = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                blocked: req.body.blocked
            }
        })
        res.status(200).send(student)

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = { getStudents, updateProfile,blockStudent }