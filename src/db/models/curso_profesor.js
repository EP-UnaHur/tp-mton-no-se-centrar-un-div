'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_Profesor extends Model {}

  Curso_Profesor.init({
    profesorId: {type: DataTypes.NUMBER, allowNull: false},
    cursoId: {type: DataTypes.NUMBER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Curso_Profesor',
    tableName: 'Curso_Profesor',
    timestamps: true,
  });
  return Curso_Profesor;
};