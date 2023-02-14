const { Assignment } = require('../../Common/Modal/assignmentModal')


const postAssignment = async (req, res) => {
    try {
        const file = new Assignment({
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



const getAssignments = async (req, res) => {
    try {
        const files = await Assignment.find()
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}


const updateAssignments = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                date: req.body.date,
                description: req.body.description,
            }
        })
        res.status(200).send(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}


const updateFile = async(req,res)=>{
    try {
        console.log(req.file)
        const file = await Assignment.findByIdAndUpdate(req.params.id,{
            $set:{
                fileName:req.file.originalname,
                filePath:req.file.path,
                date:req.body.date
            }
        })
    } catch (error) {
        res.status(500).send(error)
        console.log(error.message)
    }
}


const deleteAssignments = async (req, res) => {
    try {
        const assignment = await Assignment.findByIdAndDelete(req.params.id)
        res.status(204).send(assignment)
    } catch (error) {
        res.status(500).send(error)
    }
}





module.exports = { postAssignment, getAssignments, updateAssignments, deleteAssignments,updateFile }