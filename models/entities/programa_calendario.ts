import { DataTypes } from "sequelize";
import db from "../../db/connection";

const programa_calendario = db.define("programa_calendario", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    metodologia: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    distribucion_de_temas: {
        allowNull: true,
        type: DataTypes.STRING(5000)
    },
    modalidad: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    codigo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default programa_calendario;