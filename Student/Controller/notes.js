const { Notes } = require('../../Common/Modal/notesModal')



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
        const notes = await Notes.find()

        if (notes) res.status(200).json({ notes })
        else res.status(404).json({ error: "Not found" })

    } catch (error) {
        res.status(404).json({ error })
    }
}





module.exports = { getNotes }