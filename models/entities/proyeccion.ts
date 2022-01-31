import { DataTypes } from "sequelize";
import db from "../../db/connection";

const proyeccion = db.define(
  "proyeccion",
  {
    id: {
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    precision: {
      allowNull: true,
      type: DataTypes.FLOAT,
    },
    revisada: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default proyeccion;
