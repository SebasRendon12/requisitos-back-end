import { DataTypes } from "sequelize";
import db from "../../db/connection";

const concurso_profesoral = db.define("concurso_profesoral", {
  nombre: {
    primaryKey: true,
    unique: true,
    type: DataTypes.STRING(100)
  }, 
}, {
  timestamps: false,
    freezeTableName: true,
});

export default concurso_profesoral;