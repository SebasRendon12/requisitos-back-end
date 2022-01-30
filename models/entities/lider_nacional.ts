import { DataTypes } from "sequelize";
import db from "../../db/connection";

const lider_nacional = db.define("lider_nacional", {
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

export default lider_nacional;