import { DataTypes } from "sequelize";
import db from "../../db/connection";

const componente_plan_de_estudio = db.define("componente_plan_de_estudio", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    tipo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
}, {
    timestamps: false
});

export default componente_plan_de_estudio;