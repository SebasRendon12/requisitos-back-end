import { DataTypes } from "sequelize";
import db from "../../db/connection";

const sede = db.define("sede", {
  id: {
    allowNull: false,
    primaryKey: true,
    unique: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  nombre: {
    allowNull: true,
    type: DataTypes.STRING(150)
  },
  pagina_web: {
    allowNull: true,
    type: DataTypes.STRING(150)
  },
  nit: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  direccion: {
    allowNull: true,
    type: DataTypes.STRING(300)
  },
  telefono_local: {
    allowNull: true,
    type: DataTypes.BIGINT
  },
  universidad_id: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
}, {
  timestamps: false
});

export default sede;