const router = require('express').Router();
const apiRoutes = require('./api');
const resultsRoutes = require('./resultsRoutes');

router.use('/api', apiRoutes);
// router.use('/profile', profileRoutes);
// router.use('/', homeRoutes);
router.use('/results', resultsRoutes);

module.exports = router;