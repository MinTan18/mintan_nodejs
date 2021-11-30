'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Train_station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Train_station.init({
    trainId: DataTypes.INTEGER,
    stationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Train_station',
  });
  return Train_station;
};