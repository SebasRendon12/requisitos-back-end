import { DataTypes } from "sequelize";
import db from "../../db/connection";

const puntaje_basico_matricula = db.define("puntaje_basico_matricula", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    Valor: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    Punto: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    Consistencia: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    admitido_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    estudiante_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default puntaje_basico_matricula;