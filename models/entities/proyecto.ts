import { DataTypes } from "sequelize";
import db from "../../db/connection";

const proyecto = db.define("proyecto", {
    nombre: {
        primaryKey: true,
        unique: true,
        type: DataTypes.STRING(100)
    },
    codigo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    codigo_quipu: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    fecha_inicio: {
        allowNull: true,
        type: DataTypes.DATE
    },
    fecha_fin: {
        allowNull: true,
        type: DataTypes.DATE
    },
    grupo_de_investigacion: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default proyecto;