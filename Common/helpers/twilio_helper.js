// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACb83a50317faaaf0abbc802488b072427";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.YOUR_VERIFY_SID;
const client = require("twilio")(accountSid, authToken);


const sentOtp = (number)=>{
client.verify.v2
  .services(verifySid)
  .verifications.create({ to: `+91${number}`, channel: "sms" })
  .then((verification) => console.log(verification))

}
    const confirmOtp =async (otpCode,number) => {

    let response = await  client.verify.v2
        .services(verifySid)
        .verificationChecks.create({ to: `+91${number}`, code: otpCode })
        return response.status
    };
   

    module.exports ={sentOtp,confirmOtp}