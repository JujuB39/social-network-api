const { Thought, User } = require('../models')

module.exports = {
    findThought: async function (req, res) {
        try {
            const result = await Thought.find()
            res.json(result)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    findOneT: async function (req, res) {
        try {
            const oneThought = await Thought.findById({_id: req.params.id})
            res.json(oneThought)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    newThought: async function (req, res) {
        try {
            const newThought = await Thought.create(req.body)
            await User.findOneAndUpdate(
                { username: req.body.username },
                { $push: { thoughts: result._id } }
            )
            res.json(newThought)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    updateThought: async function (req, res) {
        try {
            const updateThought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.json(updateThought)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    deleteThought: async function (req, res) {
        try {
            const deleteThought = await Thought.findByIdAndDelete(req.params.id)
            res.json(deleteThought)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    newReaction: async function (req, res) {
        try {
            const newReaction = await Thought.findByIdAndUpdate({
                _id: req.params.thoughtId
            },
            {
                $push: {reactions: req.body}
            },
            { new: true })
            res.json(newReaction)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    deleteReaction: async function (req, res) {
        try {
            const deleteReaction = await Thought.findByIdAndUpdate({
                _id: req.params.thoughtId
            },
            {
                $pull: {reactions: {
                    reactionId: req.params.reactionId
                }}
            },
            { new: true })
            res.json(deleteReaction)
        } catch(err) {
            res.status(500).json(err)
        }
    },
}