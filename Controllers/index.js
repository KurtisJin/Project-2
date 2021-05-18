const router = require('express').Router();
const apiRoutes = require('./api');
const resultsRoutes = require('./resultsRoutes');
const homepageRoute = require('./homepageRoutes')

router.use('/api', apiRoutes);
// router.use('/profile', profileRoutes);
router.use('/', homepageRoute);
// router.use('/results', resultsRoutes);

module.exports = router;