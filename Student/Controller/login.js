const { User } = require('../../Common/Modal/userModal')
const { signAccesToken, signRefreshToken } = require('../../Common/helpers/jwt_helper')


const loginStudent = async (req, res, next) => {
    try {
        if (req.body.email && req.body.password) {

            let user = await User.findOne({ email: req.body.email })

            if (user) { 
                if (!user.blocked) {
                    const result = await user.isValidPassword(req.body.password)
                    if(result){

                    
                    if (user.position === 'student') {
                        let token = await signAccesToken(user)
                        let refreshToken = await signRefreshToken(user)
                        res.status(201).json({ token, refreshToken })
                    } else {
                        res.json({
                            message: 'tutor'
                        })
                    }
                }else{
                    res.status(400).json({ message: 'password' })

                }
                } else {
                    res.status(400).json({ message: 'blocked' })
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
            message: err.message
        })
    }
}


module.exports = {
    loginStudent
}