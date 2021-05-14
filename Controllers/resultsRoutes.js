const axios = require('axios');
const router = require('express').Router();

router.get('/:query', async (req, res) => {
  var searchResult;
  try {
    searchResult = await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=pETvCuGAevOjovqF0cqFbAly9fYBD9vZ&keyword=fire&locale=en-us&page=2');
  } catch (err) {
    res.status(400).json(err);
  }

  searchResult = searchResult.data._embedded.events;
  let filteredEvents = [];

  searchResult.forEach(events => {
    if ('description' in events) {
      filteredEvents.push(events);
    }
  });

  let festivals = filteredEvents.map((event) => {
    return {
      name: event.name,
      summary: event.description,
      logo: event.images[0]
    }
  })

  res.render("results", {
    festivals
  })
});

module.exports = router;