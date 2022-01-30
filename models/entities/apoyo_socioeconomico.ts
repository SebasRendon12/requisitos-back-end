import { DataTypes } from "sequelize";
import db from "../../db/connection";

const apoyo_socioeconomico = db.define("apoyo_socioeconomico", {
    id_apoyo: {
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
    timestamps: false,
    freezeTableName: true,
});

export default apoyo_socioeconomico;