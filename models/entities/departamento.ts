import { DataTypes } from "sequelize";
import db from "../../db/connection";

const departamento = db.define("departamento", {
    id_departamento: {
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
    timestamps: false,
    freezeTableName: true,
});

export default departamento;