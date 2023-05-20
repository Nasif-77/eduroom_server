const { Photos } = require('../../Common/Modal/photosModal')





const getPhotos = async (req, res) => {
    try {
        const files = await Photos.find()
        res.status(200).json({files})
    } catch (error) {
        res.status(404).json({error})
    }
}





module.exports = { getPhotos}