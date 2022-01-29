import { DataTypes } from "sequelize";
import db from "../../db/connection";

const funcionario = db.define("funcionario", {
    cedula: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER
    },
    primer_nombre: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    segundo_nombre: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    primer_apellido: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    segundo_apellido: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    fecha_nacimiento: {
        allowNull: true,
        type: DataTypes.DATEONLY
    },
    usuario: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    contrasena: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    id_estado: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    id_rol: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    permiso: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    division_registro_y_matricula_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default funcionario;