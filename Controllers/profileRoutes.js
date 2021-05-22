const axios = require('axios');
const { Festival, User } = require('../models');
const withAuth = require('../utils/auth');
const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=${process.env.event_API_key}&id=`
    let eventResults = [];
    const festivalData = await Festival.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    let festivalId = festivalData.map((festival) => festival.get({ plain: true }));

    // let user = festivalId[0].user.name;

    for (let index = 0; index < festivalId.length; index++) {
      const results = await axios.get(url + festivalId[index].ticketmaster_id + '&locale=en-us&countryCode=US&segmentName=music');
        for (let i = 0; i < results.data._embedded.events.length; i++) {
          eventResults.push(results.data._embedded.events[i]);
      }
      await new Promise(resolve => setTimeout(resolve, 205));
    };

  let festivals = eventResults.map((events) => {

    return {
      name: events.name,
      summary: events.description,
      logo: events.images[events.images.length - 1].url,
      status: events.dates.status.code,
      span: events.dates.spanMultipleDays,
      date: events.dates.start.localDate,
      start: events.dates.start.localTime,
      venues: events._embedded.venues[0].name,
      address: events._embedded.venues[0].address.line1,
      city: events._embedded.venues[0].city.name,
      state: events._embedded.venues[0].state.stateCode
    }
  });

  res.render("profile", {
    festivals,
    // user,
    logged_in: req.session.logged_in 
  })
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;