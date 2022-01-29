import { DataTypes } from "sequelize";
import db from "../../db/connection";

const sesion = db.define("sesion", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATE
    },
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default sesion;