const { User } = require('../../Common/Modal/userModal')
const createError = require('http-errors')
const { signAccesToken, signRefreshToken } = require('../../Common/helpers/jwt_helper')
const { sentOtp, confirmOtp } = require('../../Common/helpers/twilio_helper')




const createTutor = async (req, res, next) => {
  try {
    const doesExist = await User.findOne({ email: req.body.email })
    if (doesExist) {
      throw createError.Conflict(`${req.body.email} is already in use`)
    } else {
      await sentOtp(req.body.contact)
      res.status(200)
    }
  } catch (err) {
    res.status(400).json({
      message: err.name
    })
  }
}


const otpConfirmTutor = async (req, res) => {
  try {
    let response = await confirmOtp(req.body.otp, req.body.contact)
    console.log('response======', response)
    if (response === 'approved') {
      let tutor = new User(req.body)
      let result = await tutor.save()
      let token = await signAccesToken(result)
      let refreshToken = await signRefreshToken(result)
      res.status(200).send({ token, refreshToken })
    } else {
      res.status(400).json({
        message: 'wrong otp'
      })
    }
  } catch (error) {
    res.status(400).send(error)
  }

}



// 


module.exports = { createTutor, otpConfirmTutor }