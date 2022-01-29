import { DataTypes } from "sequelize";
import db from "../../db/connection";

const dato = db.define("dato", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    dato_de_padre: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    dato_de_madre: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    dato_de_admitido: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    documentacion_socioeconomica_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    consistencia: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
}, {
    timestamps: false
});

export default dato;