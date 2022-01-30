import { DataTypes } from "sequelize";
import db from "../../db/connection";

const matricula = db.define("matricula", {
    id: {
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
    timestamps: false,
    freezeTableName: true,
});

export default matricula;