const router = require('express').Router();
const userRoutes = require('./userRoutes');
const festivalRoutes = require('./favoriteRoutes');

router.use('/user', userRoutes);
router.use('/festivals', festivalRoutes);

module.exports = router;