const router = require('express').Router();
const { Festival } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFestival = await Festival.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFestival);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const festivalData = await Festival.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!festivalData) {
      res.status(404).json({ message: 'No festival found with this id!' });
      return;
    }

    res.status(200).json(festivalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
