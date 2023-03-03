const router = require('express').Router()
const thoughtController = require('../controllers/thoughtController')

router.get('/', thoughtController.findThought)

router.get('/:id', thoughtController.findOneT)

router.post('/', thoughtController.newThought)

router.put('/update/:id', thoughtController.updateThought)

router.delete('/delete/:id', thoughtController.deleteThought)

router.post('/:thoughtId/reactions', thoughtController.newReaction)

router.delete('/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction)

module.exports = router