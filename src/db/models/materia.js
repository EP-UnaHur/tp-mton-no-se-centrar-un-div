'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materia.init({
    nombre: {type: DataTypes.STRING, allowNull:false},
    cuatrimestal: {type: DataTypes.BOOLEAN, allowNull: false},
    anio: {type: DataTypes.STRING, allowNull: false},
    carreraId: {type: DataTypes.NUMBER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false,
  });
  return Materia;
};