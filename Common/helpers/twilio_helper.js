// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID  ;
const authToken = process.env.TWILIO_AUTH_TOKEN  ;
const verifySid = process.env.YOUR_VERIFY_SID ;
const client = require("twilio")(accountSid, authToken);


const sentOtp = (number) => {
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: `+91${number}`, channel: "sms" })
    .then((verification) => console.log(verification))

}

const number = "9809792075"
const otpCode = 467754
const confirmOtp = async (otpCode, number) => {
  client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: `+91${number}`, code: otpCode }).then(response => response.status).catch(err => { return })
  // return response.status
};

// sentOtp(number)
const h = confirmOtp(otpCode, number)
console.log(h)

module.exports = { sentOtp, confirmOtp }
