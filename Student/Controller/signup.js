const { User } = require('../../Common/Modal/userModal')
const createError = require('http-errors')
const { sentOtp, confirmOtp } = require('../../Common/helpers/twilio_helper')


const createStudent = async (req, res) => {
  try {
    const doesExist = await User.findOne({ email: req.body.email })
    if (doesExist) {
      res.status(409).json({ message: `${req.body.email} is already in use` })
    } else {
      await sentOtp(req.body.contact)
      res.status(200).json({ message: "otp send" })
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
      res.status(201).status({ message: "student created succesfully" })
    } else {
      res.status(400).json({
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