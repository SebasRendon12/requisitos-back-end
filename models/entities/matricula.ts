import { DataTypes } from "sequelize";
import db from "../../db/connection";

const matricula = db.define("matricula", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    valor: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
    estudiante_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    fraccionamiento_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default matricula;