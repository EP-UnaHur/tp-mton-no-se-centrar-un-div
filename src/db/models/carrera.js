'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Materia, {
        as: 'materia',
        foreignKey: 'carreraId'
      })

    }
  }
  
  Carrera.init({
    nombre: {type: DataTypes.STRING, allowNull: false},
    grado: {type: DataTypes.STRING, allowNull: false},
    universidad: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'Carrera',
    timestamps: false,
  });
  return Carrera;
};