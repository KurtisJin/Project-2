const axios = require('axios');
const { response } = require('express');
const router = require('express').Router();

router.get('/:query/:page?', async (req, res) => {
  var searchResult;
  const page = req.params.page ? req.params.page : 1;
  try {
   const response = await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=pETvCuGAevOjovqF0cqFbAly9fYBD9vZ&keyword=' + req.params.query + '&locale=en-us&segmentName=music&page=' + page);
   console.log(response);
  searchResult = response.data._embedded.events;
  console.log(searchResult[0].classifications);
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

  // [
  //  {
  //    index:1,
  //    href:"/results/fire/1"
  //   },
  //   "/results/fire/2",
  //   "/results/fire/3",
  //   "/results/fire/4",
  // ];
  let resultsPages = [];
  for (let index = 1; index <= response.data.page.totalPages; index++) {
    resultsPages.push({index:index,href:"/results/"+req.params.query+"/"+index});
  }
  console.log(resultsPages);
  res.render("results", {
    festivals,
    resultsPages
  })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;