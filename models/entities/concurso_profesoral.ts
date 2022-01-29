import { DataTypes } from "sequelize";
import db from "../../db/connection";

const concurso_profesoral = db.define("concurso_profesoral", {
  nombre: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.STRING(100),
    autoIncrement: true
  }, 
}, {
  timestamps: false
});

export default concurso_profesoral;