import { DataTypes } from "sequelize";
import db from "../../db/connection";

const usuario = db.define("usuario", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    identificacion: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    nombre_completo: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    nombre_usuario: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    contrasena: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    perfil: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    dninfoa_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default usuario;