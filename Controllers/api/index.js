const router = require('express').Router();
const userRoutes = require('./userRoutes');
const festivalRoutes = require('./festivalRoutes');

router.use('/users', userRoutes);
router.use('/festivals', festivalRoutes);

module.exports = router;