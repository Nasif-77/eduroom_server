const mongoose = require('mongoose')
const Schema = mongoose.Schema


const EventSchema = new Schema({
    event:{
        type:String,
        required:true
    },
    club:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})


const Events = mongoose.model('events',EventSchema)

module.exports = {Events}
