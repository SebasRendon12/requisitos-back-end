import { DataTypes } from "sequelize";
import db from "../../db/connection";

const transaccion = db.define("transaccion", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    respuesta: {
        allowNull: true,
        type: DataTypes.STRING(300)
    },
    valor: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
    fecha: {
        allowNull: true,
        type: DataTypes.DATE
    },
    metodo_de_pago: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    recibo_de_pago_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default transaccion;