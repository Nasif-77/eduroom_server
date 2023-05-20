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
            res.status(201).send(result)
        }

    } catch (error) {
        res.status(400)
    }
}

const getEvents = async (req, res) => {
    try {
        let response = await Events.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(404).send(error)
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
        res.status(200).send(assignment)
    } catch (error) {
        res.status(500)
    }
}




const deleteEvents = async (req, res) => {
    console.log('req.body')
    try {
        const event = await Events.findByIdAndDelete(req.params.id)
        res.status(204).send(notes)
    } catch (error) {
        res.status(500).send(error)
    }
}



module.exports = { postEvents, getEvents, deleteEvents, updateEvents }