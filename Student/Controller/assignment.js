const { Assignment } = require('../../Common/Modal/assignmentModal')






// const fileSizeFormattor = (bytes, decimal) => {
//     if (bytes === 0) {
//         return '0 Bytes';
//     }
//     const dm = decimal || 2;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const index = Math.floor(Math.log(bytes) / Math.log(1000));
//     return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index]
// }



const getAssignments = async (req, res) => {
    try {
        const files = await Assignment.find()
        res.status(200).json({files})
    } catch (error) {
        res.status(404).json({error})
    }
}





module.exports = { getAssignments}