import { DataTypes } from "sequelize";
import db from "../../db/connection";

const componente_plan_de_estudio = db.define("componente_plan_de_estudio", {
    id: {
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
    timestamps: false,
    freezeTableName: true,
});

export default componente_plan_de_estudio;