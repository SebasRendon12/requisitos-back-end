import { DataTypes } from "sequelize";
import db from "../../db/connection";

const documentacion_socioeconomica = db.define("documentacion_socioeconomica", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    estado: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    consistencia: {
        allowNull: true,
        type: DataTypes.STRING(50)
    },
    admitido_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default documentacion_socioeconomica;