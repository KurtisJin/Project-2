const router = require('express').Router();
const apiRoutes = require('./api');
const resultsRoutes = require('./resultsRoutes');
const homepageRoute = require('./homepageRoutes');
const profileRoute = require('./profileRoutes');

router.use('/api', apiRoutes);
router.use('/profile', profileRoute);
router.use('/', homepageRoute);
router.use('/results', resultsRoutes);

module.exports = router;