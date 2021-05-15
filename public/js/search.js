const { Festivals } = require("../../models");

app.get('/publicsearch', async (req, res) => {
    const { resName } = req.query;
   
    const festivalSearch = await Festivals.find({$text: {$search: resName}})
   
    res.render('festivals', { festivalSearch });
   
   })