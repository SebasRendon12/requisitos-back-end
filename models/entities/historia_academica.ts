import { DataTypes } from "sequelize";
import db from "../../db/connection";

const historia_academica = db.define("historia_academica", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    periodo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    id_estudiante: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    codigo_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    calificación: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    estado_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    id_plan_estudio: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default historia_academica;