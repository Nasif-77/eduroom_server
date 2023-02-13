const mongoose = require('mongoose')
const Schema = mongoose.Schema


const attendenceSchema = new Schema({
    absentees:{
        type: Object,
        required:true
    }
})


const Attendence = mongoose.model('absentees',attendenceSchema)

module.exports = {Attendence}
