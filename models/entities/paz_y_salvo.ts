import { DataTypes } from "sequelize";
import db from "../../db/connection";

const paz_y_salvo = db.define("paz_y_salvo", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    concepto: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    valor: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    dependencia: {
        allowNull: true,
        type: DataTypes.STRING(200)
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

export default paz_y_salvo;