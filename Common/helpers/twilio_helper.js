// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID || "ACb83a50317faaaf0abbc802488b072427";
const authToken = process.env.TWILIO_AUTH_TOKEN || "af82d2796ab2272abc71ac018d8ee9f3";
const verifySid = process.env.YOUR_VERIFY_SID || "VAf98c7926dff9367684dc1c18821b58c5";
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