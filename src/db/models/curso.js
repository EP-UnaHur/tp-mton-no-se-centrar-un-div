'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId'
      })
      this.belongsToMany(models.Profesor, {  //Puede que lo cambie
        // as: 'profesor',
        through: 'Curso_Profesor',
        foreignKey: 'profesorId',
        otherKey: 'cursoId'
      })
    }
  }

  Curso.init({
    comision: DataTypes.STRING,
    turno: {type: DataTypes.STRING, allowNull: false},
    fechaInicio: {type: DataTypes.DATEONLY, allowNull: false},
    fechaFin: {type: DataTypes.DATEONLY, allowNull: false},
    materiaId: {type: DataTypes.NUMBER, allowNull: false}
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'Cursos',
    timestamps: false,
  });
  return Curso;
};