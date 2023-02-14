const { Announcement } = require('../../Common/Modal/announcementModal')
const createError = require('http-errors')


 
const getAnnouncement = async (req, res, next) => {
    try {
        let announcements = await Announcement.find({}).select({__v:0})
        res.status(200).send(announcements)
    }
    catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}




module.exports = {
    getAnnouncement
}