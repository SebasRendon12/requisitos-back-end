import { DataTypes } from "sequelize";
import db from "../../db/connection";

const nota = db.define("nota", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    alumno: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    valor: {
        allowNull: true,
        type: DataTypes.FLOAT
    },
}, {
    timestamps: false
});

export default nota;