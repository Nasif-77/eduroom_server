const { Announcement } = require('../../Common/Modal/announcementModal')



const getAnnouncement = async (req, res) => {
    try {
        let announcements = await Announcement.find({}).select({ __v: 0 })
        if (announcements) res.status(200).json({ announcements })
        else res.status(404).json({error:"Not found"})
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