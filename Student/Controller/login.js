const { User } = require('../../Common/Modal/userModal')
const { signAccesToken, signRefreshToken } = require('../../Common/helpers/jwt_helper')


const loginStudent = async (req, res) => {
    try {
        if (req.body.email && req.body.password) {

            let user = await User.findOne({ email: req.body.email })

            if (user) {
                if (!user.blocked) {
                    const result = await user.isValidPassword(req.body.password)
                    if (result) {


                        if (user.position === 'student') {
                            let token = await signAccesToken(user)
                            res.cookie('token', token, { httpOnly: true })
                            res.status(200).json({ message: "Succefully logged in" })
                        } else {
                            res.json({
                                message: 'not student'
                            })
                        }
                    } else {
                        res.status(400).json({ message: 'invalid password' })

                    }
                } else {
                    res.status(401).json({ message: 'user blocked' })
                }
            } else {
                res.status(400).json({
                    message: "invalid email"
                })
            }
        } else {
            res.status(400).json({
                message: "email or password missing"
            })
        }
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}


module.exports = {
    loginStudent
}