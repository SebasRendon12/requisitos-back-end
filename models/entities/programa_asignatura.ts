import { DataTypes } from "sequelize";
import db from "../../db/connection";

const programa_asignatura = db.define("programa_asignatura", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    fk_codigo: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    validable: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    contenido_basico: {
        allowNull: true,
        type: DataTypes.STRING(5000)
    },
    objetivo_formacion: {
        allowNull: true,
        type: DataTypes.STRING(5000)
    },
    bibliografia_minima: {
        allowNull: true,
        type: DataTypes.STRING(5000)
    },
    porcentaje_asistencia_minimo: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default programa_asignatura;
