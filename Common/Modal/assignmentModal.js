const mongoose = require('mongoose')
const Schema = mongoose.Schema


const assignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Assignment = mongoose.model('assignment', assignmentSchema)

module.exports = { Assignment }