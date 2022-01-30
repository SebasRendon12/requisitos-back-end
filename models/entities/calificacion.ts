import { DataTypes } from "sequelize";
import db from "../../db/connection";

const calificacion = db.define("calificacion", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_actividad: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    id_estudiante: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    calificacion: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default calificacion;