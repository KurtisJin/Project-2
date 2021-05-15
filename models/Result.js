const {
  Model,
  DataTypes,
} = require('sequelize');
const Festival = require('./Festival');
const sequelize = require('../config/connection');

class Result extends Model {} 

Result.init(
  {
    id: {
      type: DataTypes.INTEGER,
      references: {
        model: `festival`,
        key: `id`
      }
    },
    name: {
      type: DataTypes.STRING,
      references: {
        model: `festival`,
        key: `name`
      },
      description: {
        type: DataTypes.STRING,
        references: `festival`,
          key: `description`
      },
    },
  },
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'project',
});
  
module.exports = Result;