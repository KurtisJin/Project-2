const { Festivals } = require("../../models");

app.get('/festivals/search', async (req, res) => {
    const { resName } = req.query;
   
    const restaurants = await Festivals.find({$text: {$search: resName}})
   
    res.render('restaurants', { restaurants });
   
   })