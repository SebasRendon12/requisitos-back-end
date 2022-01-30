import { DataTypes } from "sequelize";
import db from "../../db/connection";

const admitido = db.define("admitido", {
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
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default admitido;