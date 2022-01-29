import { DataTypes } from "sequelize";
import db from "../../db/connection";

const apoyo_socioeconomico = db.define("apoyo_socioeconomico", {
    id_apoyo: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    apoyo_socioeconomico: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    estado: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false
});

export default apoyo_socioeconomico;