const {
  Model,
  DataTypes,
  Festival
} = require('sequelize');
const sequelize = require('../config/connection');

Result.init({
  id: {
    type: DataTypes.INTEGER,
    references: {
      model: `festival`,
      key: `id`
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
  }
})