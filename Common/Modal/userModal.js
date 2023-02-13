const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SignupSchema = new Schema({
    fname: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        lowercase: true
    },
    position: {
        type: String,
        required: true,
        lowercase: true
    },
    blocked:{
     type:Boolean,
     required:true   
    }
}, { timestamps: true })



SignupSchema.pre('save',async function(next){
    try{
        const hashedpass = await bcrypt.hash(this.password,10)
        this.password = hashedpass
        console.log(hashedpass.length)
        next()
    }catch(err){
        next(err)
    }

})

SignupSchema.methods.isValidPassword = async function(password){
try {
  return await  bcrypt.compare(password,this.password)
} catch (error) {
    throw error
}
}

const User = mongoose.model('signup', SignupSchema)


module.exports = {User}
