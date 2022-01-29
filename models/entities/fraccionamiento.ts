import { DataTypes } from "sequelize";
import db from "../../db/connection";

const fraccionamiento = db.define("fraccionamiento", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, cantidad: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
}, {
    timestamps: false
});

export default fraccionamiento;