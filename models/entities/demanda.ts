import { DataTypes } from "sequelize";
import db from "../../db/connection";

const demanda = db.define("demanda", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    fk_proyeccion: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    nombre_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    cantidad_esperada: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default demanda;