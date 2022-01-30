import { DataTypes } from "sequelize";
import db from "../../db/connection";

const actividad = db.define("actividad", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    codigo_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    calificacion_minima: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    porcentaje: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    calificacion: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    fecha_presentacion: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    caracter: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    tipo: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    bibliografia_minima: {
        allowNull: true,
        type: DataTypes.STRING(1000)
    },
    ponderacion: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    validable: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default actividad;