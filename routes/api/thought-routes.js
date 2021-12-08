const router = require('express').Router();

const {
getAllThoughts,
getThoughtById,
createThought,
createReaction,
thoughtUpdated,
deleteThought,
deleteReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(thoughtUpdated)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router
    .route('/:thoughtId/:reactionId')

module.exports = router;