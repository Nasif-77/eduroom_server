const { Photos } = require('../../Common/Modal/photosModal')





const getPhotos = async (req, res) => {
    try {
        const photos = await Photos.find()
        if (photos) res.status(200).json({ photos })
        else res.status(404).json({error:"Not found"})
    } catch (error) {
        res.status(404).json({ error })
    }
}





module.exports = { getPhotos }