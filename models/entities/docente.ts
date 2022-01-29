import { DataTypes } from "sequelize";
import db from "../../db/connection";

const docente = db.define("docente", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    identificacion: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    correo: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    celular: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    tipo: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
}, {
    timestamps: false
});

export default docente;