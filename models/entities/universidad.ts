import { DataTypes } from "sequelize";
import db from "../../db/connection";

const universidad = db.define("universidad", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING(200)
  },
}, {
  timestamps: false,
    freezeTableName: true,
});

export default universidad;