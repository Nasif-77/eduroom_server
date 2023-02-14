const { User } = require('../../Common/Modal/userModal')
const createError = require('http-errors')
const { signAccesToken, signRefreshToken } = require('../../Common/helpers/jwt_helper')
const { sentOtp, confirmOtp } = require('../../Common/helpers/twilio_helper')


const createStudent = async (req, res, next) => {
  try {
    const doesExist = await User.findOne({ email: req.body.email })
    if (doesExist) {
      throw createError.Conflict(`${req.body.email} is already in use`)
    } else {
      await sentOtp(req.body.contact)
      res.status(202)
    }
  } catch (error) {
    res.status(500).json({
      message: error
    })
  }
}


const otpConfirmStudent = async (req, res) => {
  try {
    let response = await confirmOtp(req.body.otp, req.body.contact)
    if (response === 'approved') {
      let student = new User(req.body)
      let result = await student.save()
      let token = await signAccesToken(result)
      let refreshToken = await signRefreshToken(result)
      res.send({ token, refreshToken })
    } else {
      res.status(401).json({
        message: 'wrong otp'
      })
    }
  } catch (error) {
    res.status(400)
  }

}




module.exports = {
  createStudent, otpConfirmStudent
}