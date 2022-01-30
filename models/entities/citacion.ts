import { DataTypes } from "sequelize";
import db from "../../db/connection";

const citacion = db.define("citacion", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    semestre: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    id_estudiante: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    papi: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    evaluacion_docente: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    dia: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    hora_inicio: {
        allowNull: true,
        type: DataTypes.TIME
    },
    hora_fin: {
        allowNull: true,
        type: DataTypes.TIME
    },
    publicada: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default citacion;