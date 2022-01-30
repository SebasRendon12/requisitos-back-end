import { DataTypes } from "sequelize";
import db from "../../db/connection";

const municipio = db.define("municipio", {
    id_municipio: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    municipio: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    id_departamento: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default municipio;