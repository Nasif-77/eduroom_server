const mongoose = require('mongoose')
const Schema = mongoose.Schema


const photosSchema = new Schema({
    subject: {
        type: String,
        required: true
    },
    files: [Object]

}, { timestamps: true })

const Photos = mongoose.model('photos', photosSchema)

module.exports = { Photos }