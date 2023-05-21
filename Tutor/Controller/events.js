const { Events } = require('../../Common/Modal/eventModal')

const postEvents = async (req, res) => {
    try {
        const event = req.body.event
        const club = req.body.club
        const description = req.body.description
        const date = req.body.date
        if (event && club && description && date) {
            const response = new Events(req.body)
            const result = await response.save()
            res.status(201).json({ message: "Successfully uploaded" })
        }

    } catch (error) {
        res.status(400)
    }
}

const getEvents = async (req, res) => {
    try {
        let events = await Events.find()
        if (events) res.status(200).json({ events })
        else res.status(404).json({ message: "Not found" })

    } catch (error) {
        res.status(404).json({ error })
    }
}

const updateEvents = async (req, res) => {
    try {
        const event = await Events.findByIdAndUpdate(req.body.id, {
            $set: {
                event: req.body.event,
                club: req.body.club,
                description: req.body.description,
                date: req.body.date
            }
        })
        res.status(200).json({ message: "Successfully updated" })
    } catch (error) {
        res.status(500)
    }
}




const deleteEvents = async (req, res) => {
    console.log('req.body')
    try {
        const event = await Events.findByIdAndDelete(req.params.id)
        res.status(204).json({ message: "Successfully deleted" })
    } catch (error) {
        res.status(500).json({ error })
    }
}



module.exports = { postEvents, getEvents, deleteEvents, updateEvents }