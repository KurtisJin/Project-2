const User = require('./User');
const Festival = require('./Festival');

User.hasMany(Festival, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Festival.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = {
  User,
  Festival
};