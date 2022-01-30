import { DataTypes } from "sequelize";
import db from "../../db/connection";

const User = db.define("User", {
  id: {
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(150)
  },
  age: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  sex: {
    allowNull: false,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  }
}, {
  timestamps: false,
    freezeTableName: true,
});

export default User;