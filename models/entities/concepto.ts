import { DataTypes } from "sequelize";
import db from "../../db/connection";

const concepto = db.define("concepto", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    valor: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default concepto;