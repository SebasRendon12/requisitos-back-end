import { DataTypes } from "sequelize";
import db from "../../db/connection";

const periodo_academico = db.define("periodo_academico", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    numero: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    anno: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    periodo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    estudiante_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default periodo_academico;