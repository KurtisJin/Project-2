const axios = require('axios');
const router = require('express').Router();

router.get('/:query/:page?', async (req, res) => {
  var searchResult;
  const page = req.params.page ? req.params.page : 1;
  try {
    searchResult = await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=pETvCuGAevOjovqF0cqFbAly9fYBD9vZ&keyword=' + req.params.query + '&locale=en-us&segmentName=music&page=' + page);
  } catch (err) {
    res.status(400).json(err);
  }

  searchResult = searchResult.data._embedded.events;
  console.log(searchResult[0].classifications);
  // console.log(searchResult[0].classifications[0].subGenre);
  let filteredEvents = searchResult.filter(events => {
    return ('name' in events)
  });

  let festivals = filteredEvents.map((event) => {
    return {
      name: event.name,
      summary: event.description,
      logo: event.images[event.images.length - 1].url
    }
  });

  res.render("results", {
    festivals
  })
});

module.exports = router;