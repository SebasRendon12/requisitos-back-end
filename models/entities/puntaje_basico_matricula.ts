import { DataTypes } from "sequelize";
import db from "../../db/connection";

const puntaje_basico_matricula = db.define("puntaje_basico_matricula", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    valor: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
    punto: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    consistencia: {
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
    timestamps: false,
    freezeTableName: true,
});

export default puntaje_basico_matricula;