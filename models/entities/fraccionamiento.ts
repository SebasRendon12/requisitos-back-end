import { DataTypes } from "sequelize";
import db from "../../db/connection";

const fraccionamiento = db.define("fraccionamiento", {
    id: {
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    }, cantidad: {
        allowNull: true,
        type: DataTypes.TINYINT
    },
}, {
    timestamps: false,
    freezeTableName: true,
});

export default fraccionamiento;