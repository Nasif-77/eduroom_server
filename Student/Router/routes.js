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
const profileStudent = require('../Controller/profile');
const verifyAcessToken = require('../../middlewares/jwtVerify');



//Login
router.post('/login', loginStudent.loginStudent)


//SignUp
router.post('/signup', signupStudent.createStudent)
router.post('/otp', signupStudent.otpConfirmStudent)


//Attendence
router.get('/home/attendence', verifyAcessToken, attendenceStudent.getAttendence)


//Announcements
router.get('/home/announcements', verifyAcessToken, announcementStudent.getAnnouncement)



//Assignments
router.get('/home/assignments', verifyAcessToken, assignmentStudent.getAssignments)



//Events
router.get('/home/events', verifyAcessToken, eventStudent.getEvents)


//Notes
router.get('/home/notes', verifyAcessToken, notesStudent.getNotes)



//Profile
router.get('/home/profile', verifyAcessToken, profileStudent.getProfile)
router.put('/home/profile/:id', verifyAcessToken, profileStudent.updateProfile)



//Photos
router.get('/home/photos', verifyAcessToken, photosStudent.getPhotos)


module.exports = router 
