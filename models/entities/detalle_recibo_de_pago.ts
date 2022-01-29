import { DataTypes } from "sequelize";
import db from "../../db/connection";

const detalle_recibo_de_pago = db.define("detalle_recibo_de_pago", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    recibo_de_pago_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    concepto_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default detalle_recibo_de_pago;