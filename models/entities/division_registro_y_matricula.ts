import { DataTypes } from "sequelize";
import db from "../../db/connection";

const division_registro_y_matricula = db.define("division_registro_y_matricula", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    sede_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false
});

export default division_registro_y_matricula;