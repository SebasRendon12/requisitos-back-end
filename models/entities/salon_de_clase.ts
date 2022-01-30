import { DataTypes } from "sequelize";
import db from "../../db/connection";

const salon_de_clase = db.define("salon_de_clase", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    codigo: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    cantidad_maxima_estudiantes: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    nivel: {
        allowNull: true,
        type: DataTypes.STRING(200)
    },
    fk_grupo: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default salon_de_clase;