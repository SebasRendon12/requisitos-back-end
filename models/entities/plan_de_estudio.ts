import { DataTypes } from "sequelize";
import db from "../../db/connection";

const plan_de_estudio = db.define("plan_de_estudio", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    vigencia: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    estado: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    nivel: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    fecha_creacion: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default plan_de_estudio;