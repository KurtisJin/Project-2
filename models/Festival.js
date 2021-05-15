const {
  Model,
  DataTypes
} = require('sequelize');
const sequelize = require('../config/connection');

class Festival extends Model {}


Festival.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lineup: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
    // image: {
    //   default: ''
    // },  
    
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
<<<<<<< HEAD
  },

=======
  }, 
>>>>>>> 7a827dc322f8f5b4f09ca2ff2f596a81e07927e4
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'project',
});

module.exports = Festival;