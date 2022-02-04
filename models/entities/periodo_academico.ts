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
        type: DataTypes.INTEGER
    },
    periodo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    recibos_de_pago_habilitados: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default periodo_academico;