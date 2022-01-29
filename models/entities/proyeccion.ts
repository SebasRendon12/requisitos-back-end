import { DataTypes } from "sequelize";
import db from "../../db/connection";

const proyeccion = db.define("proyeccion", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    precision: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
}, {
    timestamps: false
});

export default proyeccion;