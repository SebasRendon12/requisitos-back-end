import { DataTypes } from "sequelize";
import db from "../../db/connection";

const financiacion = db.define("financiacion", {
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
    tipo: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    estudiante_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    admitido_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default financiacion;