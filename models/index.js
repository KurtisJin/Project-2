const User = require('./User');
const Festival = require('./Festival');
const Comments = require('./Comment');
const Result = require('./Result')

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
})

User.hasMany(Result, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

module.exports = {
  User,
  Festival
};