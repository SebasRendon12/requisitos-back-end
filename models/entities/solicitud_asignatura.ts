import { DataTypes } from "sequelize";
import db from "../../db/connection";

const solicitud_asignatura = db.define("solicitud_asignatura", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    id_docente: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    tipo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    nombre_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    nivel: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    archivos: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    motivo: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    aprobacion_comite: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    aprobacion_consejo: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    aprobacion_director: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default solicitud_asignatura;