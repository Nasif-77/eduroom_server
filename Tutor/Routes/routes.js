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
const profileTutor = require('../Controller/profile');
const verifyAcessToken = require('../../middlewares/jwtVerify');



//Login
router.post('/login', loginTutor.loginTutor)


//SignUp
// router.post('/signup', signupTutor.createTutor)
// router.post('/otp', signupTutor.otpConfirmTutor)



//Attendence
router.get('/home/attendence',verifyAcessToken,attendenceTutor.getAttendence)
router.post('/home/attendence',verifyAcessToken,attendenceTutor.postAttendence)



//Announcements
router.get('/home/announcements',verifyAcessToken,  announcementTutor.getAnnouncement)
router.post('/home/announcements',verifyAcessToken,upload.single('file') ,announcementTutor.postAnnouncement)
router.patch('/home/announcements',verifyAcessToken,  announcementTutor.updateAnnouncements)
router.delete('/home/announcements/,verifyAcessToken:id',  announcementTutor.deleteAnnouncements)
router.get('/home/announcements',verifyAcessToken,announcementTutor.getAnnouncement)



//Assignments
router.get('/home/assignments',verifyAcessToken,assignmentTutor.getAssignments)
router.post('/home/assignments',verifyAcessToken,upload.single('file'),assignmentTutor.postAssignment)
router.put('/home/assignments/:id',verifyAcessToken,assignmentTutor.updateAssignments)
router.patch('/home/assignments/:id',verifyAcessToken,upload.single('file'),assignmentTutor.updateFile)
router.delete('/home/assignments/:id',verifyAcessToken,assignmentTutor.deleteAssignments)



//Events
router.get('/home/events',verifyAcessToken,eventTutor.getEvents)
router.post('/home/events',verifyAcessToken,eventTutor.postEvents)
router.patch('/home/events',verifyAcessToken,eventTutor.updateEvents)
router.delete('/home/events/:id',verifyAcessToken,eventTutor.deleteEvents)



//Notes
router.get('/home/notes',verifyAcessToken,notesTutor.getNotes)
router.post('/home/notes',verifyAcessToken,upload.single('file'),notesTutor.postNotes)
router.put('/home/notes/:id',verifyAcessToken,notesTutor.updateNotes)
router.patch('/home/notes/:id',verifyAcessToken,upload.single('file'),notesTutor.updateFile)
router.delete('/home/notes/:id',verifyAcessToken,notesTutor.deleteNotes)




//Profile
router.get('/home/profile',verifyAcessToken,profileTutor.getProfile)
router.put('/home/profile/:id',verifyAcessToken,profileTutor.updateProfile)



//Photos
router.get('/home/photos',verifyAcessToken,photosTutor.getPhotos)
router.post('/home/photos',verifyAcessToken,upload.array('files'),photosTutor.postPhotos)
router.patch('/home/photos/:id',verifyAcessToken,photosTutor.photosPatch)
router.put('/home/photos/:id',verifyAcessToken,upload.array('files'),photosTutor.addPhotos)
router.delete('/home/photos/:id',verifyAcessToken,photosTutor.deleteSubject)




//Students
router.get('/home/students',verifyAcessToken,student.getStudents)
router.put('/home/students/:id',verifyAcessToken,student.updateProfile)
router.patch('/home/students/:id',verifyAcessToken,student.blockStudent)

module.exports = router 
