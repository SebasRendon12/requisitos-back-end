import { DataTypes } from "sequelize";
import db from "../../db/connection";

const descuento = db.define("descuento", {
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
    consistencia: {
        allowNull: true,
        type: DataTypes.STRING(150)
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

export default descuento;