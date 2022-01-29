import { DataTypes } from "sequelize";
import db from "../../db/connection";

const dninfoa = db.define("dninfoa", {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  pagina_web_dninfoa_id: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  lider_nacional_id: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
}, {
  timestamps: false
});

export default dninfoa;