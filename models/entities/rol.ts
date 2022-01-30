import { DataTypes } from "sequelize";
import db from "../../db/connection";

const rol = db.define("rol", {
    id_rol: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    rol: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default rol;