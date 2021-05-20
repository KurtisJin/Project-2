const axios = require('axios');
const { Festival } = require('../../models');
const router = require('express').Router();
const sequelize = require('sequelize');

router.get('/:id', async (req, res) => {
  try { let ticketmasterId = Festival.findAll({
    where: {
      user_id: 2
    }
  });

  let eventId= [];
  let eventResults= [];
  
    eventId.forEach(element => {

      eventResults.push(await axios.get('https://app.ticketmaster.com/discovery/v2/events?apikey=pETvCuGAevOjovqF0cqFbAly9fYBD9vZ&locale=en-us&countryCode=US&segmentName=music' + req.params.id));
    });

  console.log(eventId);

  eventResult = eventId.data._embedded.events;

  let festivals = eventResults.map((event) => {

    return {
      name: event.name,
      summary: event.description,
      logo: event.images[event.images.length - 1].url,
      status: event.dates.status.code,
      span: event.dates.spanMultipleDays,
      date: event.dates.start.localDate,
      start: event.dates.start.localTime,
      venues: event._embedded.venues[0].name,
      address: event._embedded.venues[0].address.line1,
      city: event._embedded.venues[0].city.name,
      state: event._embedded.venues[0].state.stateCode
    }
  });

  res.render("profile", {
    festivals,
    user
  })
  } catch (err) {
    res.status(400).json(err);
  }
});