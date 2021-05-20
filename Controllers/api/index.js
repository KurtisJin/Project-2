const router = require('express').Router();
const userRoutes = require('./userRoutes');
const festivalRoutes = require('./favoriteRoutes');
// const logout = require('')

router.use('/users', userRoutes);
router.use('/festivals', festivalRoutes);

module.exports = router;