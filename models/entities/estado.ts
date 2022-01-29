import { DataTypes } from "sequelize";
import db from "../../db/connection";

const estado = db.define("estado", {
    id_estado: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    estado: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    descripcion: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false
});

export default estado;