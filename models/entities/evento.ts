import { DataTypes } from "sequelize";
import db from "../../db/connection";

const evento = db.define("evento", {
    nombre: {
        primaryKey: true,
        unique: true,
        type: DataTypes.STRING(100)
    },
    hora: {
        allowNull: true,
        type: DataTypes.TIME
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    lugar: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    caracter: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default evento;