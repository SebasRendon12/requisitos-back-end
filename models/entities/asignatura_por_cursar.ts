import { DataTypes } from "sequelize";
import db from "../../db/connection";

const asignatura_por_cursar = db.define("asignatura_por_cursar", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    id_plan_estudio: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    codigo_asignatura: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default asignatura_por_cursar;