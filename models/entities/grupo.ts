import { DataTypes } from "sequelize";
import db from "../../db/connection";

const grupo = db.define("grupo", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    codigo_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    numero_grupo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    id_docente: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    numero_de_cupos: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    salón: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    hora_inicio: {
        allowNull: true,
        type: DataTypes.TIME
    },
    hora_final: {
        allowNull: true,
        type: DataTypes.TIME
    },
    dias: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    duracion: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    estado: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    jornada: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    convocatoria: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    fk_docente: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    cantidad_estudiantes: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default grupo;