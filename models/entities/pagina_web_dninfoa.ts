import { DataTypes } from "sequelize";
import db from "../../db/connection";

const pagina_wed_dninfoa = db.define("pagina_wed_dninfoa", {
    id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    dominio: {
        allowNull: true,
        type: DataTypes.STRING(300)
    },
    credencial: {
        allowNull: true,
        type: DataTypes.STRING(100)
    },
}, {
    timestamps: false
});

export default pagina_wed_dninfoa;