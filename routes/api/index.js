const router = require('express').Router();

// routing dependencies
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes')

// appends the user-routes with /user 
router.use('/users', userRoutes);
// appends the thought-routes with /thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;