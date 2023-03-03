const { User, Thought } = require("../models")

module.exports = {
    findUser: async function (req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    
    findOneU: async function (req, res) {
        try {
            const oneUser = await User.findById(req.params.id)
            res.json(oneUser)
        } catch(err) {
            res.status(500).json(err)
        }
    },
   
    newUser: async function (req, res) {
        try {
            const newUser = await User.create(req.body)
            res.json(newUser)
        } catch(err) {
            res.status(500).json(err)
        }
    },
   
    updateUser: async function (req, res) {
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true} )
            res.json(updateUser)
        } catch(err) {
            res.status(500).json(err)
        }
    },
    deleteUser: async function (req, res) {
        try {
            const user = await User.findById(req.params.id)
            await Thought.deleteMany({_id: { $in: user.thoughts}})
            const deletedUser = await User.findByIdAndDelete(req.params.id)
            res.json(deletedUser)
        } catch(err) {
            res.status(500).json(err)
        }
    },
   
    addFriend: async function (req, res) {
        try {
            const addFriend = await User.findByIdAndUpdate({
                _id: req.params.userId
            },
            {
                $push: { friends: req.params.friendId}
            },
            { new: true })
            res.json(addFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
 
    deleteFriend: async function (req, res) {
        try {
            const deleteFriend = await User.findByIdAndUpdate({
                _id: req.params.userId
            },
            {
                $pull: { friends: req.params.friendId}
            },
            { new: true })
            res.json(deleteFriend)
        } catch (err) {
            res.status(500).json(err)
        }
    },
}