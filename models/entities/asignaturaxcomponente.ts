import { DataTypes } from "sequelize";
import db from "../../db/connection";

const asignaturaxcomponente = db.define("asignaturaxcomponente", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.BIGINT,
        autoIncrement: true
    },
    id_componente: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
}, {
    timestamps: false
});

export default asignaturaxcomponente;