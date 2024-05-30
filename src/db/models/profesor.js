'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesor.init({
    nombre: {type: DataTypes.STRING, allowNull: false},
    fechaNacimiento: {type: DataTypes.DATEONLY, allowNull: false},
    legajo: DataTypes.NUMBER,
    activo: {type: DataTypes.BOOLEAN, allowNull: false}
  }, {
    sequelize,
    modelName: 'Profesor',
    timestamps: false,
  });
  return Profesor;
};