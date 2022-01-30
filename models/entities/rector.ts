import { DataTypes } from "sequelize";
import db from "../../db/connection";

const rector = db.define("rector", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    usuario_id: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default rector;