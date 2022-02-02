import { where } from "sequelize/dist";
import { usuario } from "../../models/entities";

export const GetUser = async (nombre_usuario: string, contrasena: string) => {
  const Usuario = await usuario.findAll({
      where: {
        nombre_usuario: nombre_usuario,
        contrasena: contrasena
      }
  })
  if (Usuario) {
    return Usuario;
  } else {
    return null;
  }
}