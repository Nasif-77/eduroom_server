const { Photos } = require('../../Common/Modal/photosModal')





const getPhotos = async (req, res) => {
    try {
        const files = await Photos.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}





module.exports = { getPhotos}