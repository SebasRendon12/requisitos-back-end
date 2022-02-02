import { DataTypes } from "sequelize";
import db from "../../db/connection";

const usuario = db.define("usuario", {
    id: {
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
        unique: true,
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
    timestamps: false,
    freezeTableName: true,
});

/* usuario.create({
    identificacion: "1001774262",
    nombre_completo: "Julian Carvajal",
    nombre_usuario: "estudiante1",
    contrasena: "12345",
    perfil: "estudiante",
})

usuario.create({
    identificacion: "1001774362",
    nombre_completo: "Sebastian Lopez Mazo",
    nombre_usuario: "estudiante2",
    contrasena: "12345",
    perfil: "estudiante",
})

usuario.create({
    identificacion: "123456789",
    nombre_completo: "Juan David",
    nombre_usuario: "estudiante3",
    contrasena: "12345",
    perfil: "estudiante",
}) */

export default usuario;