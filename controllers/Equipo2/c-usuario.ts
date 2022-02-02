import { Request, Response } from "express";
import { GetUser } from "../../logic/Equipo2/l-usuario";

export const getuser = async (req: Request, res: Response) => {
  const { nombre_usuario, contrasena } = req.params;
  const user = await GetUser(String(nombre_usuario),String(contrasena));
  if (user) {
    res.status(200).json({
      success: true,
      message: user
    })
  } else {
    res.status(404).json({
      success: false,
      message: false
    })
  }
}