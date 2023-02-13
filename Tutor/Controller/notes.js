const { Notes } = require('../../Common/Modal/notesModal')


const postNotes = async (req, res) => {
    try {
        console.log(req.body)

        const file = new Notes({
            title: req.body.title,
            date: req.body.date,
            description: req.body.description,
            fileName: req.file.originalname,
            filePath: req.file.path,
        })
        let response = await file.save()
        res.status(201).send('file uploaded succesfully')
    } catch (error) {
        res.status(400).send(error.message)
    }
}



// const fileSizeFormattor = (bytes, decimal) => {
//     if (bytes === 0) {
//         return '0 Bytes';
//     }
//     const dm = decimal || 2;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const index = Math.floor(Math.log(bytes) / Math.log(1000));
//     return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
// }



const getNotes = async (req, res) => {
    try {
        const files = await Notes.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(400).send(error.message)
    }
}



const updateNotes = async (req, res) => {
    try {
        const notes = await Notes.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                date: req.body.date,
                description: req.body.description
            }
        })
        res.status(200).send(notes)
    } catch (error) {
        res.status(400).send(error)
        console.log(error.message)
    }
}



const deleteNotes = async (req, res) => {
    console.log('req.body')
    try {
        const notes = await Notes.findByIdAndDelete(req.params.id)
        res.status(204).send(notes)
    } catch (error) {
        res.status(400).send(error)
    }
}


const updateFile = async (req, res) => {
    try {
        const file = await Notes.findByIdAndUpdate(req.params.id, {
            $set: {
                fileName: req.file.originalname,
                filePath: req.file.path,
                date: req.body.date
            }
        })
        res.status(200)
    } catch (error) {
        res.status(400)
    }
}


module.exports = { postNotes, getNotes, updateNotes, deleteNotes, updateFile }