import { DataTypes } from "sequelize";
import db from "../../db/connection";

const departamento = db.define("departamento", {
    id_departamento: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    departamento: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false
});

export default departamento;