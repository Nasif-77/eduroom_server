const { User } = require('../../Common/Modal/userModal')
const { signAccesToken, signRefreshToken } = require('../../Common/helpers/jwt_helper')



const loginTutor = async (req, res, next) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if (email && password) {

            let user = await User.findOne({ email: email })
            if (user) {

                const result = await user.isValidPassword(req.body.password)
                if (result) {
                    let token = await signAccesToken(user)
                    let refreshToken = await signRefreshToken(user)
                    res.status(200).json({ token, refreshToken })
                } else {
                    res.status(400).json({
                        message: false
                    })
                }
            } else {
                res.status(400).json({
                    message: false
                })
            }
        } else {
            res.status(400).json({
                message: "email or password missing"
            })
        }
    } catch (err) {
        res.status(400).json({
            message: 'err'
        })
    }
}


module.exports = { loginTutor }