import { DataTypes } from "sequelize";
import db from "../../db/connection";

const asignatura = db.define("asignatura", {
    codigo: {
        primaryKey: true,
        unique: true,
        type: DataTypes.STRING(20)
    },
    nivel: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    departamento: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    horas_actividad_presencial: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    horas_actividad_autonomas: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    plan_de_estudios: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    validable: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    porcentaje_de_asistencia: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    tipologia: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    contenido: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    en_oferta: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    codigo_requisitos: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    tipo_requisitos: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    objetivo_de_formacion: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    creditos: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    bibliografia_minima: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    metodologia: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    distribucion_de_temas: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    modalidad: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    restriccion: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    fk_programacion_academica: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    aprobacion_director: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default asignatura;