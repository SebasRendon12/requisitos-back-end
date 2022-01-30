import { DataTypes } from "sequelize";
import db from "../../db/connection";

const documento = db.define("documento", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    path: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    documentacion_socioeconomica_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    doc_personal: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    doc_ingreso_padre_madre: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    doc_descuento: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    doc_especial: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default documento;