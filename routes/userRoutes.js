const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.findUser)

router.get('/:id', userController.findOneU)

router.post('/', userController.newUser)

router.put('/update/:id', userController.updateUser)

router.delete('/delete/:id', userController.deleteUser)

router.post('/:userId/friends/:friendId', userController.addFriend)


router.delete('/:userId/friends/:friendId', userController.deleteFriend)

module.exports = router