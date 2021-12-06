const router = require('express');
const apiRoutes = require('./api');

// adds api prefix to all api routes
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;