import { usuario } from "../../models/entities";



export const SignIn = async (username: any, password: any) => {
  const user = await usuario.findOne({
    where: {
      nombre_usuario: username,
      contrasena: password
    }
  });
  return user;
}