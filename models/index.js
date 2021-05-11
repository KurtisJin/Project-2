const User = require('./User');
const Festivals = require('./Festivals');

User.hasMany(Festivals, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Festivals };
