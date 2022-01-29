import { DataTypes } from "sequelize";
import db from "../../db/connection";

const estudiante = db.define("estudiante", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
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
    nombre: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    tipo_identificacion: {
        allowNull: true,
        type: DataTypes.STRING(5)
    },
    identificación: {
        allowNull: true,
        type: DataTypes.BIGINT
    },
    correo: {
        allowNull: true,
        type: DataTypes.STRING(150)
    },
    celular: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    telefono: {
        allowNull: true,
        type: DataTypes.STRING(20)
    },
    direccion: {
        allowNull: true,
        type: DataTypes.STRING(500)
    },
    estrato: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
    calidad: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    id_estado: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    situacion_militar: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    etnia: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    país: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    id_departamento: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    id_municipio: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    codigo_postal: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    acta_de_grado: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    resultado_icfes: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    nombre_responsable: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
    pbm: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    nombre_eps: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    ingresos_responsable: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    usuario: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    correo_personal: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    Contraseña: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    created_at: {
        allowNull: true,
        type: DataTypes.DATE
    },
    created_by: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    updated_at: {
        allowNull: true,
        type: DataTypes.DATE
    },
    updated_by: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    sede_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false
});

export default estudiante;