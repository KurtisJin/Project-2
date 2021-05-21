const User = require('./User');
const Festival = require('./Festival');
const Comments = require('./Comment');


User.hasMany(Festival, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Festival.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Festival
};