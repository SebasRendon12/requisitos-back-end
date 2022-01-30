import { DataTypes } from "sequelize";
import db from "../../db/connection";

const recibo_de_pago = db.define("recibo_de_pago", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    codigo_de_barras: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    periodo: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    anno: {
        allowNull: true,
        type: DataTypes.SMALLINT
    },
    fecha_de_emision: {
        allowNull: true,
        type: DataTypes.DATE
    },
    estado_de_pago: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    valor: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
    consistencia: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    fecha_de_pago_extemporaneo: {
        allowNull: true,
        type: DataTypes.DATE
    },
    fecha_de_pago_oportuno: {
        allowNull: true,
        type: DataTypes.DATE
    },
    estudiante_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default recibo_de_pago;