const router = require('express').Router();

// declare all routing functions
const {
getAllThoughts,
getThoughtById,
createThought,
createReaction,
thoughtUpdated,
deleteThought,
deleteReaction
} = require('../../controllers/thought-controller')

// get all/ create thoughts route
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// get thoughts by id/ update/ delete thoughts
router
    .route('/:id')
    .get(getThoughtById)
    .put(thoughtUpdated)
    .delete(deleteThought)

// create reactions route to thoughtId
router
    .route('/:thoughtId/reactions')
    .post(createReaction)

// delete reactions route (from thoughtId)
router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction)

module.exports = router;