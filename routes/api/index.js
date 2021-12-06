const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentsRoutes = require('./comments-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;