const { Announcement } = require('../../Common/Modal/announcementModal')



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


const postAnnouncement = async (req, res, next) => {
    try {
        const date = req.body.date
        const subject = req.body.subject
        const description = req.body.description
        const imageUrl = req.file.path
        const imageName = req.file.originalname

        const announcement = new Announcement({ 
            date:date,
            subject:subject,
            description:description,
            imageUrl:imageUrl,
            imageName:imageName
         })
        const success = await announcement.save();
            res.status(200).json({
                message: "Succesfully added",
            })
    } catch (error) {
        res.status(400).send(error)
    }
}


const updateAnnouncements = async(req,res)=>{
    try {
        const announcement = await Announcement.findByIdAndUpdate(req.body.id,{
            $set : {
                subject:req.body.subject,
                description:req.body.description,
                date:req.body.date
            }
        })
        res.status(200).send(notes)
    } catch (error) {
        res.status(500)
    }
}



const deleteAnnouncements = async (req,res)=>{
    console.log('req.body')
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id)
        res.status(204).send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
}




module.exports = {
    postAnnouncement, getAnnouncement,updateAnnouncements,deleteAnnouncements
}