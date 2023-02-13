const mongoose = require('mongoose')
const Schema = mongoose.Schema


const notesSchema = new Schema({
    date:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    fileName:{
        type:String,
        required: true
    },
    filePath:{
        type:String,
        required:true
    }
},{timestamps:true})

const Notes = mongoose.model('notes',notesSchema)

module.exports = {Notes}