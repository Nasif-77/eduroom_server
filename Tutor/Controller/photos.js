const { Photos } = require('../../Common/Modal/photosModal')



const postPhotos = async (req, res) => {
    try {
        let fileArray = []

        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path
            }
            fileArray.push(file)

        });

        const multilpleFiles = new Photos({
            subject: req.body.subject,
            files: fileArray
        })

        let response = await multilpleFiles.save()
        console.log(response)
        res.status(201).send('file uploaded succesfully')
    } catch (error) {

        res.status(400).send(error.message)

    }
}



const getPhotos = async (req, res) => {
    try {
        const files = await Photos.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}



const photosPatch = async (req, res) => {
    try {
        if (req.body.subject) {
            const subject = await Photos.findByIdAndUpdate(req.params.id, {
                $set: {
                    subject: req.body.subject
                }
            })
            res.status(200).send(subject)

        }
        else if (req.body.fileName && req.body.filePath) {
            const subject = await Photos.findById(req.params.id)
            if (subject) {
                let result = await subject.update({
                    $pull: {
                        files: {
                            fileName: req.body.fileName,
                            filePath: req.body.filePath
                        }
                    }
                })
            }
        }

    } catch (error) {
        res.status(400).send(error)
    }
}


const addPhotos = async (req, res) => {
    try {
        const fileArray = []

        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path
            }

            fileArray.push(file)
        });

        const subject = await Photos.findByIdAndUpdate(req.params.id, {
            $addToSet: {
                files: { $each: fileArray }
            }
        })
        res.status(201)
    } catch (error) {
        res.status(400)
    }
}


const deleteSubject = async (req, res) => {
    try {
        const subject = await Photos.findByIdAndDelete(req.params.id)
        res.status(204).send(subject)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = { postPhotos, getPhotos, photosPatch, addPhotos, deleteSubject }