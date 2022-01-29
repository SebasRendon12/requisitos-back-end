import { DataTypes } from "sequelize";
import db from "../../db/connection";

const apoyo_socioeconomico_estudiante = db.define("apoyo_socioeconomico_estudiante", {
    id_apoyo: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    cedula: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    estado: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    created_by: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    created_at: {
        allowNull: true,
        type: DataTypes.DATE
    },
}, {
    timestamps: false
});

export default apoyo_socioeconomico_estudiante;