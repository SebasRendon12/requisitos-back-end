import { DataTypes } from "sequelize";
import db from "../../db/connection";

const solicitud_de_cupo = db.define("solicitud_de_cupo", {
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
    grupo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    motivo: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
}, {
    timestamps: false
});

export default solicitud_de_cupo;