const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
const path = require('path')
dotenv.config({ path: './config.env'})
const cors = require('cors')

mongoose.connect('mongodb://127.0.0.1:27017/project-one', {
})
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err);
})
db.once('open', () => {
    console.log('connected to database');
})


const studentRouter = require('./Student/Router/routes');
const tutorRouter = require('./Tutor/Routes/routes');


const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use('/tutor', tutorRouter)
app.use('/student', studentRouter)

app.listen(5000, () => {
    console.log(`connected on port ${process.env.PORT || 5000}`);
})



