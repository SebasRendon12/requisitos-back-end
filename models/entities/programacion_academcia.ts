import { DataTypes } from "sequelize";
import db from "../../db/connection";

const programacion_academcia = db.define("programacion_academcia", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    documentacion: {
        allowNull: true,
        type: DataTypes.STRING(5000)
    },
    fecha_de_publicacion: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    aprobacion: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
}, {
    timestamps: false
});

export default programacion_academcia;