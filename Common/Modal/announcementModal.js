const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AnouncementSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        required: true
    }
},{timestamps:true})

const Announcement = mongoose.model('announcement', AnouncementSchema)

module.exports = { Announcement }
