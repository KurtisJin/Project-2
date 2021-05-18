const router = require('express').Router();
const { Festival, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log('hello world!');
  try {
    // Get all festivals and JOIN with user data
    const festivalData = await Festival.findAll({
      // include: [User,
      //   {
      //     model: Festival,
      //     attributes:['id', 'name', 'description', 'date_created', 'need_funding', 'lineup'],
      //     include: {
      //       attributes: ['name'],
      //     }
          
      //   },
      // ],
    });
    // console.log(festivalData);
    // Serialize data so the template can read it
    const festivals = festivalData.map((festivals) => festivals.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      festivals, 
      logged_in: req.session.logged_in,
      user_name: req.session.username,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/festivals/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const festivalData = await Festival.findByPk(req.params.id, {
      include: [User,
        {

          model: Festival,
          attributes:['id', 'name', 'description', 'date_created', 'need_funding', 'lineup'],
        },
      ],
    });

    const festivals = festivalData.get({ plain: true });
    
    res.render('results', {
      ...festivals,
      logged_in: req.session.logged_in,
      user_name: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: festivals }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
