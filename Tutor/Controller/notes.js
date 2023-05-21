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
        await file.save()
        res.status(201).json({ message: 'file uploaded successfully' })
    } catch (error) {
        res.status(400).json({ error })
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
        if (files) res.status(200).json({ files })
        else res.status(404).json({ error: "Not found" })

    } catch (error) {
        res.status(404).json({ error })
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
        res.status(200).json({notes})
    } catch (error) {
        res.status(500).json({error})
    }
}



const deleteNotes = async (req, res) => {
    console.log('req.body')
    try {
        const notes = await Notes.findByIdAndDelete(req.params.id)
        res.status(204).json({message:"Successfully deleted"})
    } catch (error) {
        res.status(500).json({error})
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
        res.status(200).json({message:"Successfully updated"})
    } catch (error) {
        res.status(500)
    }
}


module.exports = { postNotes, getNotes, updateNotes, deleteNotes, updateFile }