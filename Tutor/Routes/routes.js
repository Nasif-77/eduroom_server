const express = require('express');
const router = express.Router();
const {upload} = require('../../Common/helpers/file_helper')
const loginTutor = require('../Controller/login');
// const signupTutor = require('../Controller/signup');
const student = require('../Controller/students');
const attendenceTutor = require('../Controller/attendence');
const announcementTutor = require('../Controller/announcement');
const assignmentTutor = require('../Controller/assignment');
const notesTutor = require('../Controller/notes');
const eventTutor = require('../Controller/events');
const photosTutor = require('../Controller/photos');
const profileTutor = require('../Controller/profile')



//Login
router.post('/login', loginTutor.loginTutor)


//SignUp
// router.post('/signup', signupTutor.createTutor)
// router.post('/otp', signupTutor.otpConfirmTutor)



//Attendence
router.get('/home/attendence',attendenceTutor.getAttendence)
router.post('/home/attendence',attendenceTutor.postAttendence)



//Announcements
router.get('/home/announcements',  announcementTutor.getAnnouncement)
router.post('/home/announcements',upload.single('file') ,announcementTutor.postAnnouncement)
router.patch('/home/announcements',  announcementTutor.updateAnnouncements)
router.delete('/home/announcements/:id',  announcementTutor.deleteAnnouncements)
router.get('/home/announcements',announcementTutor.getAnnouncement)



//Assignments
router.get('/home/assignments',assignmentTutor.getAssignments)
router.post('/home/assignments',upload.single('file'),assignmentTutor.postAssignment)
router.put('/home/assignments/:id',assignmentTutor.updateAssignments)
router.patch('/home/assignments/:id',upload.single('file'),assignmentTutor.updateFile)
router.delete('/home/assignments/:id',assignmentTutor.deleteAssignments)



//Events
router.get('/home/events',eventTutor.getEvents)
router.post('/home/events',eventTutor.postEvents)
router.patch('/home/events',eventTutor.updateEvents)
router.delete('/home/events/:id',eventTutor.deleteEvents)



//Notes
router.get('/home/notes',notesTutor.getNotes)
router.post('/home/notes',upload.single('file'),notesTutor.postNotes)
router.put('/home/notes/:id',notesTutor.updateNotes)
router.patch('/home/notes/:id',upload.single('file'),notesTutor.updateFile)
router.delete('/home/notes/:id',notesTutor.deleteNotes)




//Profile
router.get('/home/profile',profileTutor.getProfile)
router.put('/home/profile/:id',profileTutor.updateProfile)



//Photos
router.get('/home/photos',photosTutor.getPhotos)
router.post('/home/photos',upload.array('files'),photosTutor.postPhotos)
router.patch('/home/photos/:id',photosTutor.photosPatch)
router.put('/home/photos/:id',upload.array('files'),photosTutor.addPhotos)
router.delete('/home/photos/:id',photosTutor.deleteSubject)




//Students
router.get('/home/students',student.getStudents)
router.put('/home/students/:id',student.updateProfile)
router.patch('/home/students/:id',student.blockStudent)

module.exports = router 
