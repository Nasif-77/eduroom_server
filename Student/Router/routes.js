const express = require('express');
const router = express.Router();
const loginStudent = require('../Controller/login');
const signupStudent = require('../Controller/signup');
const attendenceStudent = require('../Controller/attendence');
const announcementStudent = require('../Controller/announcement');
const assignmentStudent = require('../Controller/assignment');
const notesStudent = require('../Controller/notes');
const eventStudent = require('../Controller/events');
const photosStudent = require('../Controller/photos');
const profileStudent = require('../Controller/profile')



//Login
router.post('/login', loginStudent.loginStudent)


//SignUp
router.post('/signup', signupStudent.createStudent)
router.post('/otp', signupStudent.otpConfirmStudent)


//Attendence
router.get('/home/attendence',attendenceStudent.getAttendence)


//Announcements
router.get('/home/announcements',announcementStudent.getAnnouncement)



//Assignments
router.get('/home/assignments',assignmentStudent.getAssignments)



//Events
router.get('/home/events',eventStudent.getEvents)


//Notes
router.get('/home/notes',notesStudent.getNotes)



//Profile
router.get('/home/profile',profileStudent.getProfile)
router.put('/home/profile/:id',profileStudent.updateProfile)



//Photos
router.get('/home/photos',photosStudent.getPhotos)


module.exports = router 
