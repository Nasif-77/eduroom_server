const { Announcement } = require('../../Common/Modal/announcementModal')



const getAnnouncement = async (req, res, next) => {
    try {
        let announcements = await Announcement.find({}).select({ __v: 0 })

        if (announcements) res.status(200).json({announcements})
        else res.status(404).json({ message: "Not found" })

    }
    catch (err) {
        res.status(404).json({
            message: err.message
        })
    }
}


const postAnnouncement = async (req, res, next) => {
    try {
        const date = req.body.date
        const subject = req.body.subject
        const description = req.body.description
        const imageUrl = req.file.path
        const imageName = req.file.originalname

        const announcement = new Announcement({
            date: date,
            subject: subject,
            description: description,
            imageUrl: imageUrl,
            imageName: imageName
        })
        const success = await announcement.save();
        if (success) {
            res.status(200).json({
                message: "Successfully added",
            })
        } else {
            res.status(400).json({ error: "Bad request" })
        }

    } catch (error) {
        res.status(400).json({ error })
    }
}


const updateAnnouncements = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndUpdate(req.body.id, {
            $set: {
                subject: req.body.subject,
                description: req.body.description,
                date: req.body.date
            }
        })
        if (announcement) res.status(200).json({ message: "Successfully updated" })
        else res.status(400).json({ error: "Bad request" })

    } catch (error) {
        res.status(500).json({ error })
    }
}



const deleteAnnouncements = async (req, res) => {
    console.log('req.body')
    try {
        await Announcement.findByIdAndDelete(req.params.id)
        res.status(204).json({ notes })
    } catch (error) {
        res.status(500).json({ error })
    }
}




module.exports = {
    postAnnouncement, getAnnouncement, updateAnnouncements, deleteAnnouncements
}