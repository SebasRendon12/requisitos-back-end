import { DataTypes } from "sequelize";
import db from "../../db/connection";

const unidad_academica_basica = db.define("unidad_academica_basica", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    cantidad_docentes: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    numero_de_salones: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    nivel: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default unidad_academica_basica;