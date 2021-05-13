const axios = require('axios');
const router = require('express').Router();

router.get('/:query', async (req, res) => {
  const eventData = await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=pETvCuGAevOjovqF0cqFbAly9fYBD9vZ&keyword=fire&locale=*');
  console.log(eventData);
  let queryResult = eventData.data._embedded.events;
  let festivals = queryResult.map((event) => {
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