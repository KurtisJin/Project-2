const User = require('./User');
const Festivals = require('./Festivals');

User.hasMany(Festivals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Festivals.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Festivals };
