const sequelize = require('../config/connection');
const { User, Festival } = require('../models');

const userData = require('./userData.json');
const festivalData = require('./festivalsData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const festvials of festivalData) {
    await Festival.create({
      ...festvials,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();